import { html, nothing, type TemplateResult, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { MdElement, adoptStyles } from '@material-wc/core';

import navGroupStyles from './nav-group.css?inline';
import '@material-wc/core/icon';

/**
 * A single navigation item that can have children.
 */
export interface HierarchicalNavItem {
  /** Unique identifier */
  value: string;
  /** Display label */
  label: string;
  /** Material icon name */
  icon?: string;
  /** Optional badge text */
  badge?: string;
  /** Child navigation items (max 2 additional levels) */
  children?: HierarchicalNavItem[];
  /** If true, only show in drawer (not in bar/rail) */
  drawerOnly?: boolean;
}

/**
 * A section grouping multiple navigation items.
 */
export interface HierarchicalNavSection {
  /** Optional section label */
  label?: string;
  /** Navigation items in this section */
  items: HierarchicalNavItem[];
}

/**
 * Complete hierarchical navigation structure.
 */
export type HierarchicalNavigation = (HierarchicalNavItem | HierarchicalNavSection)[];

/**
 * Display mode for the navigation group.
 */
export type NavGroupMode = 'drawer' | 'rail-expanded';

/**
 * Navigation level state for drawer mode animations.
 */
interface NavigationLevel {
  items: HierarchicalNavItem[];
  label: string;
  parentValue: string;
}

/**
 * Material Design 3 Navigation Group
 *
 * Reusable component for hierarchical navigation. Supports up to 3 levels
 * with inline-replace pattern (drawer) or inline expansion (rail).
 *
 * @element md-nav-group
 *
 * @slot header - Content above navigation items
 * @slot footer - Content below navigation items
 *
 * @csspart container - Root container
 * @csspart back-header - Back navigation header
 * @csspart back-button - Back arrow button
 * @csspart back-label - Parent label text
 * @csspart items - Items container
 * @csspart item - Individual nav item
 * @csspart item-icon - Item icon area
 * @csspart item-label - Item label text
 * @csspart item-chevron - Chevron indicator for parents
 *
 * @fires nav-select - Item selected (leaf node), detail: { value: string, path: string[] }
 * @fires nav-drill - Drill into children, detail: { value: string, label: string, children: HierarchicalNavItem[] }
 * @fires nav-back - Navigate back one level, detail: { toPath: string[] }
 */
@customElement('md-nav-group')
export class MdNavGroup extends MdElement {
  static override styles = [adoptStyles(navGroupStyles)];

  /**
   * Navigation items to display.
   */
  @property({ type: Array, attribute: false })
  items: HierarchicalNavigation = [];

  /**
   * Currently selected item value.
   */
  @property({ type: String, attribute: 'selected-value' })
  selectedValue: string = '';

  /**
   * Display mode.
   */
  @property({ type: String, reflect: true })
  mode: NavGroupMode = 'drawer';

  /**
   * Current navigation path (parent values leading to current level).
   * Used to track location in hierarchy.
   */
  @state()
  private currentPath: string[] = [];

  /**
   * Current level items being displayed.
   */
  @state()
  private currentItems: HierarchicalNavItem[] = [];

  /**
   * Label of current parent (for back header).
   */
  @state()
  private currentLabel: string = '';

  /**
   * Previous level for exit animation.
   */
  @state()
  private previousLevel: NavigationLevel | null = null;

  /**
   * Animation direction.
   */
  @state()
  private animationDirection: 'forward' | 'backward' | null = null;

  /**
   * Expanded items in rail-expanded mode (by value).
   */
  @state()
  private expandedItems: Set<string> = new Set();

  override connectedCallback(): void {
    super.connectedCallback();
    this.updateCurrentLevel();
  }

  protected override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (changedProperties.has('items')) {
      this.updateCurrentLevel();
    }
  }

  /**
   * Check if an entry is a section.
   */
  private isSection(entry: HierarchicalNavItem | HierarchicalNavSection): entry is HierarchicalNavSection {
    return 'items' in entry && !('value' in entry);
  }

  /**
   * Get flat items from navigation structure.
   */
  private getFlatItems(navigation: HierarchicalNavigation): HierarchicalNavItem[] {
    const items: HierarchicalNavItem[] = [];
    for (const entry of navigation) {
      if (this.isSection(entry)) {
        items.push(...entry.items);
      } else {
        items.push(entry);
      }
    }
    return items;
  }

  /**
   * Update current level based on path.
   */
  private updateCurrentLevel(): void {
    let items = this.getFlatItems(this.items);
    let label = '';

    for (const value of this.currentPath) {
      const parent = items.find(item => item.value === value);
      if (parent?.children) {
        label = parent.label;
        items = parent.children;
      }
    }

    this.currentItems = items;
    this.currentLabel = label;
  }

  /**
   * Navigate into a parent item's children.
   */
  private drillInto(item: HierarchicalNavItem): void {
    if (!item.children?.length) return;

    if (this.mode === 'drawer') {
      // Store previous level for animation
      this.previousLevel = {
        items: this.currentItems,
        label: this.currentLabel,
        parentValue: this.currentPath[this.currentPath.length - 1] || '',
      };
      this.animationDirection = 'forward';

      // Update path and level
      this.currentPath = [...this.currentPath, item.value];
      this.updateCurrentLevel();

      // Clear animation after completion
      setTimeout(() => {
        this.previousLevel = null;
        this.animationDirection = null;
      }, 250);
    } else {
      // Rail-expanded mode: toggle inline expansion
      if (this.expandedItems.has(item.value)) {
        this.expandedItems.delete(item.value);
      } else {
        this.expandedItems.add(item.value);
      }
      this.expandedItems = new Set(this.expandedItems);
    }

    this.emit('nav-drill', {
      value: item.value,
      label: item.label,
      children: item.children,
    });
  }

  /**
   * Navigate back one level.
   */
  private goBack(): void {
    if (this.currentPath.length === 0) return;

    // Store current level for animation
    this.previousLevel = {
      items: this.currentItems,
      label: this.currentLabel,
      parentValue: this.currentPath[this.currentPath.length - 1],
    };
    this.animationDirection = 'backward';

    // Go back one level
    const newPath = this.currentPath.slice(0, -1);
    this.currentPath = newPath;
    this.updateCurrentLevel();

    // Clear animation after completion
    setTimeout(() => {
      this.previousLevel = null;
      this.animationDirection = null;
    }, 250);

    this.emit('nav-back', { toPath: newPath });
  }

  /**
   * Select a leaf item.
   */
  private selectItem(item: HierarchicalNavItem): void {
    if (item.children?.length) {
      this.drillInto(item);
      return;
    }

    this.selectedValue = item.value;
    this.emit('nav-select', {
      value: item.value,
      path: [...this.currentPath, item.value],
    });
  }

  /**
   * Handle keyboard navigation.
   */
  private handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape' || event.key === 'Backspace') {
      if (this.currentPath.length > 0 && this.mode === 'drawer') {
        event.preventDefault();
        this.goBack();
      }
    }
  }

  /**
   * Check if a value is in the current selection path.
   */
  private isInSelectionPath(value: string): boolean {
    // Find the item and check if selectedValue is in its subtree
    const findInSubtree = (items: HierarchicalNavItem[], target: string): boolean => {
      for (const item of items) {
        if (item.value === target) return true;
        if (item.children && findInSubtree(item.children, target)) return true;
      }
      return false;
    };

    const item = this.findItemByValue(this.getFlatItems(this.items), value);
    if (!item?.children) return false;
    return findInSubtree(item.children, this.selectedValue);
  }

  /**
   * Find an item by value recursively.
   */
  private findItemByValue(items: HierarchicalNavItem[], value: string): HierarchicalNavItem | undefined {
    for (const item of items) {
      if (item.value === value) return item;
      if (item.children) {
        const found = this.findItemByValue(item.children, value);
        if (found) return found;
      }
    }
    return undefined;
  }

  /**
   * Render a single navigation item.
   */
  private renderItem(item: HierarchicalNavItem, depth: number = 0): TemplateResult {
    const hasChildren = item.children && item.children.length > 0;
    const isSelected = item.value === this.selectedValue;
    const isExpanded = this.expandedItems.has(item.value);
    const isInPath = this.isInSelectionPath(item.value);

    const classes = {
      'nav-group__item': true,
      'nav-group__item--selected': isSelected,
      'nav-group__item--parent': !!hasChildren,
      'nav-group__item--expanded': isExpanded,
      'nav-group__item--in-path': isInPath,
    };

    return html`
      <button
        class=${classMap(classes)}
        part="item"
        @click=${() => this.selectItem(item)}
        aria-selected=${isSelected}
        aria-expanded=${hasChildren ? isExpanded : nothing}
        aria-haspopup=${hasChildren ? 'true' : nothing}
      >
        ${item.icon ? html`
          <span class="nav-group__item-icon" part="item-icon">
            <md-icon>${item.icon}</md-icon>
          </span>
        ` : nothing}
        <span class="nav-group__item-label" part="item-label">${item.label}</span>
        ${item.badge ? html`
          <span class="nav-group__item-badge">${item.badge}</span>
        ` : nothing}
        ${hasChildren ? html`
          <span class="nav-group__item-chevron" part="item-chevron" aria-hidden="true">
            <md-icon>chevron_right</md-icon>
          </span>
        ` : nothing}
      </button>
      ${this.mode === 'rail-expanded' && hasChildren ? this.renderChildren(item, depth) : nothing}
    `;
  }

  /**
   * Render children container for rail-expanded mode.
   */
  private renderChildren(item: HierarchicalNavItem, depth: number): TemplateResult {
    const isExpanded = this.expandedItems.has(item.value);
    const childrenClasses = {
      'nav-group__children': true,
      'nav-group__children--expanded': isExpanded,
    };

    return html`
      <div class=${classMap(childrenClasses)}>
        <div class="nav-group__children-inner">
          ${item.children?.map(child => this.renderItem(child, depth + 1))}
        </div>
      </div>
    `;
  }

  /**
   * Render items list.
   */
  private renderItems(items: HierarchicalNavItem[]): TemplateResult {
    return html`${items.map(item => this.renderItem(item))}`;
  }

  /**
   * Render navigation with sections.
   */
  private renderWithSections(): TemplateResult {
    const sections: TemplateResult[] = [];

    for (const entry of this.items) {
      if (this.isSection(entry)) {
        sections.push(html`
          <div class="nav-group__section">
            ${entry.label ? html`<div class="nav-group__section-label">${entry.label}</div>` : nothing}
            ${this.renderItems(entry.items)}
          </div>
        `);
      } else {
        sections.push(this.renderItem(entry));
      }
    }

    return html`${sections}`;
  }

  /**
   * Handle close button click (root level).
   */
  private handleClose(): void {
    this.emit('nav-close', {});
  }

  /**
   * Render the close header (root level).
   * Uses menu_open icon (burger) aligned to match the top-app-bar menu button.
   */
  private renderCloseHeader(): TemplateResult {
    return html`
      <div class="nav-group__close-header" part="close-header">
        <button
          class="nav-group__close-btn"
          part="close-button"
          @click=${this.handleClose}
          aria-label="Close navigation"
        >
          <md-icon>menu_open</md-icon>
        </button>
      </div>
    `;
  }

  /**
   * Render the back header (nested levels).
   */
  private renderBackHeader(): TemplateResult {
    return html`
      <div class="nav-group__back-header" part="back-header">
        <button
          class="nav-group__back-btn"
          part="back-button"
          @click=${this.goBack}
          aria-label="Back to ${this.currentLabel || 'previous level'}"
        >
          <md-icon>arrow_back</md-icon>
        </button>
        <span class="nav-group__back-label" part="back-label">${this.currentLabel}</span>
      </div>
    `;
  }

  /**
   * Render the appropriate header based on current level.
   */
  private renderHeader(isExiting: boolean, label: string): TemplateResult | typeof nothing {
    // Don't render header for exiting levels (handled separately for animation)
    if (isExiting) {
      // Show back header for exiting level during backward animation
      if (this.previousLevel && this.animationDirection === 'backward') {
        return html`
          <div class="nav-group__back-header" part="back-header">
            <button class="nav-group__back-btn" part="back-button" tabindex="-1">
              <md-icon>arrow_back</md-icon>
            </button>
            <span class="nav-group__back-label" part="back-label">${label}</span>
          </div>
        `;
      }
      return nothing;
    }

    // Root level: show close button
    if (this.currentPath.length === 0) {
      return this.renderCloseHeader();
    }

    // Nested levels: show back button with parent label
    return this.renderBackHeader();
  }

  /**
   * Render a navigation level (for animation).
   */
  private renderLevel(items: HierarchicalNavItem[], label: string, isExiting: boolean): TemplateResult {
    const levelClasses = {
      'nav-group__level': true,
      'nav-group__level--current': !isExiting,
      'nav-group__level--entering-from-right': !isExiting && this.animationDirection === 'forward',
      'nav-group__level--exiting-to-right': isExiting && this.animationDirection === 'backward',
      'nav-group__level--entering-from-left': !isExiting && this.animationDirection === 'backward',
      'nav-group__level--exiting-to-left': isExiting && this.animationDirection === 'forward',
    };

    return html`
      <div class=${classMap(levelClasses)}>
        ${this.renderHeader(isExiting, label)}
        <div class="nav-group__items" part="items">
          ${this.renderItems(items)}
        </div>
      </div>
    `;
  }

  protected override render(): TemplateResult {
    // Rail-expanded mode: render all items with inline expansion
    if (this.mode === 'rail-expanded') {
      return html`
        <div class="nav-group" part="container" @keydown=${this.handleKeyDown}>
          <div class="nav-group__header-slot">
            <slot name="header"></slot>
          </div>
          <div class="nav-group__items" part="items">
            ${this.renderWithSections()}
          </div>
          <div class="nav-group__footer-slot">
            <slot name="footer"></slot>
          </div>
        </div>
      `;
    }

    // Drawer mode: render with slide animations
    return html`
      <div class="nav-group" part="container" @keydown=${this.handleKeyDown}>
        <div class="nav-group__header-slot">
          <slot name="header"></slot>
        </div>
        ${this.previousLevel ? this.renderLevel(
          this.previousLevel.items,
          this.previousLevel.label,
          true
        ) : nothing}
        ${this.renderLevel(this.currentItems, this.currentLabel, false)}
        <div class="nav-group__footer-slot">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }

  /**
   * Reset navigation to root level.
   */
  public reset(): void {
    this.currentPath = [];
    this.expandedItems.clear();
    this.updateCurrentLevel();
  }

  /**
   * Navigate to a specific path.
   */
  public navigateTo(path: string[]): void {
    this.currentPath = [...path];
    this.updateCurrentLevel();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'md-nav-group': MdNavGroup;
  }
}
