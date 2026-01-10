import { html, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { MdElement, adoptStyles } from '@material-wc/core';

import fabMenuItemStyles from './fab-menu-item.css?inline';

/**
 * Material Design 3 Expressive FAB Menu Item Component
 *
 * A menu item for use within md-fab-menu. Each item displays an icon with an optional label.
 * Must be used as a child of `<md-fab-menu>`.
 *
 * ## MD3 Expressive Specifications
 * - **Touch Target**: 48dp minimum for accessibility
 * - **Icon Size**: 24dp
 * - **Label**: Optional, displayed next to the icon
 * - **Contrast**: Uses contrasting colors from parent FAB menu
 *
 * @element md-fab-menu-item
 *
 * @slot - Default slot for icon content (typically a Material Symbol or SVG)
 * @slot label - Optional slot for label text (alternative to label property)
 *
 * @fires click - Native click event (handled by parent md-fab-menu)
 *
 * @csspart button - The button element
 * @csspart icon - The icon container
 * @csspart label - The label container
 *
 * @example
 * Icon-only item:
 * ```html
 * <md-fab-menu-item value="photo">
 *   <span class="material-symbols-outlined">photo_camera</span>
 * </md-fab-menu-item>
 * ```
 *
 * @example
 * Item with label:
 * ```html
 * <md-fab-menu-item value="photo" label="Take Photo">
 *   <span class="material-symbols-outlined">photo_camera</span>
 * </md-fab-menu-item>
 * ```
 *
 * @example
 * Disabled item:
 * ```html
 * <md-fab-menu-item value="upload" label="Upload" disabled>
 *   <span class="material-symbols-outlined">cloud_upload</span>
 * </md-fab-menu-item>
 * ```
 *
 * @example
 * Using label slot instead of property:
 * ```html
 * <md-fab-menu-item value="share">
 *   <span class="material-symbols-outlined">share</span>
 *   <span slot="label">Share with friends</span>
 * </md-fab-menu-item>
 * ```
 */
@customElement('md-fab-menu-item')
export class MdFabMenuItem extends MdElement {
  static override styles = [adoptStyles(fabMenuItemStyles)];

  /** The value associated with this menu item */
  @property({ type: String, reflect: true })
  value = '';

  /** The label text to display */
  @property({ type: String, reflect: true })
  label = '';

  /** Whether this item is disabled */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Whether the label slot has content */
  @state()
  private hasLabelSlot = false;

  protected override render(): TemplateResult {
    const showLabel = this.label || this.hasLabelSlot;

    const classes = {
      'md-fab-menu-item': true,
      'md-fab-menu-item--with-label': showLabel,
      'md-fab-menu-item--disabled': this.disabled,
    };

    return html`
      <button
        class=${classMap(classes)}
        ?disabled=${this.disabled}
        role="menuitem"
        aria-label=${this.label || ''}
        part="button"
      >
        <span class="md-fab-menu-item__icon" part="icon">
          <slot @slotchange=${this.handleIconSlotChange}></slot>
        </span>
        ${showLabel
          ? html`
              <span class="md-fab-menu-item__label" part="label">
                ${this.label || html`<slot name="label" @slotchange=${this.handleLabelSlotChange}></slot>`}
              </span>
            `
          : ''}
      </button>
    `;
  }

  private handleIconSlotChange(_event: Event): void {
    // Icon slot change - currently just triggers a re-render
    this.requestUpdate();
  }

  private handleLabelSlotChange(event: Event): void {
    const slot = event.target as HTMLSlotElement;
    this.hasLabelSlot = slot.assignedNodes().length > 0;
    this.requestUpdate();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'md-fab-menu-item': MdFabMenuItem;
  }
}
