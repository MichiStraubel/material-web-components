import { html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { MdElement, adoptStyles } from '@material-wc/core';

import fabStyles from './fab.css?inline';

export type FabVariant = 'surface' | 'primary' | 'secondary' | 'tertiary';
export type FabSize = 'small' | 'medium' | 'large';

/**
 * Material Design 3 Floating Action Button (FAB) Component
 *
 * FABs represent the most important action on a screen.
 * They should be used for positive actions like create, share, or explore.
 *
 * @element md-fab
 *
 * @slot - Default slot for label text (extended FAB)
 * @slot icon - Slot for icon content
 *
 * @fires md-click - Fired when the FAB is clicked
 *
 * @csspart button - The native button element
 */
@customElement('md-fab')
export class MdFab extends MdElement {
  static override styles = [adoptStyles(fabStyles)];

  /** The color variant of the FAB */
  @property({ type: String, reflect: true })
  variant: FabVariant = 'primary';

  /** The size of the FAB */
  @property({ type: String, reflect: true })
  size: FabSize = 'medium';

  /** Whether the FAB is disabled */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * Whether the FAB is extended (shows label text).
   * When true, the FAB expands to include a text label.
   */
  @property({ type: Boolean, reflect: true })
  extended = false;

  /** Whether to lower the elevation of the FAB */
  @property({ type: Boolean, reflect: true })
  lowered = false;

  /** Accessible label for the FAB */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /** Whether the icon slot has content */
  private hasIcon = false;

  /** Whether the default slot has content */
  private hasLabel = false;

  protected override render(): TemplateResult {
    // Extended FABs have fixed size (56dp), size property is ignored
    const isExtended = this.extended || this.hasLabel;
    const classes = {
      'md-fab': true,
      [`md-fab--${this.variant}`]: true,
      [`md-fab--${this.size}`]: !isExtended,
      'md-fab--extended': isExtended,
      'md-fab--lowered': this.lowered,
    };

    return html`
      <button
        class=${classMap(classes)}
        ?disabled=${this.disabled}
        aria-label=${this.ariaLabel || ''}
        @click=${this.handleClick}
        part="button"
      >
        <span class="md-fab__icon" ?hidden=${!this.hasIcon}>
          <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
        </span>
        <span class="md-fab__label" ?hidden=${!this.hasLabel && !this.extended}>
          <slot @slotchange=${this.handleLabelSlotChange}></slot>
        </span>
      </button>
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

  private handleLabelSlotChange(event: Event): void {
    const slot = event.target as HTMLSlotElement;
    const nodes = slot.assignedNodes();
    this.hasLabel = nodes.some(node =>
      node.nodeType === Node.TEXT_NODE ? node.textContent?.trim() : true
    );
    this.requestUpdate();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'md-fab': MdFab;
  }
}
