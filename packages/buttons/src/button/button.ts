import { html, nothing, type TemplateResult, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { MdElement, adoptStyles } from '@material-wc/core';

// This will be the generated CSS from button.src.css
import buttonStyles from './button.css?inline';

export type ButtonVariant = 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonGroupSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
export type IconPosition = 'start' | 'end';
export type ButtonPosition = 'leading' | 'middle' | 'trailing' | 'standalone';

/**
 * Material Design 3 Button Component
 *
 * A versatile button component following Material Design 3 specifications.
 * Supports multiple variants, sizes, icons, and can function as a toggle button within groups.
 *
 * ## Variants
 * - **filled**: High emphasis, solid background (default)
 * - **outlined**: Medium emphasis, border only
 * - **text**: Low emphasis, text only
 * - **elevated**: Medium emphasis with shadow
 * - **tonal**: Medium emphasis with tonal color
 *
 * ## Sizes
 * - **small**: 32dp height
 * - **medium**: 40dp height (default)
 * - **large**: 48dp height
 *
 * @element md-button
 *
 * @slot - Default slot for button text content
 * @slot icon - Slot for icon (position controlled by iconPosition property)
 *
 * @fires click - Custom click event. Detail: `{ originalEvent: MouseEvent, value: string }`
 * @fires toggle - Fired when a toggle button changes state. Detail: `{ originalEvent: MouseEvent, value: string, selected: boolean }`
 *
 * @csspart button - The native button element
 *
 * @example
 * Basic button variants:
 * ```html
 * <md-button variant="filled">Filled</md-button>
 * <md-button variant="outlined">Outlined</md-button>
 * <md-button variant="text">Text</md-button>
 * <md-button variant="elevated">Elevated</md-button>
 * <md-button variant="tonal">Tonal</md-button>
 * ```
 *
 * @example
 * Button with icon:
 * ```html
 * <md-button variant="filled">
 *   <span slot="icon" class="material-symbols-outlined">add</span>
 *   Add Item
 * </md-button>
 *
 * <!-- Icon at end -->
 * <md-button variant="outlined" icon-position="end">
 *   Next
 *   <span slot="icon" class="material-symbols-outlined">arrow_forward</span>
 * </md-button>
 * ```
 *
 * @example
 * Different sizes:
 * ```html
 * <md-button size="small">Small</md-button>
 * <md-button size="medium">Medium</md-button>
 * <md-button size="large">Large</md-button>
 * ```
 *
 * @example
 * Button as link:
 * ```html
 * <md-button href="https://example.com" target="_blank">
 *   Visit Website
 * </md-button>
 * ```
 *
 * @example
 * Toggle button (for use in button groups):
 * ```html
 * <md-button toggle value="bold">
 *   <span slot="icon" class="material-symbols-outlined">format_bold</span>
 * </md-button>
 * ```
 *
 * @example
 * Event handling:
 * ```javascript
 * // Simple button - use native click
 * button.addEventListener('click', (e) => {
 *   console.log('Button clicked');
 * });
 *
 * // Toggle button
 * toggleButton.addEventListener('toggle', (e) => {
 *   console.log('Selected:', e.detail.selected);
 *   console.log('Value:', e.detail.value);
 * });
 * ```
 */
@customElement('md-button')
export class MdButton extends MdElement {
  static override styles = [adoptStyles(buttonStyles)];

  /** The visual variant of the button */
  @property({ type: String, reflect: true })
  variant: ButtonVariant = 'filled';

  /** The size of the button */
  @property({ type: String, reflect: true })
  size: ButtonSize = 'medium';

  /** Whether the button is disabled */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Whether the button should take the full width of its container */
  @property({ type: Boolean, reflect: true, attribute: 'full-width' })
  fullWidth = false;

  /** Position of the icon relative to the text */
  @property({ type: String, reflect: true, attribute: 'icon-position' })
  iconPosition: IconPosition = 'start';

  /** The type of the button (submit, reset, button) */
  @property({ type: String })
  type: 'submit' | 'reset' | 'button' = 'button';

  /** Optional href to make the button act as a link */
  @property({ type: String })
  href?: string;

  /** Target for the link when href is provided */
  @property({ type: String })
  target?: '_blank' | '_self' | '_parent' | '_top';

  /** Accessible label for the button */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  // ============================================
  // Toggle Button Properties (for use in groups)
  // ============================================

  /** Whether this button acts as a toggle button */
  @property({ type: Boolean, reflect: true })
  toggle = false;

  /** Whether the toggle button is selected */
  @property({ type: Boolean, reflect: true })
  selected = false;

  /** Value for toggle buttons (used in button groups) */
  @property({ type: String, reflect: true })
  value = '';

  /** Whether the icon slot has content */
  private hasIcon = false;

  /** Whether the default slot has content (for icon-only detection) */
  @state()
  private hasLabel = false;

  // ============================================
  // Group Context (managed by parent md-button-group)
  // ============================================

  /** Position within a group (managed by parent) */
  @state()
  private groupPosition: ButtonPosition = 'standalone';

  /** Whether this button is inside a group */
  @state()
  private isInsideGroup = false;

  /** Selection mode from parent group */
  @state()
  private groupSelectionMode: 'single' | 'multi' = 'single';

  /** Size override from parent group */
  @state()
  private groupSize: ButtonGroupSize | null = null;

  // ============================================
  // Group API (called by parent md-button-group)
  // ============================================

  /** Set position within group (called by parent) */
  setGroupPosition(position: ButtonPosition): void {
    this.groupPosition = position;
  }

  /** Set whether inside a group (called by parent) */
  setInsideGroup(isInside: boolean): void {
    this.isInsideGroup = isInside;
  }

  /** Set selection mode (called by parent) */
  setGroupSelectionMode(mode: 'single' | 'multi'): void {
    this.groupSelectionMode = mode;
  }

  /** Set size from group (called by parent) */
  setGroupSize(size: ButtonGroupSize): void {
    this.groupSize = size;
  }

  protected override render(): TemplateResult {
    // Determine effective size (group size overrides local size for grouped buttons)
    const effectiveSize = this.isInsideGroup && this.groupSize ? this.groupSize : this.size;

    const classes = {
      'md-button': true,
      [`md-button--${this.variant}`]: !this.isInsideGroup,
      [`md-button--${effectiveSize}`]: true,
      'md-button--full-width': this.fullWidth,
      'md-button--has-icon': this.hasIcon,
      'md-button--icon-end': this.hasIcon && this.iconPosition === 'end',
      // Group-specific classes
      'md-button--in-group': this.isInsideGroup,
      [`md-button--${this.groupPosition}`]: this.isInsideGroup,
      'md-button--selected': this.isInsideGroup && this.selected,
      'md-button--icon-only': this.hasIcon && !this.hasLabel,
    };

    // Determine ARIA attributes for grouped buttons
    const role = this.isInsideGroup
      ? this.groupSelectionMode === 'single'
        ? 'radio'
        : 'checkbox'
      : this.toggle
        ? 'button'
        : undefined;

    const ariaChecked: 'true' | 'false' | undefined = this.isInsideGroup ? (this.selected ? 'true' : 'false') : undefined;
    const ariaPressed: 'true' | 'false' | undefined = this.toggle && !this.isInsideGroup ? (this.selected ? 'true' : 'false') : undefined;

    if (this.href && !this.disabled) {
      return html`
        <a
          class=${classMap(classes)}
          href=${this.href}
          target=${this.target ?? '_self'}
          rel=${this.target === '_blank' ? 'noopener noreferrer' : ''}
          aria-label=${this.ariaLabel || nothing}
          part="button"
        >
          ${this.renderContent()}
        </a>
      `;
    }

    return html`
      <button
        class=${classMap(classes)}
        type=${this.type}
        ?disabled=${this.disabled}
        role=${ifDefined(role)}
        aria-label=${this.ariaLabel || nothing}
        aria-checked=${ifDefined(ariaChecked)}
        aria-pressed=${ifDefined(ariaPressed)}
        @click=${this.handleClick}
        part="button"
      >
        ${this.renderContent()}
      </button>
    `;
  }

  private renderContent(): TemplateResult {
    const iconSlot = html`
      <span class="md-button__icon" ?hidden=${!this.hasIcon}>
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
      </span>
    `;

    if (this.iconPosition === 'end') {
      return html`
        <slot></slot>
        ${iconSlot}
      `;
    }

    return html`
      ${iconSlot}
      <slot></slot>
    `;
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

    // For toggle buttons, also emit the toggle event
    if (this.isInsideGroup || this.toggle) {
      this.emit('toggle', {
        originalEvent: event,
        value: this.value,
        selected: this.selected,
      });
    }
  }

  private handleIconSlotChange(event: Event): void {
    const slot = event.target as HTMLSlotElement;
    this.hasIcon = slot.assignedNodes().length > 0;
    this.requestUpdate();
  }

  protected override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    // Handle form association for submit buttons
    if (changedProperties.has('type') && this.type === 'submit') {
      const form = this.closest('form');
      if (form) {
        this.addEventListener('click', () => {
          if (!this.disabled) {
            form.requestSubmit();
          }
        });
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'md-button': MdButton;
  }
}
