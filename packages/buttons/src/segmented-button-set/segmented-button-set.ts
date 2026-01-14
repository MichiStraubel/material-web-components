import { html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { MdElement, adoptStyles } from '@material-wc/core';

import segmentedButtonSetStyles from './segmented-button-set.css?inline';
import type { MdSegmentedButton } from '../segmented-button/segmented-button.js';

export type SelectionMode = 'single' | 'multi';
export type SegmentedButtonDensity = 'default' | 'compact';

/**
 * Material Design 3 Segmented Button Set Component
 *
 * Container component that manages a group of segmented buttons.
 *
 * @element md-segmented-button-set
 *
 * @slot - Default slot for md-segmented-button children
 *
 * @fires change - Fired when selection changes. Detail: `{ originalEvent: Event, value: string[] }`
 *
 * @csspart container - The container div element
 */
@customElement('md-segmented-button-set')
export class MdSegmentedButtonSet extends MdElement {
  static override styles = [adoptStyles(segmentedButtonSetStyles)];

  /** Selection mode: single (radio) or multi (checkbox) */
  @property({ type: String, reflect: true, attribute: 'selection-mode' })
  selectionMode: SelectionMode = 'single';

  /** Whether all segments are disabled */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Density variant */
  @property({ type: String, reflect: true })
  density: SegmentedButtonDensity = 'default';

  /** Accessible label for the group */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /** Cached list of button children */
  private buttons: MdSegmentedButton[] = [];

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener(
      'toggle',
      this.handleSegmentClick as EventListener
    );
    this.addEventListener('keydown', this.handleKeydown);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener(
      'toggle',
      this.handleSegmentClick as EventListener
    );
    this.removeEventListener('keydown', this.handleKeydown);
  }

  protected override render(): TemplateResult {
    const classes = {
      'md-segmented-button-set': true,
      'md-segmented-button-set--compact': this.density === 'compact',
      'md-segmented-button-set--disabled': this.disabled,
    };

    const role = this.selectionMode === 'single' ? 'radiogroup' : 'group';

    return html`
      <div
        class=${classMap(classes)}
        role=${role}
        aria-label=${this.ariaLabel || ''}
        aria-disabled=${this.disabled}
        part="container"
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }

  /** Get currently selected values */
  getSelectedValues(): string[] {
    return this.buttons.filter((b) => b.selected).map((b) => b.value);
  }

  /** Set selected values programmatically */
  setSelectedValues(values: string[]): void {
    this.buttons.forEach((b) => {
      b.selected = values.includes(b.value);
    });
    this.updateTabIndex();
  }

  private handleSlotChange(event: Event): void {
    const slot = event.target as HTMLSlotElement;
    const nodes = slot.assignedElements({ flatten: true });

    this.buttons = nodes.filter(
      (el): el is MdSegmentedButton =>
        el.tagName.toLowerCase() === 'md-segmented-button'
    );

    this.updateButtonPositions();
    this.syncButtonStates();
    this.updateTabIndex();
  }

  private updateButtonPositions(): void {
    const count = this.buttons.length;

    this.buttons.forEach((button, index) => {
      if (count === 1) {
        button.setPosition('only');
      } else if (index === 0) {
        button.setPosition('first');
      } else if (index === count - 1) {
        button.setPosition('last');
      } else {
        button.setPosition('middle');
      }

      button.setInsideSet(true);
      button.setSelectionMode(this.selectionMode);
    });
  }

  private syncButtonStates(): void {
    // Sync disabled state
    if (this.disabled) {
      this.buttons.forEach((b) => (b.disabled = true));
    }

    // Ensure at least one is selected in single-select mode
    if (this.selectionMode === 'single') {
      const hasSelected = this.buttons.some((b) => b.selected);
      if (!hasSelected && this.buttons.length > 0) {
        const firstEnabled = this.buttons.find((b) => !b.disabled);
        if (firstEnabled) {
          firstEnabled.selected = true;
        }
      }
    }
  }

  private handleSegmentClick(event: CustomEvent): void {
    const button = event.target as MdSegmentedButton;

    if (this.disabled || button.disabled) {
      return;
    }

    const previousSelected = this.getSelectedValues();

    if (this.selectionMode === 'single') {
      // Single-select: select clicked, deselect others (no deselect allowed)
      this.buttons.forEach((b) => (b.selected = b === button));
    } else {
      // Multi-select: toggle the clicked button
      button.selected = !button.selected;
    }

    const newSelected = this.getSelectedValues();

    // Emit change event if selection changed
    if (JSON.stringify(previousSelected) !== JSON.stringify(newSelected)) {
      this.emit('change', {
        originalEvent: event,
        value: newSelected,
      });
    }

    this.updateTabIndex();
  }

  private handleKeydown = (event: KeyboardEvent): void => {
    const enabledButtons = this.getEnabledButtons();
    const target = event.target as MdSegmentedButton;

    if (!this.buttons.includes(target)) {
      return;
    }

    const currentIndex = enabledButtons.indexOf(target);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex;
    let shouldSelect = false;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextIndex =
          currentIndex > 0 ? currentIndex - 1 : enabledButtons.length - 1;
        shouldSelect = this.selectionMode === 'single';
        event.preventDefault();
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextIndex =
          currentIndex < enabledButtons.length - 1 ? currentIndex + 1 : 0;
        shouldSelect = this.selectionMode === 'single';
        event.preventDefault();
        break;

      case 'Home':
        nextIndex = 0;
        event.preventDefault();
        break;

      case 'End':
        nextIndex = enabledButtons.length - 1;
        event.preventDefault();
        break;

      case ' ':
      case 'Enter':
        // For multi-select, toggle on Space/Enter
        if (this.selectionMode === 'multi') {
          enabledButtons[currentIndex].click();
        }
        event.preventDefault();
        return;

      default:
        return;
    }

    // Move focus
    enabledButtons[nextIndex].focus();

    // In single-select, selection follows focus (radio pattern)
    if (shouldSelect) {
      const previousSelected = this.getSelectedValues();
      this.buttons.forEach((b) => (b.selected = false));
      enabledButtons[nextIndex].selected = true;

      const newSelected = this.getSelectedValues();
      if (JSON.stringify(previousSelected) !== JSON.stringify(newSelected)) {
        this.emit('change', {
          originalEvent: event,
          value: newSelected,
        });
      }
    }

    this.updateTabIndex();
  };

  private getEnabledButtons(): MdSegmentedButton[] {
    return this.buttons.filter((b) => !b.disabled);
  }

  private updateTabIndex(): void {
    // Roving tabindex: only the selected (or first enabled) button is focusable
    const selectedButton = this.buttons.find((b) => b.selected && !b.disabled);
    const firstEnabled = this.buttons.find((b) => !b.disabled);
    const focusableButton = selectedButton || firstEnabled;

    this.buttons.forEach((b) => {
      b.tabIndex = b === focusableButton ? 0 : -1;
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'md-segmented-button-set': MdSegmentedButtonSet;
  }
}
