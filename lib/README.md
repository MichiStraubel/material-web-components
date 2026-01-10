# material-wc

Material Design 3 Web Components - A complete library of MD3 components built with Lit.

## Installation

```bash
npm install material-wc lit
```

## Usage

### Import all components

```typescript
import 'material-wc';

// Components are now registered and ready to use
```

```html
<md-button variant="filled">Click me</md-button>
<md-fab aria-label="Add">
  <md-icon slot="icon">add</md-icon>
</md-fab>
```

### Import specific components

```typescript
import { MdButton, MdFab, MdFabMenu } from 'material-wc';

// Or import from sub-modules for better tree-shaking
import { MdButton } from 'material-wc/buttons';
import { MdIcon } from 'material-wc/core';
```

## Available Components

### Buttons (`material-wc/buttons`)

| Component | Element | Description |
|-----------|---------|-------------|
| `MdButton` | `<md-button>` | Standard button with variants: elevated, filled, filled-tonal, outlined, text |
| `MdIconButton` | `<md-icon-button>` | Icon-only button with variants: standard, filled, filled-tonal, outlined |
| `MdFab` | `<md-fab>` | Floating Action Button |
| `MdFabMenu` | `<md-fab-menu>` | FAB with expandable menu (2-6 items) |
| `MdFabMenuItem` | `<md-fab-menu-item>` | Menu item for FAB Menu |
| `MdSplitButton` | `<md-split-button>` | Button with dropdown action |
| `MdButtonGroup` | `<md-button-group>` | Group of related buttons |

### Core (`material-wc/core`)

| Component | Element | Description |
|-----------|---------|-------------|
| `MdIcon` | `<md-icon>` | Material Symbols icon |
| `MdElement` | - | Base class for all components |
| `adoptStyles` | - | Utility for adopting CSS styles |

## Theming & Customization

All components use CSS Custom Properties (CSS Variables) for styling. You can customize the appearance by overriding these variables in your CSS.

### Quick Start: Custom Theme

Create a CSS file or add styles to your app:

```css
:root {
  /* Primary color - used for filled buttons, FABs, etc. */
  --color-primary: #1976d2;
  --color-on-primary: #ffffff;
  --color-primary-container: #bbdefb;
  --color-on-primary-container: #004ba0;

  /* Secondary color - used for tonal buttons, selected states */
  --color-secondary: #ff9800;
  --color-on-secondary: #ffffff;
  --color-secondary-container: #ffe0b2;
  --color-on-secondary-container: #e65100;

  /* Tertiary color - accent color */
  --color-tertiary: #4caf50;
  --color-on-tertiary: #ffffff;
  --color-tertiary-container: #c8e6c9;
  --color-on-tertiary-container: #1b5e20;
}
```

### Available CSS Variables

#### Colors

| Variable | Default | Description |
|----------|---------|-------------|
| `--color-primary` | `#6750a4` | Primary brand color |
| `--color-on-primary` | `#ffffff` | Text/icon color on primary |
| `--color-primary-container` | `#eaddff` | Primary container background |
| `--color-on-primary-container` | `#21005d` | Text on primary container |
| `--color-secondary` | `#625b71` | Secondary color |
| `--color-on-secondary` | `#ffffff` | Text on secondary |
| `--color-secondary-container` | `#e8def8` | Secondary container background |
| `--color-on-secondary-container` | `#1d192b` | Text on secondary container |
| `--color-tertiary` | `#7d5260` | Tertiary/accent color |
| `--color-on-tertiary` | `#ffffff` | Text on tertiary |
| `--color-tertiary-container` | `#ffd8e4` | Tertiary container background |
| `--color-on-tertiary-container` | `#31111d` | Text on tertiary container |
| `--color-surface` | `#fffbfe` | Background surface color |
| `--color-on-surface` | `#1c1b1f` | Text on surface |
| `--color-surface-variant` | `#e7e0ec` | Variant surface color |
| `--color-on-surface-variant` | `#49454f` | Text on surface variant |
| `--color-outline` | `#79747e` | Border/outline color |
| `--color-outline-variant` | `#cac4d0` | Subtle outline color |
| `--color-error` | `#b3261e` | Error state color |
| `--color-on-error` | `#ffffff` | Text on error |

#### Surface Containers

```css
:root {
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-low: #f7f2fa;
  --color-surface-container: #f3edf7;
  --color-surface-container-high: #ece6f0;
  --color-surface-container-highest: #e6e0e9;
}
```

#### Elevation (Shadows)

```css
:root {
  --shadow-elevation-1: 0 1px 2px rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15);
  --shadow-elevation-2: 0 1px 2px rgba(0,0,0,0.3), 0 2px 6px 2px rgba(0,0,0,0.15);
  --shadow-elevation-3: 0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.3);
  --shadow-elevation-4: 0 6px 10px 4px rgba(0,0,0,0.15), 0 2px 3px rgba(0,0,0,0.3);
  --shadow-elevation-5: 0 8px 12px 6px rgba(0,0,0,0.15), 0 4px 4px rgba(0,0,0,0.3);
}
```

#### Shape (Border Radius)

```css
:root {
  --radius-none: 0;
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 28px;
  --radius-full: 9999px;  /* Pill shape */
}
```

#### Typography

```css
:root {
  --font-family-plain: 'Roboto', sans-serif;
  --font-family-brand: 'Roboto', sans-serif;
}
```

#### Motion (Animation)

```css
:root {
  /* Durations */
  --duration-short-1: 50ms;
  --duration-short-2: 100ms;
  --duration-short-3: 150ms;
  --duration-short-4: 200ms;
  --duration-medium-1: 250ms;
  --duration-medium-2: 300ms;
  --duration-medium-3: 350ms;
  --duration-medium-4: 400ms;
  --duration-long-1: 450ms;
  --duration-long-2: 500ms;

  /* Easing curves */
  --easing-standard: cubic-bezier(0.2, 0, 0, 1);
  --easing-standard-decelerate: cubic-bezier(0, 0, 0, 1);
  --easing-standard-accelerate: cubic-bezier(0.3, 0, 1, 1);
  --easing-emphasized: cubic-bezier(0.2, 0, 0, 1);
  --easing-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);
  --easing-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);
}
```

#### State Layer Opacity

```css
:root {
  --state-hover-opacity: 0.08;
  --state-focus-opacity: 0.12;
  --state-pressed-opacity: 0.12;
  --state-dragged-opacity: 0.16;
}
```

### Example: Dark Theme

```css
:root.dark,
[data-theme="dark"] {
  /* Dark mode colors */
  --color-primary: #d0bcff;
  --color-on-primary: #381e72;
  --color-primary-container: #4f378b;
  --color-on-primary-container: #eaddff;

  --color-secondary: #ccc2dc;
  --color-on-secondary: #332d41;
  --color-secondary-container: #4a4458;
  --color-on-secondary-container: #e8def8;

  --color-surface: #1c1b1f;
  --color-on-surface: #e6e1e5;
  --color-surface-variant: #49454f;
  --color-on-surface-variant: #cac4d0;

  --color-outline: #938f99;
  --color-outline-variant: #49454f;

  --color-surface-container-lowest: #0f0d13;
  --color-surface-container-low: #1d1b20;
  --color-surface-container: #211f26;
  --color-surface-container-high: #2b2930;
  --color-surface-container-highest: #36343b;
}
```

### Example: Custom Brand Colors

```css
/* Blue brand theme */
:root {
  --color-primary: #0066cc;
  --color-on-primary: #ffffff;
  --color-primary-container: #d1e4ff;
  --color-on-primary-container: #001d36;
}

/* Green brand theme */
:root.green-theme {
  --color-primary: #2e7d32;
  --color-on-primary: #ffffff;
  --color-primary-container: #a5d6a7;
  --color-on-primary-container: #1b5e20;
}
```

### Example: Less Rounded Corners

```css
:root {
  /* Make buttons more rectangular */
  --radius-full: 8px;
  --radius-xl: 12px;
  --radius-lg: 8px;
}
```

### Example: Custom Font

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

:root {
  --font-family-plain: 'Inter', system-ui, sans-serif;
  --font-family-brand: 'Inter', system-ui, sans-serif;
}
```

## Examples

### Button Variants

```html
<md-button variant="elevated">Elevated</md-button>
<md-button variant="filled">Filled</md-button>
<md-button variant="filled-tonal">Tonal</md-button>
<md-button variant="outlined">Outlined</md-button>
<md-button variant="text">Text</md-button>
```

### FAB Menu

```html
<md-fab-menu aria-label="Create">
  <md-fab-menu-item value="photo" label="Photo">
    <md-icon>photo_camera</md-icon>
  </md-fab-menu-item>
  <md-fab-menu-item value="video" label="Video">
    <md-icon>videocam</md-icon>
  </md-fab-menu-item>
</md-fab-menu>
```

### Event Handling

```typescript
const fabMenu = document.querySelector('md-fab-menu');

fabMenu.addEventListener('md-item-click', (event) => {
  const { value, label } = event.detail;
  console.log(`Selected: ${label} (${value})`);
});
```

## Browser Support

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+

## Requirements

- `lit` ^3.2.0 (peer dependency)

## Documentation

For detailed documentation and live examples, visit our [Storybook](https://anthropics.github.io/ai-web-components/).

## License

MIT
