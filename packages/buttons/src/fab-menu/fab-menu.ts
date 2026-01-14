import { html, type TemplateResult, type PropertyValues } from 'lit';
import { customElement, property, state, queryAssignedElements } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { MdElement, adoptStyles } from '@material-wc/core';

import fabMenuStyles from './fab-menu.css?inline';

export type FabMenuVariant = 'surface' | 'primary' | 'secondary' | 'tertiary';
export type FabMenuSize = 'small' | 'medium' | 'large';
export type FabMenuAlignment = 'start' | 'center' | 'end';

/**
 * Material Design 3 Expressive FAB Menu Component
 *
 * The FAB Menu displays 2-6 related actions in a floating menu that opens from a FAB.
 * It replaces the speed dial pattern and stacked small FABs with a unified, expressive component.
 *
 * ## MD3 Expressive Specifications
 * - **Menu Items**: Support 2-6 items maximum
 * - **Size**: Compatible with Small (40dp), Medium (56dp), and Large (96dp) FABs
 * - **Icon Morphing**: FAB icon transforms from + to × when expanded
 * - **Colors**: Uses contrasting colors for visual prominence
 * - **Alignment**: Menu can align to start, center, or end
 *
 * ## Behavior
 * - Tap FAB to expand/collapse menu
 * - Menu items appear with staggered animation
 * - Clicking outside closes the menu
 * - ESC key closes the menu
 * - Menu closes automatically after item click (MD3 spec)
 *
 * @element md-fab-menu
 *
 * @slot - Default slot for md-fab-menu-item elements (2-6 items)
 * @slot icon - Custom icon for the FAB (defaults to 'add')
 *
 * @fires open - Fired when the menu opens. Detail: `{ originalEvent: MouseEvent }`
 * @fires close - Fired when the menu closes. Detail: `{ originalEvent: MouseEvent }`
 * @fires select - Fired when a menu item is clicked. Detail: `{ originalEvent: MouseEvent, value: string, label: string }`
 *
 * @csspart fab - The toggle FAB button
 * @csspart menu - The menu container
 *
 * @cssprop [--md-fab-menu-gap=12px] - Gap between FAB and menu items
 *
 * @example
 * Basic usage with labeled items:
 * ```html
 * <md-fab-menu aria-label="Create content">
 *   <md-fab-menu-item value="photo" label="Take Photo">
 *     <span class="material-symbols-outlined">photo_camera</span>
 *   </md-fab-menu-item>
 *   <md-fab-menu-item value="video" label="Record Video">
 *     <span class="material-symbols-outlined">videocam</span>
 *   </md-fab-menu-item>
 *   <md-fab-menu-item value="note" label="Add Note">
 *     <span class="material-symbols-outlined">note_add</span>
 *   </md-fab-menu-item>
 * </md-fab-menu>
 * ```
 *
 * @example
 * Different variants and sizes:
 * ```html
 * <md-fab-menu variant="secondary" size="large">
 *   <md-fab-menu-item value="a" label="Option A">icon</md-fab-menu-item>
 *   <md-fab-menu-item value="b" label="Option B">icon</md-fab-menu-item>
 * </md-fab-menu>
 * ```
 *
 * @example
 * Event handling:
 * ```javascript
 * const menu = document.querySelector('md-fab-menu');
 *
 * menu.addEventListener('select', (e) => {
 *   console.log('Value:', e.detail.value);
 *   console.log('Label:', e.detail.label);
 * });
 *
 * menu.addEventListener('open', () => console.log('Menu opened'));
 * menu.addEventListener('close', () => console.log('Menu closed'));
 * ```
 *
 * @example
 * Programmatic control:
 * ```javascript
 * const menu = document.querySelector('md-fab-menu');
 * menu.open();   // Open the menu
 * menu.close();  // Close the menu
 * menu.toggle(); // Toggle open/close
 * ```
 */
@customElement('md-fab-menu')
export class MdFabMenu extends MdElement {
  static override styles = [adoptStyles(fabMenuStyles)];

  /** The color variant of the FAB */
  @property({ type: String, reflect: true })
  variant: FabMenuVariant = 'primary';

  /** The size of the FAB */
  @property({ type: String, reflect: true })
  size: FabMenuSize = 'medium';

  /** Whether the FAB menu is disabled */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Whether to use lowered elevation */
  @property({ type: Boolean, reflect: true })
  lowered = false;

  /** Menu alignment relative to the FAB */
  @property({ type: String, reflect: true })
  alignment: FabMenuAlignment = 'end';

  /** Accessible label for the FAB */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /** Label shown when menu is closed */
  @property({ type: String, attribute: 'open-label' })
  openLabel = 'Open menu';

  /** Label shown when menu is open */
  @property({ type: String, attribute: 'close-label' })
  closeLabel = 'Close menu';

  /** Whether the menu is currently open */
  @state()
  private expanded = false;

  /** Whether a custom icon is provided */
  @state()
  private hasCustomIcon = false;

  /** Query assigned menu items */
  @queryAssignedElements({ flatten: true })
  private menuItems!: HTMLElement[];

  override connectedCallback(): void {
    super.connectedCallback();
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    document.addEventListener('click', this.handleOutsideClick);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('click', this.handleOutsideClick);
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  protected override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    // Update menu items with stagger delay for animation
    if (this.menuItems) {
      this.menuItems.forEach((item, index) => {
        if (item.tagName.toLowerCase() === 'md-fab-menu-item') {
          (item as HTMLElement).style.setProperty('--item-index', String(index));
          item.setAttribute('data-expanded', String(this.expanded));
        }
      });
    }
  }

  private handleOutsideClick(event: MouseEvent): void {
    if (this.expanded && !this.contains(event.target as Node)) {
      this.close(event);
    }
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if (this.expanded && event.key === 'Escape') {
      this.close(event);
      // Return focus to the FAB
      const fab = this.shadowRoot?.querySelector('button');
      fab?.focus();
    }
  }

  /** Open the menu */
  public open(originalEvent?: Event): void {
    if (this.disabled || this.expanded) return;
    this.expanded = true;
    this.emit('open', { originalEvent });
  }

  /** Close the menu */
  public close(originalEvent?: Event): void {
    if (!this.expanded) return;
    this.expanded = false;
    this.emit('close', { originalEvent });
  }

  /** Toggle the menu open/closed state */
  public toggle(originalEvent?: Event): void {
    if (this.expanded) {
      this.close(originalEvent);
    } else {
      this.open(originalEvent);
    }
  }

  protected override render(): TemplateResult {
    const fabClasses = {
      'md-fab-menu__fab': true,
      [`md-fab-menu__fab--${this.variant}`]: true,
      [`md-fab-menu__fab--${this.size}`]: true,
      'md-fab-menu__fab--lowered': this.lowered,
      'md-fab-menu__fab--expanded': this.expanded,
    };

    const menuClasses = {
      'md-fab-menu__menu': true,
      'md-fab-menu__menu--open': this.expanded,
      [`md-fab-menu__menu--${this.alignment}`]: true,
    };

    const currentLabel = this.ariaLabel || (this.expanded ? this.closeLabel : this.openLabel);

    return html`
      <div class="md-fab-menu">
        <div
          class=${classMap(menuClasses)}
          role="menu"
          aria-hidden=${!this.expanded}
          part="menu"
          @click=${this.handleMenuClick}
        >
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
        <button
          class=${classMap(fabClasses)}
          ?disabled=${this.disabled}
          aria-label=${currentLabel}
          aria-expanded=${this.expanded}
          aria-haspopup="menu"
          @click=${this.handleFabClick}
          part="fab"
        >
          <span class="md-fab-menu__icon" ?hidden=${this.hasCustomIcon}>
            <span class="md-fab-menu__icon-default">
              <span class="md-fab-menu__icon-add">add</span>
              <span class="md-fab-menu__icon-close">close</span>
            </span>
          </span>
          <span class="md-fab-menu__icon md-fab-menu__icon--custom" ?hidden=${!this.hasCustomIcon}>
            <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
          </span>
        </button>
      </div>
    `;
  }

  private handleFabClick(event: MouseEvent): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.toggle(event);
  }

  private handleIconSlotChange(event: Event): void {
    const slot = event.target as HTMLSlotElement;
    this.hasCustomIcon = slot.assignedNodes().length > 0;
    this.requestUpdate();
  }

  private handleSlotChange(): void {
    // Validate 2-6 items
    const items = this.menuItems?.filter(
      item => item.tagName.toLowerCase() === 'md-fab-menu-item'
    ) || [];

    if (items.length < 2 || items.length > 6) {
      console.warn(`md-fab-menu: Expected 2-6 menu items, got ${items.length}. MD3 spec recommends 2-6 items.`);
    }

    this.requestUpdate();
  }

  private handleMenuClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const menuItem = target.closest('md-fab-menu-item') as HTMLElement | null;

    if (menuItem && !menuItem.hasAttribute('disabled')) {
      const value = menuItem.getAttribute('value') || '';
      const label = menuItem.getAttribute('label') || menuItem.textContent?.trim() || '';

      this.emit('select', {
        originalEvent: event,
        value,
        label,
      });

      // MD3 spec: Menu closes after action is tapped
      this.close(event);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'md-fab-menu': MdFabMenu;
  }
}
