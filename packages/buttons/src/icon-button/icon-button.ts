import { html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { MdElement, adoptStyles } from '@material-wc/core';

import iconButtonStyles from './icon-button.css?inline';

export type IconButtonVariant = 'standard' | 'filled' | 'tonal' | 'outlined';
export type IconButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
export type IconButtonShape = 'round' | 'square';
export type IconButtonWidth = 'narrow' | 'default' | 'wide';

/**
 * Material Design 3 Icon Button Component
 *
 * Icon buttons are commonly used in app bars and toolbars for actions
 * like navigation, sharing, favoriting, etc.
 *
 * ## Variants
 * - **standard**: No container, icon only (default)
 * - **filled**: Solid background container
 * - **tonal**: Tonal color container
 * - **outlined**: Border container
 *
 * ## Sizes (MD3 Expressive)
 * - **xsmall**: 32dp
 * - **small**: 40dp (default)
 * - **medium**: 48dp
 * - **large**: 56dp
 * - **xlarge**: 64dp
 *
 * @element md-icon-button
 *
 * @slot - Default slot for icon content (shown when not selected)
 * @slot selected - Slot for icon when button is in selected state (toggle buttons)
 *
 * @fires click - Custom click event. Detail: `{ originalEvent: MouseEvent, value: string }`
 * @fires toggle - Fired when a toggle button changes state. Detail: `{ originalEvent: MouseEvent, value: string, selected: boolean }`
 *
 * @csspart button - The native button element
 *
 * @example
 * Basic icon button:
 * ```html
 * <md-icon-button aria-label="Settings">
 *   <span class="material-symbols-outlined">settings</span>
 * </md-icon-button>
 * ```
 *
 * @example
 * Different variants:
 * ```html
 * <md-icon-button variant="standard" aria-label="Settings">
 *   <span class="material-symbols-outlined">settings</span>
 * </md-icon-button>
 *
 * <md-icon-button variant="filled" aria-label="Add">
 *   <span class="material-symbols-outlined">add</span>
 * </md-icon-button>
 *
 * <md-icon-button variant="tonal" aria-label="Edit">
 *   <span class="material-symbols-outlined">edit</span>
 * </md-icon-button>
 *
 * <md-icon-button variant="outlined" aria-label="Delete">
 *   <span class="material-symbols-outlined">delete</span>
 * </md-icon-button>
 * ```
 *
 * @example
 * Different sizes:
 * ```html
 * <md-icon-button size="xsmall" aria-label="Close">
 *   <span class="material-symbols-outlined">close</span>
 * </md-icon-button>
 *
 * <md-icon-button size="medium" aria-label="Close">
 *   <span class="material-symbols-outlined">close</span>
 * </md-icon-button>
 *
 * <md-icon-button size="xlarge" aria-label="Close">
 *   <span class="material-symbols-outlined">close</span>
 * </md-icon-button>
 * ```
 *
 * @example
 * Toggle button with selected state:
 * ```html
 * <md-icon-button toggle aria-label="Favorite">
 *   <span class="material-symbols-outlined">favorite_border</span>
 *   <span slot="selected" class="material-symbols-outlined">favorite</span>
 * </md-icon-button>
 * ```
 *
 * @example
 * Square shape:
 * ```html
 * <md-icon-button shape="square" variant="filled" aria-label="Menu">
 *   <span class="material-symbols-outlined">menu</span>
 * </md-icon-button>
 * ```
 *
 * @example
 * As a link:
 * ```html
 * <md-icon-button href="https://example.com" target="_blank" aria-label="Open link">
 *   <span class="material-symbols-outlined">open_in_new</span>
 * </md-icon-button>
 * ```
 *
 * @example
 * Event handling:
 * ```javascript
 * // Simple icon button - use native click
 * iconButton.addEventListener('click', (e) => {
 *   console.log('Button clicked');
 * });
 *
 * // Toggle button
 * toggleButton.addEventListener('toggle', (e) => {
 *   console.log('Selected:', e.detail.selected);
 * });
 * ```
 */
@customElement('md-icon-button')
export class MdIconButton extends MdElement {
  static override styles = [adoptStyles(iconButtonStyles)];

  /** The visual variant of the icon button */
  @property({ type: String, reflect: true })
  variant: IconButtonVariant = 'standard';

  /** The size of the icon button (MD3 Expressive: xsmall, small, medium, large, xlarge) */
  @property({ type: String, reflect: true })
  size: IconButtonSize = 'small';

  /** The shape of the icon button (round or square) */
  @property({ type: String, reflect: true })
  shape: IconButtonShape = 'round';

  /** The width of the icon button (narrow, default, wide) */
  @property({ type: String, reflect: true })
  width: IconButtonWidth = 'default';

  /** Whether the button is disabled */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Whether the button is in a selected/toggled state */
  @property({ type: Boolean, reflect: true })
  selected = false;

  /** Whether the button acts as a toggle button */
  @property({ type: Boolean, reflect: true })
  toggle = false;

  /** Optional href to make the button act as a link */
  @property({ type: String })
  href?: string;

  /** Target for the link when href is provided */
  @property({ type: String })
  target?: '_blank' | '_self' | '_parent' | '_top';

  /** Accessible label for the button (required for accessibility) */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /** Value identifier for the button */
  @property({ type: String, reflect: true })
  value = '';

  /** Whether a selected icon slot has content */
  private hasSelectedIcon = false;

  protected override render(): TemplateResult {
    const classes = {
      'md-icon-button': true,
      [`md-icon-button--${this.variant}`]: true,
      [`md-icon-button--${this.size}`]: true,
      [`md-icon-button--${this.shape}`]: true,
      [`md-icon-button--width-${this.width}`]: this.width !== 'default',
      'md-icon-button--selected': this.selected,
    };

    if (this.href && !this.disabled) {
      return html`
        <a
          class=${classMap(classes)}
          href=${this.href}
          target=${this.target ?? '_self'}
          rel=${this.target === '_blank' ? 'noopener noreferrer' : ''}
          aria-label=${this.ariaLabel || ''}
          part="button"
        >
          ${this.renderIcons()}
        </a>
      `;
    }

    return html`
      <button
        class=${classMap(classes)}
        ?disabled=${this.disabled}
        aria-label=${this.ariaLabel || ''}
        aria-pressed=${this.toggle ? String(this.selected) : 'undefined'}
        @click=${this.handleClick}
        part="button"
      >
        ${this.renderIcons()}
      </button>
    `;
  }

  private renderIcons(): TemplateResult {
    // Show selected icon when selected and hasSelectedIcon, otherwise show default
    const showSelectedIcon = this.selected && this.hasSelectedIcon;

    return html`
      <span class="md-icon-button__icon" ?hidden=${showSelectedIcon}>
        <slot></slot>
      </span>
      <span class="md-icon-button__icon" ?hidden=${!showSelectedIcon}>
        <slot name="selected" @slotchange=${this.handleSelectedSlotChange}></slot>
      </span>
    `;
  }

  private handleSelectedSlotChange(event: Event): void {
    const slot = event.target as HTMLSlotElement;
    this.hasSelectedIcon = slot.assignedNodes().length > 0;
    this.requestUpdate();
  }

  private handleClick(event: MouseEvent): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // Always emit click event with value
    this.emit('click', {
      originalEvent: event,
      value: this.value,
    });

    if (this.toggle) {
      this.selected = !this.selected;
      this.emit('toggle', { originalEvent: event, value: this.value, selected: this.selected });
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'md-icon-button': MdIconButton;
  }
}
