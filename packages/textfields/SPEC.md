# MD3 Text Field Specification

Material Design 3 Text Field Component Specification based on [m3.material.io](https://m3.material.io/components/text-fields) and [material-web.dev](https://material-web.dev/components/text-field/).

## Overview

Text fields allow users to enter text into a UI. They typically appear in forms and dialogs. MD3 specifies two variants: **Filled** and **Outlined**, controlled via the `variant` attribute.

## Component

### `md-text-field`

A unified text field component that supports both variants via the `variant` attribute.

```html
<!-- Filled (default) -->
<md-text-field label="Name"></md-text-field>

<!-- Outlined -->
<md-text-field variant="outlined" label="Name"></md-text-field>
```

## Variants

### Filled (`variant="filled"`)

- Has a container with a filled background
- Uses `surface-container-highest` as container color
- Bottom border indicator for focus state
- Best for: Forms where text fields are grouped together

### Outlined (`variant="outlined"`)

- Has a stroked container border
- No background fill (transparent)
- Uses `outline` color for border, `primary` for focus
- Best for: Standalone text fields, forms with fewer fields

## Anatomy

```
┌─────────────────────────────────────────────────────┐
│  [Leading Icon]  Label / Placeholder  [Trailing Icon] │
│                  Input Text                           │
│  [Prefix Text]   ___________________  [Suffix Text]   │
├─────────────────────────────────────────────────────┤
│  Supporting Text                        Counter       │
└─────────────────────────────────────────────────────┘
```

### Components

1. **Container**: The background/border area
2. **Label**: Floating label that moves above input when focused/filled
3. **Input**: The actual text input area
4. **Leading Icon** (optional): Icon before the input
5. **Trailing Icon** (optional): Icon after the input
6. **Prefix Text** (optional): Text before the input value
7. **Suffix Text** (optional): Text after the input value
8. **Supporting Text** (optional): Helper text below the field
9. **Character Counter** (optional): Shows current/max character count

## Properties

### Variant Property

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'filled' \| 'outlined'` | `'filled'` | The visual variant of the text field |

### Core Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | `''` | The current value of the text field |
| `label` | `string` | `''` | The floating label text |
| `placeholder` | `string` | `''` | Placeholder text shown when empty and focused |
| `disabled` | `boolean` | `false` | Whether the text field is disabled |
| `required` | `boolean` | `false` | Whether the field is required |
| `readonly` | `boolean` | `false` | Whether the field is read-only |
| `name` | `string` | `''` | Form field name |

### Input Type Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `type` | `string` | `'text'` | Input type: `text`, `email`, `number`, `password`, `search`, `tel`, `url`, `textarea` |
| `inputmode` | `string` | `''` | Hint for virtual keyboard: `none`, `text`, `decimal`, `numeric`, `tel`, `search`, `email`, `url` |
| `autocomplete` | `string` | `''` | Autocomplete hint for browsers |

### Validation Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `error` | `boolean` | `false` | Whether to display error state |
| `errorText` | `string` | `''` | Error message to display |
| `pattern` | `string` | `''` | Regex pattern for validation |
| `minLength` | `number` | `-1` | Minimum character length |
| `maxLength` | `number` | `-1` | Maximum character length |
| `min` | `string` | `''` | Minimum value (for number/date types) |
| `max` | `string` | `''` | Maximum value (for number/date types) |
| `step` | `string` | `''` | Step increment (for number type) |

### Text Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `prefixText` | `string` | `''` | Text displayed before the input value |
| `suffixText` | `string` | `''` | Text displayed after the input value |
| `supportingText` | `string` | `''` | Helper text below the field |

### Textarea Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `rows` | `number` | `2` | Number of visible text lines (textarea) |
| `cols` | `number` | `20` | Visible width in characters (textarea) |

## Slots

| Slot | Description |
|------|-------------|
| `leading-icon` | Icon displayed before the input |
| `trailing-icon` | Icon displayed after the input |

## Events

Text fields use **native events** per MD3 conventions:

| Event | Description |
|-------|-------------|
| `input` | Fired when the value changes (during typing) |
| `change` | Fired when the value is committed (on blur) |
| `select` | Fired when text is selected |
| `focus` | Fired when the field receives focus |
| `blur` | Fired when the field loses focus |

## Methods

| Method | Description |
|--------|-------------|
| `focus()` | Focuses the text field |
| `blur()` | Removes focus from the text field |
| `select()` | Selects all text in the input |
| `setSelectionRange(start, end)` | Selects a range of text |
| `checkValidity()` | Returns true if the field is valid |
| `reportValidity()` | Shows validation message if invalid |
| `setCustomValidity(message)` | Sets a custom validation message |

## Validation

### Constraint Validation API

Text fields support the native Constraint Validation API:

```typescript
// Check validity
const isValid = textField.checkValidity();

// Report validity (shows error UI)
textField.reportValidity();

// Get validity state
const validity = textField.validity;
// validity.valueMissing, validity.patternMismatch, etc.

// Get validation message
const message = textField.validationMessage;
```

### Manual Validation

For custom validation, use `error` and `errorText`:

```html
<md-text-field
  label="Username"
  error
  error-text="Username already taken"
></md-text-field>
```

## Dimensions (MD3 Specs)

### Container Height

| State | Height |
|-------|--------|
| Default | 56dp |
| Dense (optional) | 48dp |

### Container Shape

| Variant | Top Corners | Bottom Corners |
|---------|-------------|----------------|
| Filled | 4dp (`--radius-xs`) | 0dp |
| Outlined | 4dp (`--radius-xs`) | 4dp (`--radius-xs`) |

### Label Animation

- **Resting**: 16sp, centered vertically in container
- **Floating**: 12sp, positioned at top of container
- **Animation**: `--duration-short-2` (~100ms) with `--easing-standard`

## Color Tokens

### Filled Variant

| Element | State | Token |
|---------|-------|-------|
| Container | Default | `--color-surface-container-highest` |
| Container | Disabled | `--color-on-surface` @ 4% |
| Label | Default | `--color-on-surface-variant` |
| Label | Focused | `--color-primary` |
| Label | Error | `--color-error` |
| Input Text | Default | `--color-on-surface` |
| Input Text | Disabled | `--color-on-surface` @ 38% |
| Active Indicator | Default | `--color-on-surface-variant` (1dp) |
| Active Indicator | Focused | `--color-primary` (2dp) |
| Active Indicator | Error | `--color-error` (2dp) |
| Supporting Text | Default | `--color-on-surface-variant` |
| Supporting Text | Error | `--color-error` |

### Outlined Variant

| Element | State | Token |
|---------|-------|-------|
| Container | Default | transparent |
| Outline | Default | `--color-outline` (1dp) |
| Outline | Focused | `--color-primary` (2dp) |
| Outline | Error | `--color-error` (2dp) |
| Outline | Disabled | `--color-on-surface` @ 12% |
| Label | Default | `--color-on-surface-variant` |
| Label | Focused | `--color-primary` |
| Label | Error | `--color-error` |

## Typography Tokens

| Element | Token |
|---------|-------|
| Label (resting) | `--typescale-body-large` (16sp) |
| Label (floating) | `--typescale-body-small` (12sp) |
| Input Text | `--typescale-body-large` (16sp) |
| Supporting Text | `--typescale-body-small` (12sp) |
| Prefix/Suffix | `--typescale-body-large` (16sp) |

## State Layer

| State | Opacity |
|-------|---------|
| Hover | 8% of `--color-on-surface` |
| Focus | 0% (indicator shows focus) |
| Pressed | 12% of `--color-on-surface` |
| Disabled | Container @ 4%, content @ 38% |

## CSS Custom Properties

```css
/* Container */
--md-text-field-container-color
--md-text-field-container-shape

/* Focus */
--md-text-field-focus-indicator-color
--md-text-field-focus-indicator-height
--md-text-field-focus-label-text-color

/* Label */
--md-text-field-label-text-color
--md-text-field-label-text-font
--md-text-field-label-text-size

/* Input */
--md-text-field-input-text-color
--md-text-field-input-text-font
--md-text-field-input-text-size

/* Error */
--md-text-field-error-indicator-color
--md-text-field-error-label-text-color

/* Caret */
--md-text-field-caret-color
--md-text-field-error-caret-color

/* Icons */
--md-text-field-leading-icon-color
--md-text-field-trailing-icon-color

/* Supporting Text */
--md-text-field-supporting-text-color
--md-text-field-error-supporting-text-color
```

## Accessibility

### ARIA Attributes

| Attribute | Usage |
|-----------|-------|
| `aria-label` | When no visible label is provided |
| `aria-labelledby` | References external label element |
| `aria-describedby` | References supporting/error text |
| `aria-invalid` | Set to `true` when in error state |
| `aria-required` | Set when field is required |
| `aria-disabled` | Set when field is disabled |

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | Move focus to/from text field |
| `Enter` | Submit form (if in form context) |
| Standard text editing keys | Edit text content |

## Implementation Notes

### File Structure

```
packages/textfields/
├── src/
│   ├── text-field/
│   │   ├── text-field.ts        # Unified component
│   │   ├── text-field.src.css   # All styles (filled + outlined)
│   │   └── text-field.test.ts   # Tests
│   └── index.ts
├── package.json
├── vite.config.ts
├── tsconfig.json
└── SPEC.md
```

### Component Structure

```typescript
@customElement('md-text-field')
class MdTextField extends MdElement {
  // Variant property
  @property({ reflect: true }) variant: 'filled' | 'outlined' = 'filled';

  // Core properties
  @property() value = '';
  @property() label = '';
  @property() placeholder = '';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean }) readonly = false;

  // Validation
  @property({ type: Boolean }) error = false;
  @property({ attribute: 'error-text' }) errorText = '';

  // Text additions
  @property({ attribute: 'prefix-text' }) prefixText = '';
  @property({ attribute: 'suffix-text' }) suffixText = '';
  @property({ attribute: 'supporting-text' }) supportingText = '';

  // Internal state
  @state() private focused = false;

  // Validation API delegation
  checkValidity(): boolean { ... }
  reportValidity(): boolean { ... }
  setCustomValidity(message: string): void { ... }
}
```

### Focus Management

The text field must:
1. Forward focus to the internal `<input>` element
2. Update visual state based on focus
3. Animate label on focus/blur

### Form Association

Text fields should work with native forms:
1. Implement `ElementInternals` for form association
2. Support `name` attribute for form submission
3. Participate in form validation

## Usage Examples

### Basic Usage

```html
<!-- Filled (default) -->
<md-text-field label="Name"></md-text-field>

<!-- Outlined -->
<md-text-field variant="outlined" label="Email" type="email"></md-text-field>
```

### Dynamic Variant Switching

```html
<md-text-field id="myField" label="Name"></md-text-field>

<script>
  // Switch variant dynamically
  document.getElementById('myField').variant = 'outlined';
</script>
```

### With Icons

```html
<md-text-field label="Search">
  <md-icon slot="leading-icon">search</md-icon>
  <md-icon slot="trailing-icon">clear</md-icon>
</md-text-field>
```

### With Validation

```html
<md-text-field
  variant="outlined"
  label="Password"
  type="password"
  required
  minlength="8"
  supporting-text="Must be at least 8 characters"
></md-text-field>
```

### With Prefix/Suffix

```html
<md-text-field
  label="Price"
  type="number"
  prefix-text="$"
  suffix-text=".00"
></md-text-field>
```

### Error State

```html
<md-text-field
  label="Username"
  error
  error-text="Username is already taken"
></md-text-field>
```

### Textarea

```html
<md-text-field
  variant="outlined"
  label="Description"
  type="textarea"
  rows="4"
></md-text-field>
```

## References

- [MD3 Text Fields Overview](https://m3.material.io/components/text-fields/overview)
- [MD3 Text Fields Specs](https://m3.material.io/components/text-fields/specs)
- [MD3 Text Fields Guidelines](https://m3.material.io/components/text-fields/guidelines)
- [Material Web Text Field](https://material-web.dev/components/text-field/)
