import { html, nothing, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { MdElement, adoptStyles } from '@material-wc/core';
import '@material-wc/core/icon';

import navItemStyles from './nav-item.css?inline';
/**
 * Display mode for the navigation item.
 * - 'bar': Bottom navigation bar layout (icon above label, compact)
 * - 'bar-horizontal': Flexible navigation bar (icon beside label, medium+)
 * - 'rail': Collapsed rail layout (icon above label, 80px width)
 * - 'expanded': Expanded rail layout (icon beside label)
 */
export type NavItemMode = 'bar' | 'bar-horizontal' | 'rail' | 'expanded';

/**
 * Material Design 3 Navigation Item
 *
 * A navigation destination used within md-app-layout.
 * Adapts its appearance based on the navigation mode (bar, rail, expanded).
 *
 * @element md-nav-item
 *
 * @slot icon - Icon element (e.g., md-icon)
 * @slot selected-icon - Icon shown when selected (optional, falls back to icon slot)
 *
 * @csspart container - The item container
 * @csspart indicator - The active indicator pill
 * @csspart icon - The icon wrapper
 * @csspart label - The label text
 * @csspart badge - The badge element
 *
 * @fires nav-item-click - Fired when the item is clicked
 */
@customElement('md-nav-item')
export class MdNavItem extends MdElement {
  static override styles = [adoptStyles(navItemStyles)];

  /**
   * Unique identifier for this navigation item.
   */
  @property({ type: String, reflect: true })
  value: string = '';

  /**
   * Label text displayed below or beside the icon.
   */
  @property({ type: String })
  label: string = '';

  /**
   * Badge text or count. Empty string hides the badge.
   */
  @property({ type: String })
  badge: string = '';

  /**
   * Icon name (Material Icons). If provided, renders an md-icon automatically.
   * Alternatively, use the icon slot for custom icon elements.
   */
  @property({ type: String })
  icon: string = '';

  /**
   * URL to navigate to when clicked. If provided, renders an <a> tag instead of <button>.
   * Supports both relative paths (e.g., '/settings') and absolute URLs.
   */
  @property({ type: String })
  href: string = '';

  /**
   * Link target when href is provided. Common values: '_self', '_blank'.
   */
  @property({ type: String })
  target: string = '';

  /**
   * Whether this item is currently selected.
   */
  @property({ type: Boolean, reflect: true })
  selected: boolean = false;

  /**
   * Whether this item is disabled.
   */
  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  /**
   * Display mode, set by parent layout.
   */
  @property({ type: String, reflect: true })
  mode: NavItemMode = 'rail';

  private handleClick(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      return;
    }

    this.emit('nav-item-click', { value: this.value });
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if (this.disabled) return;

    if (event.key === 'Enter' || event.key === ' ') {
      // For links, Enter already navigates, Space does not by default
      if (!this.href || event.key === ' ') {
        event.preventDefault();
        this.handleClick(event);
      }
    }
  }

  private renderContent(): TemplateResult {
    return html`
      <div class="nav-item__indicator" part="indicator"></div>
      <div class="nav-item__icon" part="icon">
        ${this.selected
          ? html`<slot name="selected-icon"><slot name="icon">${this.icon ? html`<md-icon>${this.icon}</md-icon>` : nothing}</slot></slot>`
          : html`<slot name="icon">${this.icon ? html`<md-icon>${this.icon}</md-icon>` : nothing}</slot>`}
        ${this.badge ? html`<span class="nav-item__badge" part="badge">${this.badge}</span>` : nothing}
      </div>
      <span class="nav-item__label" part="label">${this.label}</span>
    `;
  }

  protected override render(): TemplateResult {
    const classes = {
      'nav-item': true,
      'nav-item--selected': this.selected,
      'nav-item--disabled': this.disabled,
      [`nav-item--${this.mode}`]: true,
    };

    // Render as <a> if href is provided, otherwise as <button>
    if (this.href) {
      return html`
        <a
          class=${classMap(classes)}
          part="container"
          href=${this.disabled ? nothing : this.href}
          target=${this.target || nothing}
          aria-current=${this.selected ? 'page' : nothing}
          aria-disabled=${this.disabled || nothing}
          role="tab"
          tabindex=${this.disabled ? -1 : 0}
          @click=${this.handleClick}
          @keydown=${this.handleKeyDown}
        >
          ${this.renderContent()}
        </a>
      `;
    }

    return html`
      <button
        class=${classMap(classes)}
        part="container"
        ?disabled=${this.disabled}
        aria-selected=${this.selected}
        role="tab"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        ${this.renderContent()}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'md-nav-item': MdNavItem;
  }
}
