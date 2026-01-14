# MD3 Buttons Specification

Material Design 3 Button Components Specification based on [m3.material.io](https://m3.material.io/components/buttons) and [material-web.dev](https://material-web.dev/components/button/).

## Overview

Buttons communicate actions that users can take. MD3 defines several button types for different emphasis levels and use cases.

## Components

| Component | Element | Description |
|-----------|---------|-------------|
| Button | `md-button` | Standard buttons with multiple variants |
| Icon Button | `md-icon-button` | Icon-only buttons |
| FAB | `md-fab` | Floating Action Button |
| Button Group | `md-button-group` | Connected toggle buttons (MD3 Expressive) |
| Split Button | `md-split-button` | Primary action with dropdown menu |

---

## md-button

### Variants

| Variant | Use Case | Emphasis |
|---------|----------|----------|
| `filled` | Primary actions, high emphasis | Highest |
| `tonal` | Secondary actions, medium emphasis | Medium-High |
| `elevated` | Actions needing separation from background | Medium |
| `outlined` | Secondary actions, low emphasis | Medium-Low |
| `text` | Lowest emphasis actions | Lowest |

### Dimensions (MD3 Specs)

| Size | Height | Horizontal Padding | Icon Size | Border Radius |
|------|--------|-------------------|-----------|---------------|
| `small` | 32dp | 12dp | 18dp | 16dp |
| `medium` | 40dp | 24dp | 18dp | 20dp |
| `large` | 48dp | 32dp | 20dp | 24dp |

### Color Tokens

#### Filled Button

| Element | State | Token |
|---------|-------|-------|
| Container | Default | `--color-primary` |
| Container | Disabled | `--color-on-surface` @ 12% |
| Label | Default | `--color-on-primary` |
| Label | Disabled | `--color-on-surface` @ 38% |
| State Layer | Hover | `--color-on-primary` @ 8% |
| State Layer | Focus/Pressed | `--color-on-primary` @ 12% |

#### Tonal Button

| Element | State | Token |
|---------|-------|-------|
| Container | Default | `--color-secondary-container` |
| Label | Default | `--color-on-secondary-container` |
| State Layer | Hover | `--color-on-secondary-container` @ 8% |

#### Outlined Button

| Element | State | Token |
|---------|-------|-------|
| Container | Default | transparent |
| Outline | Default | `--color-outline` (1dp) |
| Outline | Focused | `--color-primary` |
| Label | Default | `--color-primary` |
| State Layer | Hover | `--color-primary` @ 8% |

#### Elevated Button

| Element | State | Token |
|---------|-------|-------|
| Container | Default | `--color-surface-container-low` |
| Shadow | Default | Elevation Level 1 |
| Shadow | Hover | Elevation Level 2 |
| Label | Default | `--color-primary` |

#### Text Button

| Element | State | Token |
|---------|-------|-------|
| Container | Default | transparent |
| Label | Default | `--color-primary` |
| State Layer | Hover | `--color-primary` @ 8% |

### State Layer Opacities

| State | Opacity |
|-------|---------|
| Hover | 8% |
| Focus | 12% |
| Pressed | 12% |
| Dragged | 16% |
| Disabled Container | 12% |
| Disabled Content | 38% |

---

## md-icon-button

### Variants

| Variant | Unselected | Selected |
|---------|------------|----------|
| `standard` | Transparent, `on-surface-variant` | Transparent, `primary` with 12% tint |
| `filled` | `surface-container-highest`, `primary` | `primary`, `on-primary` |
| `tonal` | `surface-container-highest`, `on-surface-variant` | `secondary-container`, `on-secondary-container` |
| `outlined` | Transparent + outline, `on-surface-variant` | `inverse-surface`, `inverse-on-surface` |

### Dimensions (MD3 Expressive)

| Size | Container | Icon | Touch Target |
|------|-----------|------|--------------|
| `xsmall` | 32dp | 24dp | 48dp |
| `small` | 36dp | 24dp | 48dp |
| `medium` | 40dp | 24dp | 48dp |
| `large` | 48dp | 24dp | 48dp |
| `xlarge` | 56dp | 24dp | 56dp |

### Shapes (MD3 Expressive)

| Shape | Border Radius |
|-------|---------------|
| `round` | 9999px (fully rounded) |
| `square` | Size-dependent (8dp-16dp) |

### Width Variants (MD3 Expressive)

| Width | Multiplier |
|-------|------------|
| `narrow` | 0.75x |
| `default` | 1x |
| `wide` | 1.5x |

---

## md-fab

### Variants

| Variant | Container | Icon |
|---------|-----------|------|
| `surface` | `surface-container-high` | `primary` |
| `primary` | `primary-container` | `on-primary-container` |
| `secondary` | `secondary-container` | `on-secondary-container` |
| `tertiary` | `tertiary-container` | `on-tertiary-container` |

### Dimensions

| Size | Container | Icon | Border Radius | Elevation |
|------|-----------|------|---------------|-----------|
| `small` | 40dp | 24dp | 12dp | Level 3 |
| `medium` | 56dp | 24dp | 16dp | Level 3 |
| `large` | 96dp | 36dp | 28dp | Level 3 |

### Extended FAB

- Height: Always 56dp (regardless of size)
- Border Radius: 16dp
- Padding: 16dp (with icon), 24dp (without icon)
- Gap between icon and label: 12dp

### Lowered State

- Elevation: Level 1 (instead of Level 3)
- Hover: Level 2

---

## md-button-group (MD3 Expressive)

Connected toggle buttons following MD3 Expressive guidelines.

### Container

- Gap between buttons: 4dp (`--spacing-xs`)
- Container height: 48dp (tap target)
- Buttons are centered vertically

### Button Shapes by Position

| Position | Unselected Shape | Selected Shape |
|----------|------------------|----------------|
| Leading | Rounded left, square right | Fully rounded |
| Middle | Square (4dp radius) | Fully rounded |
| Trailing | Square left, rounded right | Fully rounded |
| Standalone | Fully rounded | Fully rounded |

### Size-Dependent Border Radius

| Size | Full Radius | Square Radius |
|------|-------------|---------------|
| `xsmall` | 16dp | 4dp |
| `small` | 18dp | 4dp |
| `medium` | 20dp | 4dp |
| `large` | 24dp | 4dp |
| `xlarge` | 28dp | 4dp |

### Selection Modes

| Mode | Behavior | ARIA Role |
|------|----------|-----------|
| `single` | Radio-like (one selected) | `radiogroup` / `radio` |
| `multi` | Checkbox-like (multiple) | `group` / `checkbox` |

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `ArrowLeft/Right` | Move focus |
| `Home/End` | First/last button |
| `Space/Enter` | Toggle selection |

---

## md-split-button

### Anatomy

```
┌─────────────────────────────┬───────┐
│  [Icon]  Label              │  ▼    │
│     Leading Button          │Trailing│
└─────────────────────────────┴───────┘
                              ↓
                        ┌─────────────┐
                        │ Menu Item 1 │
                        │ Menu Item 2 │
                        │ Menu Item 3 │
                        └─────────────┘
```

### Variants

Same as `md-button`: `filled`, `tonal`, `outlined`, `elevated`

### Dimensions (MD3 Expressive)

| Size | Height | Leading Padding | Trailing Width |
|------|--------|-----------------|----------------|
| `xsmall` | 32dp | 12dp | 32dp |
| `small` | 36dp | 14dp | 36dp |
| `medium` | 40dp | 16dp | 40dp |
| `large` | 48dp | 20dp | 48dp |
| `xlarge` | 56dp | 24dp | 56dp |

### Menu Specifications (MD3 Menu)

| Property | Value |
|----------|-------|
| Background | `--color-surface-container` |
| Border Radius | 4dp |
| Elevation | Level 2 |
| Min Width | 112dp |
| Max Width | 280dp |
| Vertical Padding | 8dp |

### Menu Item Specifications

| Property | Value |
|----------|-------|
| Height | 48dp |
| Horizontal Padding | 16dp |
| Vertical Padding | 12dp |
| Typography | `body-large` (14sp) |
| Text Color | `--color-on-surface` |
| Hover State | 8% `on-surface` overlay |
| Focus State | 12% `on-surface` overlay |

### Menu Animation

| Property | Value |
|----------|-------|
| Type | Scale |
| From | 0.8 |
| To | 1.0 |
| Duration | `--duration-short-2` (~100ms) |
| Easing | `--easing-standard` |
| Transform Origin | Top right |

### Events (MD3 Convention)

| Event | Type | Payload |
|-------|------|---------|
| `click` | Native | - (value via `element.value`) |
| `open` | Lifecycle | - |
| `close` | Lifecycle | - |
| `change` | Selection | `{ value: string }` |

---

## Typography Tokens

| Element | Token |
|---------|-------|
| Button Label | `--text-label-lg` (14sp, 500 weight) |
| Small Button | `--text-label-md` (12sp, 500 weight) |
| Large Button | `--text-label-lg` (14sp, 500 weight) |

---

## Motion Tokens

| Property | Token | Value |
|----------|-------|-------|
| State Layer | `--duration-short-2` | 100ms |
| Elevation Change | `--duration-medium-1` | 200ms |
| Menu Open | `--duration-short-2` | 100ms |
| Easing | `--easing-standard` | cubic-bezier(0.2, 0, 0, 1) |

---

## Accessibility

### Required ARIA

| Component | Attribute | Usage |
|-----------|-----------|-------|
| All Buttons | `aria-label` | When no visible text |
| Icon Button | `aria-label` | Always required |
| Toggle | `aria-pressed` | Current state |
| Button Group | `role="radiogroup"` or `role="group"` | Container |
| Split Button Trailing | `aria-haspopup="menu"` | Menu trigger |
| Split Button Trailing | `aria-expanded` | Menu state |

### Focus Indicators

- Outline: 2px solid `--color-primary`
- Outline Offset: 2px
- Border Radius: Matches button shape

---

## References

- [MD3 Common Buttons](https://m3.material.io/components/buttons/overview)
- [MD3 Icon Buttons](https://m3.material.io/components/icon-buttons/overview)
- [MD3 FAB](https://m3.material.io/components/floating-action-button/overview)
- [MD3 Menus](https://m3.material.io/components/menus/specs)
- [Material Web Buttons](https://material-web.dev/components/button/)
