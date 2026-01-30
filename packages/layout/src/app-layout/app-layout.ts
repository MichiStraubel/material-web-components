import { html, nothing, type TemplateResult, type PropertyValues } from 'lit';
import { customElement, property, state, queryAssignedElements } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { MdElement, adoptStyles } from '@material-wc/core';

import appLayoutStyles from './app-layout.css?inline';
import '../nav-item/nav-item.js';
import type { MdNavItem, NavItemMode } from '../nav-item/nav-item.js';
import '../nav-group/nav-group.js';
import type { HierarchicalNavigation } from '../nav-group/nav-group.js';
import '@material-wc/core/icon';

/**
 * Window size class based on MD3 breakpoints.
 */
export type WindowSizeClass = 'compact' | 'medium' | 'expanded' | 'large' | 'extra-large';

/**
 * A single navigation destination, optionally with children for hierarchical navigation.
 */
export interface NavDestination {
  /** Unique identifier for this destination */
  value: string;
  /** Display label */
  label: string;
  /** Material icon name */
  icon: string;
  /** Optional badge text (e.g., unread count) */
  badge?: string;
  /** URL to navigate to. If provided, renders as <a> instead of <button>. */
  href?: string;
  /** Link target when href is provided (e.g., '_blank', '_self') */
  target?: string;
  /** If true, only show in drawer (not in bar/rail) */
  drawerOnly?: boolean;
  /** Child navigation items for hierarchical drill-down (max 2 additional levels) */
  children?: NavDestination[];
}

/**
 * A section grouping multiple navigation destinations (drawer only).
 */
export interface NavSection {
  /** Optional section label */
  label?: string;
  /** Navigation items in this section */
  items: NavDestination[];
}

/**
 * Navigation structure: flat items, sections, or hierarchical items with children.
 * Items with `children` property enable hierarchical drill-down navigation.
 */
export type Navigation = (NavDestination | NavSection)[];

/**
 * Material Design 3 App Layout Component (MD3 Expressive)
 *
 * Root layout component for SPAs that provides adaptive navigation
 * based on viewport width. Automatically switches between:
 * - Bottom Navigation Bar (compact: < 600px)
 * - Flexible Navigation Bar (medium: 600-839px)
 * - Navigation Rail with toggle (expanded: 840-1199px)
 * - Navigation Rail expanded by default (large: 1200-1599px)
 * - Navigation Rail expanded permanent (extra-large: ≥ 1600px)
 *
 * Additionally supports a modal Navigation Drawer that can be opened
 * at any viewport size for apps with more than 5 navigation destinations.
 *
 * @element md-app-layout
 *
 * @slot - Default slot for main content
 * @slot top-app-bar - Top app bar content
 * @slot nav - Navigation items (md-nav-item elements)
 * @slot nav-fab - FAB in the navigation header
 * @slot drawer-header - Header content for the modal drawer
 *
 * @csspart layout - The root layout container
 * @csspart nav - The navigation container
 * @csspart nav-header - Navigation header (FAB area)
 * @csspart nav-items - Navigation items container
 * @csspart scrim - Modal scrim overlay
 * @csspart drawer - The modal navigation drawer
 * @csspart drawer-header - Drawer header area
 * @csspart drawer-items - Drawer navigation items container
 * @csspart content-area - Content area wrapper
 * @csspart top-app-bar - Top app bar area
 * @csspart content - Main content area
 *
 * @fires nav-change - Fired when navigation selection changes, detail: { value: string }
 * @fires nav-expand - Fired when navigation expands/collapses, detail: { expanded: boolean }
 * @fires drawer-change - Fired when drawer opens/closes, detail: { open: boolean }
 */
@customElement('md-app-layout')
export class MdAppLayout extends MdElement {
  static override styles = [adoptStyles(appLayoutStyles)];

  /**
   * Currently selected navigation item value.
   */
  @property({ type: String, attribute: 'selected-nav' })
  selectedNav: string = '';

  /**
   * Whether the navigation rail is expanded.
   * In compact/medium modes, this controls the modal overlay.
   * In large/extra-large modes, this is true by default.
   */
  @property({ type: Boolean, reflect: true, attribute: 'nav-expanded' })
  navExpanded: boolean = false;

  /**
   * Whether the modal navigation drawer is open.
   * The drawer provides full navigation when the bottom bar has limited space.
   * When open, the bottom navigation bar is hidden.
   */
  @property({ type: Boolean, reflect: true, attribute: 'drawer-open' })
  drawerOpen: boolean = false;

  /**
   * Navigation structure. When provided, the component renders navigation
   * items internally instead of using the nav slot.
   *
   * In compact mode:
   * - If ≤5 bar-eligible items: Bottom Navigation Bar
   * - If >5 items or sections exist: Menu button opens Drawer
   */
  @property({ type: Array, attribute: false })
  navigation: Navigation = [];

  /**
   * @deprecated Use `navigation` property with `children` on items instead.
   * Hierarchical navigation structure with support for nested items (up to 3 levels).
   * When provided, enables drill-down navigation in the drawer.
   */
  @property({ type: Array, attribute: false })
  hierarchicalNavigation: HierarchicalNavigation = [];

  /**
   * Current window size class, computed from viewport width.
   */
  @state()
  private windowSizeClass: WindowSizeClass = 'compact';

  @queryAssignedElements({ slot: 'nav', flatten: true })
  private navItems!: MdNavItem[];

  private resizeObserver?: ResizeObserver;

  override connectedCallback(): void {
    super.connectedCallback();
    this.setupResizeObserver();
    this.addEventListener('nav-item-click', this.handleNavItemClick as EventListener);
    this.addEventListener('nav-select', this.handleHierarchicalNavSelect as EventListener);
    this.addEventListener('nav-close', this.handleNavClose as EventListener);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.resizeObserver?.disconnect();
    this.removeEventListener('nav-item-click', this.handleNavItemClick as EventListener);
    this.removeEventListener('nav-select', this.handleHierarchicalNavSelect as EventListener);
    this.removeEventListener('nav-close', this.handleNavClose as EventListener);
  }

  protected override firstUpdated(): void {
    // Initial mode update for slotted items after first render
    // Use requestAnimationFrame to ensure slot content is available
    requestAnimationFrame(() => {
      this.updateNavItems();
    });
  }

  protected override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (changedProperties.has('selectedNav') || changedProperties.has('windowSizeClass') || changedProperties.has('drawerOpen')) {
      this.updateNavItems();
    }

    if (changedProperties.has('navExpanded')) {
      this.emit('nav-expand', { expanded: this.navExpanded });
    }

    if (changedProperties.has('drawerOpen')) {
      this.emit('drawer-change', { open: this.drawerOpen });
    }
  }

  private setupResizeObserver(): void {
    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        this.windowSizeClass = this.computeWindowSizeClass(width);
        this.updateNavItemModes();

        // Auto-expand for large/extra-large
        if (this.windowSizeClass === 'extra-large') {
          this.navExpanded = true;
        }
      }
    });
    this.resizeObserver.observe(this);
  }

  private computeWindowSizeClass(width: number): WindowSizeClass {
    if (width < 600) return 'compact';
    if (width < 840) return 'medium';
    if (width < 1200) return 'expanded';
    if (width < 1600) return 'large';
    return 'extra-large';
  }

  private handleNavItemClick = (event: CustomEvent<{ value: string }>): void => {
    event.stopPropagation();
    const newValue = event.detail.value;

    if (newValue !== this.selectedNav) {
      this.selectedNav = newValue;
      this.emit('nav-change', { value: newValue });
    }

    // Close modal nav on selection (compact/medium)
    if (this.isModalMode && this.navExpanded) {
      this.navExpanded = false;
    }

    // Close drawer on selection
    if (this.drawerOpen) {
      this.drawerOpen = false;
    }
  };

  private handleHierarchicalNavSelect = (event: CustomEvent<{ value: string; path: string[] }>): void => {
    event.stopPropagation();
    const newValue = event.detail.value;

    if (newValue !== this.selectedNav) {
      this.selectedNav = newValue;
      this.emit('nav-change', { value: newValue, path: event.detail.path });
    }

    // Close drawer on selection
    if (this.drawerOpen) {
      this.drawerOpen = false;
    }
  };

  private handleNavClose = (): void => {
    this.closeDrawer();
  };

  private slotOverflowWarned = false;

  private updateNavItems(): void {
    if (!this.navItems || this.navItems.length === 0) return;

    const maxItems = 5;
    const mode = this.getNavItemMode();

    for (let i = 0; i < this.navItems.length; i++) {
      const item = this.navItems[i];
      item.selected = item.value === this.selectedNav;
      item.mode = mode;

      if (i >= maxItems) {
        item.style.display = 'none';
      } else {
        item.style.display = '';
      }
    }

    if (this.navItems.length > maxItems && !this.slotOverflowWarned) {
      this.slotOverflowWarned = true;
      console.warn(
        `[md-app-layout] Navigation bar supports max ${maxItems} items (MD3 guideline). ` +
        `${this.navItems.length - maxItems} item(s) hidden. ` +
        `Use the \`navigation\` property for >5 items (automatic drawer fallback).`
      );
    }
  }

  private updateNavItemModes(): void {
    if (!this.navItems || this.navItems.length === 0) return;

    const mode = this.getNavItemMode();
    for (const item of this.navItems) {
      item.mode = mode;
    }
  }

  private getNavItemMode(): 'bar' | 'bar-horizontal' | 'rail' | 'expanded' {
    // Drawer always shows expanded mode
    if (this.drawerOpen) {
      return 'expanded';
    }

    if (this.navExpanded) {
      return 'expanded';
    }

    switch (this.windowSizeClass) {
      case 'compact':
        return 'bar';
      case 'medium':
        // Flexible Navigation Bar: horizontal layout at medium screens
        return 'bar-horizontal';
      default:
        return 'rail';
    }
  }

  /**
   * Whether the expanded navigation should be modal (with scrim).
   */
  private get isModalMode(): boolean {
    return this.windowSizeClass === 'compact' || this.windowSizeClass === 'medium';
  }

  /**
   * Whether the navigation rail should be permanently expanded.
   */
  private get isPermanentExpanded(): boolean {
    return this.windowSizeClass === 'extra-large';
  }

  /**
   * Check if a navigation entry is a section (has items array).
   */
  private isNavSection(entry: NavDestination | NavSection): entry is NavSection {
    return 'items' in entry;
  }

  /**
   * Get all flat navigation items (excluding sections structure).
   */
  private get allNavItems(): NavDestination[] {
    const items: NavDestination[] = [];
    for (const entry of this.navigation) {
      if (this.isNavSection(entry)) {
        items.push(...entry.items);
      } else {
        items.push(entry);
      }
    }
    return items;
  }

  /**
   * Get items eligible for the navigation bar (not drawerOnly).
   */
  private get barItems(): NavDestination[] {
    return this.allNavItems.filter(item => !item.drawerOnly);
  }

  /**
   * Whether navigation has sections (requires drawer).
   */
  private get hasSections(): boolean {
    return this.navigation.some(entry => this.isNavSection(entry));
  }

  /**
   * Whether to use drawer mode in compact view.
   * True if >5 bar items or sections exist, or hierarchical navigation is used.
   */
  private get useDrawerInCompact(): boolean {
    return this.barItems.length > 5 || this.hasSections || this.hasHierarchicalNavigation;
  }

  /**
   * Whether hierarchical navigation is configured.
   * Checks both the deprecated hierarchicalNavigation property and
   * navigation items with children.
   */
  private get hasHierarchicalNavigation(): boolean {
    // Check deprecated property first (for backwards compatibility)
    if (this.hierarchicalNavigation.length > 0) {
      return true;
    }
    // Check if any navigation item has children
    return this.allNavItems.some(item => item.children && item.children.length > 0);
  }

  /**
   * Get the hierarchical navigation data, converting from navigation if needed.
   */
  private get hierarchicalNavigationData(): HierarchicalNavigation {
    // Use deprecated property if set (backwards compatibility)
    if (this.hierarchicalNavigation.length > 0) {
      return this.hierarchicalNavigation;
    }
    // Convert navigation to hierarchical format
    return this.navigation as HierarchicalNavigation;
  }

  /**
   * Toggle the navigation expanded state.
   */
  toggleNav(): void {
    if (!this.isPermanentExpanded) {
      this.navExpanded = !this.navExpanded;
    }
  }

  /**
   * Expand the navigation.
   */
  expandNav(): void {
    this.navExpanded = true;
  }

  /**
   * Collapse the navigation.
   */
  collapseNav(): void {
    if (!this.isPermanentExpanded) {
      this.navExpanded = false;
    }
  }

  /**
   * Open the modal navigation drawer.
   */
  openDrawer(): void {
    this.drawerOpen = true;
  }

  /**
   * Close the modal navigation drawer.
   */
  closeDrawer(): void {
    this.drawerOpen = false;
  }

  /**
   * Toggle the modal navigation drawer.
   */
  toggleDrawer(): void {
    this.drawerOpen = !this.drawerOpen;
  }

  private handleScrimClick(): void {
    this.collapseNav();
    this.closeDrawer();
  }

  private handleMenuClick(): void {
    this.toggleNav();
  }

  private handleDrawerMenuClick(): void {
    this.toggleDrawer();
  }

  /**
   * Render a single navigation item.
   */
  private renderNavItem(item: NavDestination, mode: NavItemMode): TemplateResult {
    return html`
      <md-nav-item
        value=${item.value}
        label=${item.label}
        ?selected=${item.value === this.selectedNav}
        .mode=${mode}
        badge=${item.badge || ''}
        href=${ifDefined(item.href)}
        target=${ifDefined(item.target)}
      >
        <md-icon slot="icon">${item.icon}</md-icon>
      </md-nav-item>
    `;
  }

  /**
   * Render navigation items for the bar (compact mode).
   */
  private renderBarItems(): TemplateResult {
    const items = this.barItems.slice(0, 5); // Max 5 items in bar
    return html`${items.map(item => this.renderNavItem(item, 'bar'))}`;
  }

  /**
   * Render navigation items for the drawer.
   */
  private renderDrawerItems(): TemplateResult {
    const sections: TemplateResult[] = [];

    for (const entry of this.navigation) {
      if (this.isNavSection(entry)) {
        sections.push(html`
          <div class="drawer__section">
            ${entry.label ? html`<div class="drawer__section-label">${entry.label}</div>` : nothing}
            ${entry.items.map(item => this.renderNavItem(item, 'expanded'))}
          </div>
        `);
      } else {
        sections.push(this.renderNavItem(entry, 'expanded'));
      }
    }

    return html`${sections}`;
  }

  /**
   * Render the drawer menu button (shown when useDrawerInCompact is true).
   */
  private renderDrawerMenuButton(): TemplateResult {
    return html`
      <button
        class="nav__menu-btn drawer-menu-btn"
        @click=${this.handleDrawerMenuClick}
        aria-label="Open navigation menu"
        aria-expanded=${this.drawerOpen}
      >
        <md-icon>menu</md-icon>
      </button>
    `;
  }

  private renderMenuButton(): TemplateResult | typeof nothing {
    // No menu button for permanent expanded or compact bar mode
    if (this.isPermanentExpanded) return nothing;
    if (this.windowSizeClass === 'compact' && !this.navExpanded) return nothing;

    return html`
      <button
        class="nav__menu-btn"
        @click=${this.handleMenuClick}
        aria-label=${this.navExpanded ? 'Collapse navigation' : 'Expand navigation'}
        aria-expanded=${this.navExpanded}
      >
        <slot name="menu-icon">
          <md-icon>menu</md-icon>
        </slot>
      </button>
    `;
  }

  protected override render(): TemplateResult {
    const hasNavigation = this.navigation.length > 0;
    const hasHierarchical = this.hasHierarchicalNavigation;
    const useDrawerMode = (hasNavigation || hasHierarchical) && this.windowSizeClass === 'compact' && this.useDrawerInCompact;

    const layoutClasses = {
      'app-layout': true,
      [`app-layout--${this.windowSizeClass}`]: true,
      'app-layout--nav-expanded': this.navExpanded,
      'app-layout--modal': this.isModalMode && this.navExpanded,
      'app-layout--drawer-open': this.drawerOpen,
      'app-layout--drawer-mode': useDrawerMode,
    };

    const navClasses = {
      'nav': true,
      'nav--bar': this.windowSizeClass === 'compact' && !this.navExpanded && !this.drawerOpen && !useDrawerMode,
      'nav--bar-horizontal': this.windowSizeClass === 'medium' && !this.navExpanded && !this.drawerOpen,
      'nav--rail': !this.navExpanded && !this.drawerOpen && this.windowSizeClass !== 'compact' && this.windowSizeClass !== 'medium',
      'nav--expanded': this.navExpanded && !this.drawerOpen,
      'nav--modal': this.isModalMode && this.navExpanded && !this.drawerOpen,
    };

    const drawerClasses = {
      'drawer': true,
      'drawer--open': this.drawerOpen,
    };

    // Show scrim for modal navigation OR drawer
    const showScrim = (this.isModalMode && this.navExpanded) || this.drawerOpen;

    const scrimClasses = {
      'scrim': true,
      'scrim--visible': showScrim,
    };

    // In compact mode with >5 items or hierarchical nav, show burger menu in top-app-bar
    const showBurgerMenu = this.windowSizeClass === 'compact' && (useDrawerMode || hasHierarchical) && !this.drawerOpen;

    // Always show top app bar in compact mode
    const isCompact = this.windowSizeClass === 'compact';

    return html`
      <div class=${classMap(layoutClasses)} part="layout">
        <!-- Scrim for modal mode or drawer (always in DOM for smooth transitions) -->
        <div class=${classMap(scrimClasses)} part="scrim" @click=${this.handleScrimClick}></div>

        <!-- Modal Navigation Drawer (always in DOM for smooth transitions) -->
        <nav
          class=${classMap(drawerClasses)}
          part="drawer"
          aria-label="Navigation drawer"
          aria-hidden=${!this.drawerOpen}
          inert=${!this.drawerOpen || nothing}
        >
          ${hasHierarchical ? html`
            <md-nav-group
              .items=${this.hierarchicalNavigationData}
              selected-value=${this.selectedNav}
              mode="drawer"
              @nav-close=${this.handleNavClose}
            ></md-nav-group>
          ` : html`
            <div class="drawer__close-header" part="drawer-close-header">
              <button
                class="drawer-menu-btn"
                @click=${this.closeDrawer}
                aria-label="Close navigation"
              >
                <md-icon>menu_open</md-icon>
              </button>
              <slot name="drawer-header"></slot>
            </div>
            <div class="drawer__items" part="drawer-items" role="navigation">
              ${hasNavigation
                ? this.renderDrawerItems()
                : (this.drawerOpen ? html`<slot name="nav" @slotchange=${this.updateNavItems}></slot>` : nothing)}
            </div>
          `}
        </nav>

        <!-- Navigation (bar/rail) - hidden when drawer is open or in drawer mode -->
        ${!this.drawerOpen && !useDrawerMode ? html`
          <nav class=${classMap(navClasses)} part="nav" aria-label="Main navigation">
            <div class="nav__header" part="nav-header">
              ${this.renderMenuButton()}
              <slot name="nav-fab"></slot>
            </div>
            <div class="nav__items" part="nav-items" role="tablist">
              ${hasNavigation && this.windowSizeClass === 'compact'
                ? this.renderBarItems()
                : html`<slot name="nav" @slotchange=${this.updateNavItems}></slot>`}
            </div>
          </nav>
        ` : nothing}

        <!-- Content Area -->
        <div class="content-area" part="content-area">
          ${isCompact ? html`
            <header class="top-app-bar top-app-bar--compact" part="top-app-bar">
              ${showBurgerMenu ? this.renderDrawerMenuButton() : nothing}
              <slot name="top-app-bar"></slot>
            </header>
          ` : html`
            <header class="top-app-bar" part="top-app-bar">
              <slot name="top-app-bar"></slot>
            </header>
          `}
          <main class="content" part="content">
            <slot></slot>
          </main>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'md-app-layout': MdAppLayout;
  }
}
