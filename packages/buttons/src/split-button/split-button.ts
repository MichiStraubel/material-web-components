import { html, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { MdElement, adoptStyles } from '@material-wc/core';

import splitButtonStyles from './split-button.css?inline';

export type SplitButtonVariant = 'filled' | 'tonal' | 'outlined' | 'elevated';
export type SplitButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

/**
 * Material Design 3 Split Button Component
 *
 * A split button combines a primary action button with a secondary action button.
 * The leading button performs the primary action, while the trailing button
 * opens a dropdown menu with additional options.
 *
 * ## MD3 Split Button Layout (Material 3 Expressive)
 * - **Leading Button**: Executes the primary action
 * - **Trailing Button**: Opens a dropdown menu with additional options
 * - When expanded, the trailing button becomes circular
 *
 * ## MD3 Menu Specifications (m3.material.io/components/menus/specs)
 * The dropdown menu follows MD3 menu guidelines:
 *
 * ### Container
 * - Background: `surface-container` token
 * - Border-radius: 4dp (`--radius-sm`)
 * - Elevation: Level 2 shadow
 * - Min-width: 112dp
 * - Max-width: 280dp
 * - Padding: 8dp vertical
 *
 * ### Menu Items
 * - Height: 48dp (standard)
 * - Padding: 12dp vertical, 16dp horizontal
 * - Typography: 14px (`body-large`)
 * - Text color: `on-surface`
 * - Hover state: 8% `on-surface` overlay
 * - Focus state: 12% `on-surface` overlay
 *
 * ### Animation
 * - Open: Scale from 0.8 to 1.0 with `standard` easing
 * - Duration: `short-2` (~100ms)
 * - Transform-origin: top right
 *
 * @element md-split-button
 *
 * @slot - Default slot for leading button label text
 * @slot leading-icon - Icon for the leading button
 * @slot trailing-icon - Icon for the trailing button (defaults to arrow_drop_down)
 * @slot menu - Slot for menu items (displayed in dropdown)
 *
 * @fires md-leading-click - Fired when the leading button is clicked
 * @fires md-trailing-click - Fired when the trailing button is clicked
 * @fires md-menu-item-click - Fired when a menu item is clicked
 *
 * @csspart leading - The leading button element
 * @csspart trailing - The trailing button element
 * @csspart menu - The dropdown menu container
 *
 * @dependency Material Symbols Outlined font - The default trailing icon (arrow_drop_down)
 * requires the Material Symbols Outlined font to be loaded by the consumer:
 * ```html
 * <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
 * ```
 */
@customElement('md-split-button')
export class MdSplitButton extends MdElement {
  static override styles = [adoptStyles(splitButtonStyles)];

  /** The visual variant of the split button */
  @property({ type: String, reflect: true })
  variant: SplitButtonVariant = 'filled';

  /** The size of the split button */
  @property({ type: String, reflect: true })
  size: SplitButtonSize = 'medium';

  /** Whether the split button is disabled */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Accessible label for the leading button */
  @property({ type: String, attribute: 'leading-aria-label' })
  leadingAriaLabel: string | null = null;

  /** Accessible label for the trailing button */
  @property({ type: String, attribute: 'trailing-aria-label' })
  trailingAriaLabel: string | null = null;

  /** Whether the leading icon slot has content */
  @state()
  private hasLeadingIcon = false;

  /** Whether the trailing icon slot has content */
  @state()
  private hasTrailingIcon = false;

  /** Whether the menu is open (internal state) */
  @state()
  private expanded = false;

  override connectedCallback(): void {
    super.connectedCallback();
    // Close menu when clicking outside
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    document.addEventListener('click', this.handleOutsideClick);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('click', this.handleOutsideClick);
  }

  private handleOutsideClick(event: MouseEvent): void {
    if (this.expanded && !this.contains(event.target as Node)) {
      this.expanded = false;
    }
  }

  protected override render(): TemplateResult {
    const leadingClasses = {
      'md-split-button__leading': true,
      [`md-split-button--${this.variant}`]: true,
      [`md-split-button--${this.size}`]: true,
      'md-split-button__leading--has-icon': this.hasLeadingIcon,
    };

    const trailingClasses = {
      'md-split-button__trailing': true,
      [`md-split-button--${this.variant}`]: true,
      [`md-split-button--${this.size}`]: true,
      'md-split-button__trailing--expanded': this.expanded,
    };

    const menuClasses = {
      'md-split-button__menu': true,
      'md-split-button__menu--open': this.expanded,
    };

    return html`
      <div class="md-split-button-container">
        <div class="md-split-button md-split-button--${this.size}">
          <button
            class=${classMap(leadingClasses)}
            ?disabled=${this.disabled}
            aria-label=${this.leadingAriaLabel || ''}
            @click=${this.handleLeadingClick}
            part="leading"
          >
            <span class="md-split-button__leading-icon" ?hidden=${!this.hasLeadingIcon}>
              <slot name="leading-icon" @slotchange=${this.handleLeadingIconSlotChange}></slot>
            </span>
            <span class="md-split-button__label">
              <slot></slot>
            </span>
          </button>
          <button
            class=${classMap(trailingClasses)}
            ?disabled=${this.disabled}
            aria-label=${this.trailingAriaLabel || 'More options'}
            aria-expanded=${this.expanded ? 'true' : 'false'}
            aria-haspopup="menu"
            @click=${this.handleTrailingClick}
            part="trailing"
          >
            <span class="md-split-button__trailing-icon">
              ${this.hasTrailingIcon
                ? html`<slot name="trailing-icon" @slotchange=${this.handleTrailingIconSlotChange}></slot>`
                : html`<span class="md-split-button__default-icon">arrow_drop_down</span>`}
            </span>
          </button>
        </div>
        <div
          class=${classMap(menuClasses)}
          role="menu"
          part="menu"
          @click=${this.handleMenuClick}
        >
          <slot name="menu"></slot>
        </div>
      </div>
    `;
  }

  private handleLeadingClick(event: MouseEvent): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.emit('md-leading-click', { originalEvent: event });
  }

  private handleTrailingClick(event: MouseEvent): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.expanded = !this.expanded;
    this.emit('md-trailing-click', {
      expanded: this.expanded,
      originalEvent: event,
    });
  }

  private handleLeadingIconSlotChange(event: Event): void {
    const slot = event.target as HTMLSlotElement;
    this.hasLeadingIcon = slot.assignedNodes().length > 0;
    this.requestUpdate();
  }

  private handleTrailingIconSlotChange(event: Event): void {
    const slot = event.target as HTMLSlotElement;
    this.hasTrailingIcon = slot.assignedNodes().length > 0;
    this.requestUpdate();
  }

  private handleMenuClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const menuItem = target.closest('[role="menuitem"], [data-value]') as HTMLElement | null;

    if (menuItem) {
      const value = menuItem.getAttribute('data-value') || menuItem.textContent?.trim() || '';

      this.emit('md-menu-item-click', {
        value,
        element: menuItem,
        originalEvent: event,
      });

      this.expanded = false;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'md-split-button': MdSplitButton;
  }
}
