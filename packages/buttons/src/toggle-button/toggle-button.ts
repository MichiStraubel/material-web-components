import { html, nothing, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { MdElement, adoptStyles } from '@material-wc/core';

import toggleButtonStyles from './toggle-button.css?inline';

export type ToggleButtonPosition = 'leading' | 'middle' | 'trailing' | 'standalone';
export type ToggleButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

/**
 * Material Design 3 Expressive Toggle Button Component
 *
 * Used within md-button-group for connected button groups.
 * Replaces the deprecated md-segmented-button.
 *
 * @element md-toggle-button
 *
 * @slot - Default slot for label text
 * @slot icon - Slot for icon (positioned before label)
 *
 * @fires toggle - Fired when the button is clicked. Detail: `{ originalEvent: MouseEvent, value: string, selected: boolean }`
 *
 * @csspart button - The native button element
 */
@customElement('md-toggle-button')
export class MdToggleButton extends MdElement {
  static override styles = [adoptStyles(toggleButtonStyles)];

  /** Unique value for this button */
  @property({ type: String, reflect: true })
  value = '';

  /** Whether this button is selected/checked */
  @property({ type: Boolean, reflect: true })
  selected = false;

  /** Whether this button is disabled */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Size of the button (MD3 Expressive) */
  @property({ type: String, reflect: true })
  size: ToggleButtonSize = 'medium';

  /** Accessible label for the button */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /** Position within the group (managed by parent) */
  @state()
  private position: ToggleButtonPosition = 'standalone';

  /** Whether this button is inside a group */
  @state()
  private isInsideGroup = false;

  /** Selection mode from parent group */
  @state()
  private selectionMode: 'single' | 'multi' = 'single';

  /** Whether the icon slot has content */
  @state()
  private hasIcon = false;

  /** Whether the default slot has content */
  @state()
  private hasLabel = false;

  /** Set the position (called by parent group) */
  setPosition(position: ToggleButtonPosition): void {
    this.position = position;
  }

  /** Set whether inside a group (called by parent group) */
  setInsideGroup(isInside: boolean): void {
    this.isInsideGroup = isInside;
  }

  /** Set selection mode (called by parent group) */
  setSelectionMode(mode: 'single' | 'multi'): void {
    this.selectionMode = mode;
  }

  /** Set size (called by parent group) */
  setSize(size: ToggleButtonSize): void {
    this.size = size;
  }

  protected override render(): TemplateResult {
    const classes = {
      'md-toggle-button': true,
      [`md-toggle-button--${this.position}`]: true,
      [`md-toggle-button--${this.size}`]: true,
      'md-toggle-button--selected': this.selected,
      'md-toggle-button--icon-only': this.hasIcon && !this.hasLabel,
    };

    const role = this.isInsideGroup
      ? this.selectionMode === 'single'
        ? 'radio'
        : 'checkbox'
      : 'button';

    const ariaChecked = this.isInsideGroup ? String(this.selected) : undefined;

    return html`
      <button
        class=${classMap(classes)}
        role=${role}
        aria-checked=${ariaChecked ?? nothing}
        aria-label=${this.ariaLabel ?? nothing}
        aria-pressed=${!this.isInsideGroup ? String(this.selected) : nothing}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
        part="button"
      >
        <span class="md-toggle-button__state-layer"></span>
        ${this.renderIcon()}
        ${this.renderLabel()}
      </button>
    `;
  }

  private renderIcon(): TemplateResult {
    return html`
      <span class="md-toggle-button__icon" ?hidden=${!this.hasIcon}>
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
      </span>
    `;
  }

  private renderLabel(): TemplateResult {
    return html`
      <span class="md-toggle-button__label" ?hidden=${!this.hasLabel}>
        <slot @slotchange=${this.handleLabelSlotChange}></slot>
      </span>
    `;
  }

  private handleClick(event: MouseEvent): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // Emit toggle event (used by both parent group and public API)
    this.emit('toggle', {
      originalEvent: event,
      value: this.value,
      selected: this.selected,
    });
  }

  private handleIconSlotChange(event: Event): void {
    const slot = event.target as HTMLSlotElement;
    this.hasIcon = slot.assignedNodes().length > 0;
  }

  private handleLabelSlotChange(event: Event): void {
    const slot = event.target as HTMLSlotElement;
    const nodes = slot.assignedNodes();
    this.hasLabel =
      nodes.some(
        (node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim()
      ) || nodes.some((node) => node.nodeType === Node.ELEMENT_NODE);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'md-toggle-button': MdToggleButton;
  }
}
