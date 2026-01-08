import { html, type TemplateResult, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { MdElement, adoptStyles } from '@material-wc/core';

// This will be the generated CSS from button.src.css
import buttonStyles from './button.css?inline';

export type ButtonVariant = 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
export type ButtonSize = 'small' | 'medium' | 'large';
export type IconPosition = 'start' | 'end';

/**
 * Material Design 3 Button Component
 *
 * @element md-button
 *
 * @slot - Default slot for button text content
 * @slot icon - Slot for icon (position controlled by iconPosition property)
 *
 * @fires md-click - Fired when the button is clicked
 *
 * @csspart button - The native button element
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

  /** Whether the icon slot has content */
  private hasIcon = false;

  protected override render(): TemplateResult {
    const classes = {
      'md-button': true,
      [`md-button--${this.variant}`]: true,
      [`md-button--${this.size}`]: true,
      'md-button--full-width': this.fullWidth,
      'md-button--has-icon': this.hasIcon,
      'md-button--icon-end': this.hasIcon && this.iconPosition === 'end',
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
          ${this.renderContent()}
        </a>
      `;
    }

    return html`
      <button
        class=${classMap(classes)}
        type=${this.type}
        ?disabled=${this.disabled}
        aria-label=${this.ariaLabel || ''}
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

    this.emit('md-click', { originalEvent: event });
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
