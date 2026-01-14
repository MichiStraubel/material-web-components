import { html, nothing, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { MdElement, adoptStyles } from '@material-wc/core';

import segmentedButtonStyles from './segmented-button.css?inline';

export type SegmentPosition = 'first' | 'middle' | 'last' | 'only';

/**
 * Material Design 3 Segmented Button Component
 *
 * @element md-segmented-button
 *
 * @slot - Default slot for label text
 * @slot icon - Slot for icon (positioned before label)
 *
 * @fires toggle - Fired when the segment is clicked. Detail: `{ originalEvent: MouseEvent, value: string, selected: boolean }`
 *
 * @csspart button - The native button element
 */
@customElement('md-segmented-button')
export class MdSegmentedButton extends MdElement {
  static override styles = [adoptStyles(segmentedButtonStyles)];

  /** Unique value for this segment */
  @property({ type: String, reflect: true })
  value = '';

  /** Whether this segment is selected */
  @property({ type: Boolean, reflect: true })
  selected = false;

  /** Whether this segment is disabled */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Hide the checkmark icon when selected */
  @property({ type: Boolean, reflect: true, attribute: 'no-checkmark' })
  noCheckmark = false;

  /** Accessible label for the segment */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /** Position within the set (managed by parent) */
  @state()
  private position: SegmentPosition = 'only';

  /** Whether this segment is inside a set */
  @state()
  private isInsideSet = false;

  /** Selection mode from parent set */
  @state()
  private selectionMode: 'single' | 'multi' = 'single';

  /** Whether the icon slot has content */
  @state()
  private hasIcon = false;

  /** Whether the default slot has content */
  @state()
  private hasLabel = false;

  /** Set the position (called by parent set) */
  setPosition(position: SegmentPosition): void {
    this.position = position;
  }

  /** Set whether inside a set (called by parent set) */
  setInsideSet(isInside: boolean): void {
    this.isInsideSet = isInside;
  }

  /** Set selection mode (called by parent set) */
  setSelectionMode(mode: 'single' | 'multi'): void {
    this.selectionMode = mode;
  }

  protected override render(): TemplateResult {
    const classes = {
      'md-segmented-button': true,
      [`md-segmented-button--${this.position}`]: true,
      'md-segmented-button--selected': this.selected,
      'md-segmented-button--icon-only': this.hasIcon && !this.hasLabel,
      'md-segmented-button--no-checkmark': this.noCheckmark,
    };

    const role = this.isInsideSet
      ? this.selectionMode === 'single'
        ? 'radio'
        : 'checkbox'
      : 'button';

    const ariaChecked = this.isInsideSet ? String(this.selected) : undefined;

    return html`
      <button
        class=${classMap(classes)}
        role=${role}
        aria-checked=${ariaChecked ?? nothing}
        aria-label=${this.ariaLabel ?? nothing}
        ?disabled=${this.disabled}
        @click=${this.handleClick}
        part="button"
      >
        <span class="md-segmented-button__state-layer"></span>
        ${this.renderCheckmark()}
        ${this.renderIcon()}
        ${this.renderLabel()}
      </button>
    `;
  }

  private renderCheckmark(): TemplateResult {
    return html`
      <span class="md-segmented-button__checkmark" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      </span>
    `;
  }

  private renderIcon(): TemplateResult {
    return html`
      <span class="md-segmented-button__icon" ?hidden=${!this.hasIcon}>
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
      </span>
    `;
  }

  private renderLabel(): TemplateResult {
    return html`
      <span class="md-segmented-button__label" ?hidden=${!this.hasLabel}>
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

    // Emit toggle event (used by both parent set and public API)
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
    this.hasLabel = nodes.some(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim()
    ) || nodes.some((node) => node.nodeType === Node.ELEMENT_NODE);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'md-segmented-button': MdSegmentedButton;
  }
}
