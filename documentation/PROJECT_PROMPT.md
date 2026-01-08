# Material Web Components - Projekt-Prompt

## Projektvision

Entwickle eine moderne Web Component Bibliothek basierend auf **Material Design 3**, die als wiederverwendbare, framework-agnostische UI-Komponenten in jedem Web-Projekt eingesetzt werden kann.

---

## Technologie-Stack

| Technologie | Version | Zweck |
|-------------|---------|-------|
| **Yarn** | 4 (Berry) | Package Manager & Workspaces |
| **Vite** | Latest | Build-Tool & Dev-Server |
| **Lit** | Latest | Web Components Framework |
| **Tailwind CSS** | v4 | Styling (Build-Time) |
| **TypeScript** | Latest | Typsicherheit |
| **Vitest** | Latest | Unit Testing |
| **Testing Library** | Latest | Komponenten-Tests |
| **Storybook** | Latest | Dokumentation & Playground |

---

## Monorepo-Struktur

```
@material-wc/
├── .yarn/                    # Yarn Berry Installation
├── .storybook/               # Storybook Konfiguration
├── packages/
│   ├── core/                 # @material-wc/core
│   │   ├── src/
│   │   │   ├── base/         # Base-Klassen für alle Komponenten
│   │   │   ├── styles/       # Style-Manager, Adopted StyleSheets
│   │   │   ├── tokens/       # MD3 Design Tokens als CSS Custom Properties
│   │   │   └── utils/        # Shared Utilities
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   ├── buttons/              # @material-wc/buttons
│   │   ├── src/
│   │   │   ├── button/
│   │   │   │   ├── button.ts
│   │   │   │   ├── button.src.css    # Tailwind @apply Source
│   │   │   │   ├── button.css        # Generiertes CSS (Build-Artefakt)
│   │   │   │   └── button.test.ts
│   │   │   ├── icon-button/
│   │   │   └── fab/
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   ├── inputs/               # @material-wc/inputs
│   │   ├── src/
│   │   │   ├── text-field/
│   │   │   ├── checkbox/
│   │   │   ├── radio/
│   │   │   ├── switch/
│   │   │   └── slider/
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   ├── surfaces/             # @material-wc/surfaces
│   │   ├── src/
│   │   │   ├── card/
│   │   │   ├── dialog/
│   │   │   ├── bottom-sheet/
│   │   │   └── side-sheet/
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   ├── navigation/           # @material-wc/navigation
│   │   ├── src/
│   │   │   ├── tabs/
│   │   │   ├── navigation-bar/
│   │   │   ├── navigation-drawer/
│   │   │   └── menu/
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   ├── feedback/             # @material-wc/feedback
│   │   ├── src/
│   │   │   ├── snackbar/
│   │   │   ├── progress/
│   │   │   └── tooltip/
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   └── layout/               # @material-wc/layout
│       ├── src/
│       │   ├── divider/
│       │   └── grid/
│       ├── package.json
│       └── vite.config.ts
│
├── apps/
│   └── storybook/                 # Dokumentations-App (Storybook)
│
├── tools/
│   └── css-builder/          # Tailwind CSS Build-Tool
│
├── package.json              # Root Package
├── yarn.lock
├── tsconfig.json             # Base TypeScript Config
├── tailwind.config.ts        # Tailwind Konfiguration
└── vite.config.base.ts       # Shared Vite Config
```

---

## Architektur-Richtlinien

### Shadow DOM

Alle Komponenten verwenden **closed Shadow DOM** für maximale Kapselung:

```typescript
export class MdButton extends LitElement {
  static shadowRootOptions: ShadowRootInit = {
    mode: import.meta.env.MODE === 'test' ? 'open' : 'closed',
    delegatesFocus: true
  };
}
```

- **Production:** `mode: 'closed'` - Kein externer Zugriff auf Shadow DOM
- **Testing:** `mode: 'open'` - Zugriff für Testing Library via Test-Mode Flag

### Styling-Workflow

#### 1. Source CSS mit Tailwind `@apply`

```css
/* button.src.css */
.md-button {
  @apply px-4 py-2 rounded-md font-medium;
  @apply bg-primary-500 text-on-primary;
  @apply hover:bg-primary-600 active:bg-primary-700;
  @apply focus-visible:outline-2 focus-visible:outline-offset-2;
  @apply transition-colors duration-200;
}

.md-button--outlined {
  @apply bg-transparent border border-outline;
  @apply text-primary-500 hover:bg-primary-50;
}
```

#### 2. Build generiert reines CSS

```css
/* button.css (generiert) */
.md-button {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  transition: background-color 200ms;
}

.md-button:hover {
  background-color: var(--md-sys-color-primary-hover);
}

/* ... */
```

#### 3. Komponente importiert generiertes CSS

```typescript
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { adoptStyles } from '@material-wc/core';
import buttonStyles from './button.css?inline';

@customElement('md-button')
export class MdButton extends LitElement {
  static styles = adoptStyles(buttonStyles);

  @property({ type: String }) variant: 'filled' | 'outlined' | 'text' = 'filled';

  render() {
    return html`
      <button class="md-button md-button--${this.variant}">
        <slot></slot>
      </button>
    `;
  }
}
```

### Adopted StyleSheets

Der `@material-wc/core` Package stellt einen `StyleManager` bereit:

```typescript
// packages/core/src/styles/style-manager.ts
export class StyleManager {
  private static styleSheets = new Map<string, CSSStyleSheet>();

  static getStyleSheet(css: string, key: string): CSSStyleSheet {
    if (!this.styleSheets.has(key)) {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(css);
      this.styleSheets.set(key, sheet);
    }
    return this.styleSheets.get(key)!;
  }
}

export function adoptStyles(css: string): CSSStyleSheet {
  return StyleManager.getStyleSheet(css, css.slice(0, 100));
}
```

---

## Material Design 3 Tokens

### CSS Custom Properties

```css
/* packages/core/src/tokens/tokens.css */
:root {
  /* Primary */
  --md-sys-color-primary: #6750a4;
  --md-sys-color-on-primary: #ffffff;
  --md-sys-color-primary-container: #eaddff;
  --md-sys-color-on-primary-container: #21005d;

  /* Secondary */
  --md-sys-color-secondary: #625b71;
  --md-sys-color-on-secondary: #ffffff;

  /* Tertiary */
  --md-sys-color-tertiary: #7d5260;
  --md-sys-color-on-tertiary: #ffffff;

  /* Error */
  --md-sys-color-error: #b3261e;
  --md-sys-color-on-error: #ffffff;

  /* Surface */
  --md-sys-color-surface: #fffbfe;
  --md-sys-color-on-surface: #1c1b1f;
  --md-sys-color-surface-variant: #e7e0ec;

  /* Outline */
  --md-sys-color-outline: #79747e;
  --md-sys-color-outline-variant: #cac4d0;

  /* Typography */
  --md-sys-typescale-display-large: 400 57px/64px 'Roboto', sans-serif;
  --md-sys-typescale-headline-large: 400 32px/40px 'Roboto', sans-serif;
  --md-sys-typescale-title-large: 400 22px/28px 'Roboto', sans-serif;
  --md-sys-typescale-body-large: 400 16px/24px 'Roboto', sans-serif;
  --md-sys-typescale-label-large: 500 14px/20px 'Roboto', sans-serif;

  /* Elevation */
  --md-sys-elevation-1: 0 1px 2px rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15);
  --md-sys-elevation-2: 0 1px 2px rgba(0,0,0,0.3), 0 2px 6px 2px rgba(0,0,0,0.15);
  --md-sys-elevation-3: 0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.3);

  /* Shape */
  --md-sys-shape-corner-none: 0;
  --md-sys-shape-corner-extra-small: 4px;
  --md-sys-shape-corner-small: 8px;
  --md-sys-shape-corner-medium: 12px;
  --md-sys-shape-corner-large: 16px;
  --md-sys-shape-corner-full: 9999px;

  /* Motion */
  --md-sys-motion-duration-short: 100ms;
  --md-sys-motion-duration-medium: 300ms;
  --md-sys-motion-duration-long: 500ms;
  --md-sys-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1);
}
```

### Tailwind Integration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: ['./packages/*/src/**/*.{ts,css}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--md-sys-color-primary)',
          container: 'var(--md-sys-color-primary-container)',
        },
        'on-primary': {
          DEFAULT: 'var(--md-sys-color-on-primary)',
          container: 'var(--md-sys-color-on-primary-container)',
        },
        secondary: {
          DEFAULT: 'var(--md-sys-color-secondary)',
          container: 'var(--md-sys-color-secondary-container)',
        },
        surface: {
          DEFAULT: 'var(--md-sys-color-surface)',
          variant: 'var(--md-sys-color-surface-variant)',
        },
        outline: {
          DEFAULT: 'var(--md-sys-color-outline)',
          variant: 'var(--md-sys-color-outline-variant)',
        },
        error: {
          DEFAULT: 'var(--md-sys-color-error)',
        },
      },
      borderRadius: {
        'md-none': 'var(--md-sys-shape-corner-none)',
        'md-xs': 'var(--md-sys-shape-corner-extra-small)',
        'md-sm': 'var(--md-sys-shape-corner-small)',
        'md-md': 'var(--md-sys-shape-corner-medium)',
        'md-lg': 'var(--md-sys-shape-corner-large)',
        'md-full': 'var(--md-sys-shape-corner-full)',
      },
      boxShadow: {
        'md-1': 'var(--md-sys-elevation-1)',
        'md-2': 'var(--md-sys-elevation-2)',
        'md-3': 'var(--md-sys-elevation-3)',
      },
      transitionDuration: {
        'md-short': 'var(--md-sys-motion-duration-short)',
        'md-medium': 'var(--md-sys-motion-duration-medium)',
        'md-long': 'var(--md-sys-motion-duration-long)',
      },
    },
  },
  plugins: [],
} satisfies Config;
```

---

## Komponenten-Basis-Klasse

```typescript
// packages/core/src/base/md-element.ts
import { LitElement } from 'lit';

export abstract class MdElement extends LitElement {
  static shadowRootOptions: ShadowRootInit = {
    mode: import.meta.env.MODE === 'test' ? 'open' : 'closed',
    delegatesFocus: true,
  };

  /** Emits a custom event with standard options */
  protected emit<T>(name: string, detail?: T): boolean {
    const event = new CustomEvent(name, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail,
    });
    return this.dispatchEvent(event);
  }
}
```

---

## Naming Conventions

### Custom Elements

- Prefix: `md-`
- Kebab-case: `md-button`, `md-text-field`, `md-navigation-bar`

### CSS Klassen

- BEM-artig: `md-button`, `md-button--outlined`, `md-button__icon`

### TypeScript

- Klassen: PascalCase mit `Md`-Prefix: `MdButton`, `MdTextField`
- Events: kebab-case: `md-click`, `md-change`, `md-open`

### Packages

- Scope: `@material-wc/`
- Namen: `core`, `buttons`, `inputs`, `surfaces`, `navigation`, `feedback`, `layout`

---

## Build-Pipeline

### CSS Build (Tailwind → Pure CSS)

```typescript
// tools/css-builder/build.ts
import { glob } from 'glob';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

async function buildComponentCSS() {
  const sourceFiles = await glob('packages/*/src/**/*.src.css');

  for (const file of sourceFiles) {
    const css = await Bun.file(file).text();
    const result = await postcss([
      tailwindcss,
      autoprefixer,
      cssnano({ preset: 'default' }),
    ]).process(css, { from: file });

    const outFile = file.replace('.src.css', '.css');
    await Bun.write(outFile, result.css);
  }
}
```

### Package Build (Vite)

```typescript
// vite.config.base.ts
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['lit', /^@material-wc\//],
    },
  },
  plugins: [dts()],
});
```

---

## Testing-Setup

### Vitest Konfiguration

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setup.ts'],
    include: ['packages/*/src/**/*.test.ts'],
  },
  define: {
    'import.meta.env.MODE': JSON.stringify('test'),
  },
});
```

### Test-Setup

```typescript
// test/setup.ts
import '@testing-library/jest-dom';

// Polyfill für Adopted StyleSheets in jsdom
if (!document.adoptedStyleSheets) {
  Object.defineProperty(document, 'adoptedStyleSheets', {
    value: [],
    writable: true,
  });
}
```

### Beispiel-Test

```typescript
// packages/buttons/src/button/button.test.ts
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/dom';
import './button';

describe('MdButton', () => {
  it('renders with slot content', async () => {
    const container = document.createElement('div');
    container.innerHTML = '<md-button>Click me</md-button>';
    document.body.appendChild(container);

    const button = container.querySelector('md-button')!;
    await button.updateComplete;

    expect(button.shadowRoot).toBeTruthy();
    expect(button.shadowRoot!.querySelector('button')).toBeTruthy();
  });

  it('emits md-click event on click', async () => {
    const container = document.createElement('div');
    container.innerHTML = '<md-button>Click me</md-button>';
    document.body.appendChild(container);

    const button = container.querySelector('md-button')!;
    await button.updateComplete;

    let clicked = false;
    button.addEventListener('md-click', () => { clicked = true; });

    const innerButton = button.shadowRoot!.querySelector('button')!;
    fireEvent.click(innerButton);

    expect(clicked).toBe(true);
  });
});
```

---

## Implementierungsreihenfolge

### Phase 1: Foundation

1. Monorepo-Setup mit Yarn 4 Workspaces
2. TypeScript & Vite Base-Konfiguration
3. Tailwind v4 Setup mit MD3 Tokens
4. CSS Build-Pipeline (Tailwind → Pure CSS)
5. `@material-wc/core` Package
   - `MdElement` Base-Klasse
   - `StyleManager` für Adopted StyleSheets
   - MD3 Design Tokens

### Phase 2: Basis-Komponenten

6. `@material-wc/buttons`
   - `md-button` (filled, outlined, text, elevated, tonal)
   - `md-icon-button`
   - `md-fab`
7. `@material-wc/inputs`
   - `md-text-field`
   - `md-checkbox`
   - `md-radio`
   - `md-switch`

### Phase 3: Komplexe Komponenten

8. `@material-wc/surfaces`
   - `md-card`
   - `md-dialog`
9. `@material-wc/navigation`
   - `md-tabs`
   - `md-menu`
10. `@material-wc/feedback`
    - `md-snackbar`
    - `md-progress` (linear, circular)

### Phase 4: Dokumentation & Polish

11. Storybook Setup & Stories für alle Komponenten
12. Accessibility-Audit (ARIA, Keyboard Navigation)
13. Performance-Optimierung
14. NPM Publishing Workflow

---

## Yarn 4 Workspace-Konfiguration

```yaml
# .yarnrc.yml
nodeLinker: node-modules
enableGlobalCache: true

plugins:
  - path: .yarn/plugins/@yarnpkg/plugin-workspace-tools.cjs
    spec: "@yarnpkg/plugin-workspace-tools"
```

```json
// package.json (root)
{
  "name": "@material-wc/root",
  "private": true,
  "workspaces": [
    "packages/*",
    "apps/*",
    "tools/*"
  ],
  "scripts": {
    "build": "yarn workspaces foreach -A --topological run build",
    "build:css": "node tools/css-builder/build.js",
    "test": "vitest",
    "storybook": "storybook dev -p 6006",
    "lint": "eslint packages/*/src/**/*.ts"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "vite": "^5.2.0",
    "vitest": "^1.4.0",
    "lit": "^3.1.0",
    "tailwindcss": "^4.0.0",
    "storybook": "^8.0.0",
    "@testing-library/dom": "^10.0.0"
  }
}
```

---

## Nutzung der Bibliothek

### Installation

```bash
# Einzelne Packages
yarn add @material-wc/core @material-wc/buttons

# Oder alle Komponenten
yarn add @material-wc/all
```

### Import

```typescript
// Einzelne Komponenten
import '@material-wc/buttons/button';
import '@material-wc/inputs/text-field';

// In HTML
<md-button variant="filled">Click me</md-button>
<md-text-field label="Email" type="email"></md-text-field>
```

### Theming

```css
/* Custom Theme über CSS Custom Properties */
:root {
  --md-sys-color-primary: #006a6a;
  --md-sys-color-on-primary: #ffffff;
  --md-sys-color-primary-container: #6ff7f6;
  /* ... weitere Anpassungen */
}
```

---

## Wichtige Hinweise für die Implementierung

1. **Closed Shadow DOM:** Immer `mode: 'closed'` verwenden, außer im Test-Mode
2. **Keine Tailwind-Klassen im Output:** Nur semantische CSS-Klassen im finalen HTML
3. **Adopted StyleSheets:** CSS wird geshared, nicht dupliziert
4. **MD3 Compliance:** Design Tokens und Komponenten-Specs von material.io folgen
5. **Accessibility:** ARIA-Attribute und Keyboard-Navigation von Anfang an
6. **Tree-Shaking:** Jede Komponente einzeln importierbar
