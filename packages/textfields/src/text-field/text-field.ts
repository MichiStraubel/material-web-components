import { html, type TemplateResult, type PropertyValues } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { MdElement, adoptStyles } from '@material-wc/core';

import textFieldStyles from './text-field.css?inline';

export type TextFieldVariant = 'filled' | 'outlined';

export type TextFieldType =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'url'
  | 'textarea';

/**
 * Material Design 3 Text Field Component
 *
 * A text field that supports both filled and outlined variants.
 *
 * @element md-text-field
 *
 * @slot leading-icon - Icon displayed before the input
 * @slot trailing-icon - Icon displayed after the input
 *
 * @fires input - Native input event when value changes during typing
 * @fires change - Native change event when value is committed (on blur)
 * @fires focus - Native focus event when field receives focus
 * @fires blur - Native blur event when field loses focus
 *
 * @csspart container - The main container element
 * @csspart input - The input element
 * @csspart label - The floating label element
 */
@customElement('md-text-field')
export class MdTextField extends MdElement {
  static override styles = [adoptStyles(textFieldStyles)];

  // ============================================
  // Variant Property
  // ============================================

  /** The visual variant of the text field */
  @property({ type: String, reflect: true })
  variant: TextFieldVariant = 'filled';

  // ============================================
  // Core Properties
  // ============================================

  /** The current value of the text field */
  @property({ type: String })
  value = '';

  /** The floating label text */
  @property({ type: String })
  label = '';

  /** Placeholder text shown when empty and focused */
  @property({ type: String })
  placeholder = '';

  /** Whether the text field is disabled */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Whether the field is required */
  @property({ type: Boolean, reflect: true })
  required = false;

  /** Whether the field is read-only */
  @property({ type: Boolean, reflect: true })
  readonly = false;

  /** Form field name */
  @property({ type: String })
  name = '';

  // ============================================
  // Input Type Properties
  // ============================================

  /** Input type */
  @property({ type: String })
  type: TextFieldType = 'text';

  /** Hint for virtual keyboard */
  @property({ type: String })
  inputmode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';

  /** Autocomplete hint for browsers */
  @property({ type: String })
  autocomplete?: string;

  // ============================================
  // Validation Properties
  // ============================================

  /** Whether to display error state */
  @property({ type: Boolean, reflect: true })
  error = false;

  /** Error message to display */
  @property({ type: String, attribute: 'error-text' })
  errorText = '';

  /** Regex pattern for validation */
  @property({ type: String })
  pattern?: string;

  /** Minimum character length */
  @property({ type: Number, attribute: 'minlength' })
  minLength = -1;

  /** Maximum character length */
  @property({ type: Number, attribute: 'maxlength' })
  maxLength = -1;

  /** Minimum value (for number/date types) */
  @property({ type: String })
  min?: string;

  /** Maximum value (for number/date types) */
  @property({ type: String })
  max?: string;

  /** Step increment (for number type) */
  @property({ type: String })
  step?: string;

  // ============================================
  // Text Properties
  // ============================================

  /** Text displayed before the input value */
  @property({ type: String, attribute: 'prefix-text' })
  prefixText = '';

  /** Text displayed after the input value */
  @property({ type: String, attribute: 'suffix-text' })
  suffixText = '';

  /** Helper text below the field */
  @property({ type: String, attribute: 'supporting-text' })
  supportingText = '';

  // ============================================
  // Textarea Properties
  // ============================================

  /** Number of visible text lines (textarea) */
  @property({ type: Number })
  rows = 2;

  /** Visible width in characters (textarea) */
  @property({ type: Number })
  cols = 20;

  // ============================================
  // Internal State
  // ============================================

  @state()
  private focused = false;

  @state()
  private hasLeadingIcon = false;

  @state()
  private hasTrailingIcon = false;

  @query('input, textarea')
  private inputElement!: HTMLInputElement | HTMLTextAreaElement;

  // ============================================
  // Lifecycle
  // ============================================

  protected override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    // Sync value to input element if changed externally
    if (changedProperties.has('value') && this.inputElement) {
      this.inputElement.value = this.value;
    }
  }

  // ============================================
  // Public Methods (Validation API)
  // ============================================

  /** Returns true if the field is valid */
  checkValidity(): boolean {
    return this.inputElement?.checkValidity() ?? true;
  }

  /** Shows validation message if invalid */
  reportValidity(): boolean {
    return this.inputElement?.reportValidity() ?? true;
  }

  /** Sets a custom validation message */
  setCustomValidity(message: string): void {
    this.inputElement?.setCustomValidity(message);
  }

  /** Gets the validity state */
  get validity(): ValidityState | undefined {
    return this.inputElement?.validity;
  }

  /** Gets the validation message */
  get validationMessage(): string {
    return this.inputElement?.validationMessage ?? '';
  }

  // ============================================
  // Public Methods (Focus)
  // ============================================

  /** Focuses the text field */
  override focus(): void {
    this.inputElement?.focus();
  }

  /** Removes focus from the text field */
  override blur(): void {
    this.inputElement?.blur();
  }

  /** Selects all text in the input */
  select(): void {
    this.inputElement?.select();
  }

  /** Selects a range of text */
  setSelectionRange(start: number, end: number, direction?: 'forward' | 'backward' | 'none'): void {
    this.inputElement?.setSelectionRange(start, end, direction);
  }

  // ============================================
  // Computed Properties
  // ============================================

  /** Whether the field has content or is focused */
  private get populated(): boolean {
    return this.value.length > 0 || this.focused;
  }

  /** The text to display below the field */
  private get displaySupportingText(): string {
    return this.error && this.errorText ? this.errorText : this.supportingText;
  }

  /** Whether to show the character counter */
  private get showCounter(): boolean {
    return this.maxLength > 0;
  }

  // ============================================
  // Event Handlers
  // ============================================

  private handleInput(event: Event): void {
    const input = event.target as HTMLInputElement | HTMLTextAreaElement;
    this.value = input.value;
    // Native input event bubbles automatically
  }

  private handleChange(): void {
    // Native change event bubbles automatically
  }

  private handleFocus(): void {
    this.focused = true;
    // Native focus event bubbles automatically
  }

  private handleBlur(): void {
    this.focused = false;
    // Native blur event bubbles automatically
  }

  private handleContainerClick(): void {
    if (!this.disabled) {
      this.focus();
    }
  }

  private handleLeadingIconSlotChange(event: Event): void {
    const slot = event.target as HTMLSlotElement;
    this.hasLeadingIcon = slot.assignedNodes().length > 0;
  }

  private handleTrailingIconSlotChange(event: Event): void {
    const slot = event.target as HTMLSlotElement;
    this.hasTrailingIcon = slot.assignedNodes().length > 0;
  }

  // ============================================
  // Rendering
  // ============================================

  protected override render(): TemplateResult {
    return html`
      ${this.renderContainer()}
      ${this.renderSupportingText()}
    `;
  }

  private renderContainer(): TemplateResult {
    const containerClasses = {
      'md-text-field': true,
      'md-text-field--filled': this.variant === 'filled',
      'md-text-field--outlined': this.variant === 'outlined',
      'md-text-field--focused': this.focused,
      'md-text-field--populated': this.populated,
      'md-text-field--error': this.error,
      'md-text-field--disabled': this.disabled,
      'md-text-field--has-leading-icon': this.hasLeadingIcon,
      'md-text-field--has-trailing-icon': this.hasTrailingIcon,
      'md-text-field--no-label': !this.label,
      'md-text-field--textarea': this.type === 'textarea',
    };

    return html`
      <div
        class=${classMap(containerClasses)}
        part="container"
        @click=${this.handleContainerClick}
      >
        ${this.renderLeadingIcon()}
        <div class="md-text-field__input-wrapper">
          ${this.renderPrefix()}
          ${this.renderInput()}
          ${this.renderSuffix()}
        </div>
        ${this.renderLabel()}
        ${this.renderTrailingIcon()}
      </div>
    `;
  }

  private renderInput(): TemplateResult {
    const inputClasses = {
      'md-text-field__input': true,
    };

    if (this.type === 'textarea') {
      return html`
        <textarea
          class=${classMap(inputClasses)}
          part="input"
          .value=${live(this.value)}
          ?disabled=${this.disabled}
          ?required=${this.required}
          ?readonly=${this.readonly}
          placeholder=${ifDefined(this.placeholder || undefined)}
          name=${ifDefined(this.name || undefined)}
          rows=${this.rows}
          cols=${this.cols}
          minlength=${ifDefined(this.minLength > 0 ? this.minLength : undefined)}
          maxlength=${ifDefined(this.maxLength > 0 ? this.maxLength : undefined)}
          aria-label=${ifDefined(this.label || undefined)}
          aria-invalid=${this.error ? 'true' : 'false'}
          aria-describedby=${ifDefined(this.displaySupportingText ? 'supporting-text' : undefined)}
          @input=${this.handleInput}
          @change=${this.handleChange}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
        ></textarea>
      `;
    }

    return html`
      <input
        class=${classMap(inputClasses)}
        part="input"
        type=${this.type === 'textarea' ? 'text' : this.type}
        .value=${live(this.value)}
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?readonly=${this.readonly}
        placeholder=${ifDefined(this.placeholder || undefined)}
        name=${ifDefined(this.name || undefined)}
        inputmode=${ifDefined(this.inputmode)}
        autocomplete=${ifDefined(this.autocomplete)}
        pattern=${ifDefined(this.pattern)}
        minlength=${ifDefined(this.minLength > 0 ? this.minLength : undefined)}
        maxlength=${ifDefined(this.maxLength > 0 ? this.maxLength : undefined)}
        min=${ifDefined(this.min)}
        max=${ifDefined(this.max)}
        step=${ifDefined(this.step)}
        aria-label=${ifDefined(this.label || undefined)}
        aria-invalid=${this.error ? 'true' : 'false'}
        aria-describedby=${ifDefined(this.displaySupportingText ? 'supporting-text' : undefined)}
        @input=${this.handleInput}
        @change=${this.handleChange}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
      />
    `;
  }

  private renderLabel(): TemplateResult {
    if (!this.label) {
      return html``;
    }

    const labelClasses = {
      'md-text-field__label': true,
      'md-text-field__label--floating': this.populated,
      'md-text-field__label--error': this.error,
    };

    return html`
      <span class=${classMap(labelClasses)} part="label">${this.label}</span>
    `;
  }

  private renderPrefix(): TemplateResult {
    if (!this.prefixText) {
      return html``;
    }

    return html`
      <span class="md-text-field__prefix">${this.prefixText}</span>
    `;
  }

  private renderSuffix(): TemplateResult {
    if (!this.suffixText) {
      return html``;
    }

    return html`
      <span class="md-text-field__suffix">${this.suffixText}</span>
    `;
  }

  private renderLeadingIcon(): TemplateResult {
    return html`
      <span class="md-text-field__leading-icon" ?hidden=${!this.hasLeadingIcon}>
        <slot name="leading-icon" @slotchange=${this.handleLeadingIconSlotChange}></slot>
      </span>
    `;
  }

  private renderTrailingIcon(): TemplateResult {
    return html`
      <span class="md-text-field__trailing-icon" ?hidden=${!this.hasTrailingIcon}>
        <slot name="trailing-icon" @slotchange=${this.handleTrailingIconSlotChange}></slot>
      </span>
    `;
  }

  private renderSupportingText(): TemplateResult {
    const hasContent = this.displaySupportingText || this.showCounter;
    if (!hasContent) {
      return html``;
    }

    const supportingClasses = {
      'md-text-field__supporting': true,
      'md-text-field__supporting--error': this.error,
    };

    return html`
      <div class=${classMap(supportingClasses)}>
        <span id="supporting-text" class="md-text-field__supporting-text">
          ${this.displaySupportingText}
        </span>
        ${this.showCounter
          ? html`
              <span class="md-text-field__counter">
                ${this.value.length} / ${this.maxLength}
              </span>
            `
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'md-text-field': MdTextField;
  }
}
