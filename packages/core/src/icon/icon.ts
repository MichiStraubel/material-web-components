import { html, type TemplateResult, LitElement, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import iconStyles from './icon.css?inline';

export type IconSize = 'small' | 'medium' | 'large';

/**
 * Material Design 3 Icon Component
 *
 * Uses Material Symbols font for displaying icons.
 * See https://fonts.google.com/icons for available icons.
 *
 * @element md-icon
 *
 * @example
 * ```html
 * <md-icon>add</md-icon>
 * <md-icon name="home"></md-icon>
 * <md-icon filled>favorite</md-icon>
 * <md-icon size="large">settings</md-icon>
 * ```
 *
 * @csspart icon - The icon span element
 *
 * @cssprop --md-icon-fill - Fill amount (0 or 1)
 * @cssprop --md-icon-weight - Font weight (100-700)
 * @cssprop --md-icon-grade - Grade (-50 to 200)
 * @cssprop --md-icon-optical-size - Optical size (20-48)
 */
@customElement('md-icon')
export class MdIcon extends LitElement {
  static override styles = css`${unsafeCSS(iconStyles)}`;

  /** The icon name (alternative to using slot content) */
  @property({ type: String })
  name?: string;

  /** The size of the icon */
  @property({ type: String, reflect: true })
  size: IconSize = 'medium';

  /** Whether to use the filled variant */
  @property({ type: Boolean, reflect: true })
  filled = false;

  /** Accessible label for the icon */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  protected override render(): TemplateResult {
    const classes = {
      'md-icon': true,
      [`md-icon--${this.size}`]: true,
      'md-icon--filled': this.filled,
    };

    return html`
      <span
        class=${classMap(classes)}
        part="icon"
        role=${this.ariaLabel ? 'img' : 'presentation'}
        aria-label=${this.ariaLabel || ''}
        aria-hidden=${!this.ariaLabel}
      >${this.name ?? ''}<slot></slot></span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'md-icon': MdIcon;
  }
}
