import { html, type TemplateResult, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { MdElement, adoptStyles } from '@material-wc/core';

// This will be the generated CSS from button.src.css
import buttonStyles from './button.css?inline';

export type ButtonVariant = 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';

/**
 * Material Design 3 Button Component
 *
 * @element md-button
 *
 * @slot - Default slot for button text content
 * @slot icon - Slot for leading icon
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

  /** Whether the button is disabled */
  @property({ type: Boolean, reflect: true })
  disabled = false;

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
    return html`
      <span class="md-button__icon" ?hidden=${!this.hasIcon}>
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
      </span>
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
