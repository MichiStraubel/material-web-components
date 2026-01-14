# Komponenten-Spezifikationen

> **Hinweis:** Dies ist eine Kurzreferenz. Detaillierte MD3-Spezifikationen (Tokens, Dimensionen, Animationen) befinden sich in den jeweiligen Package-SPEC.md Dateien.

---

## Buttons (`@material-wc/buttons`)

> **Detaillierte Specs:** [packages/buttons/SPEC.md](../packages/buttons/SPEC.md)

### md-button

| Property | Type | Default | Beschreibung |
|----------|------|---------|--------------|
| `variant` | `'filled' \| 'outlined' \| 'text' \| 'elevated' \| 'tonal'` | `'filled'` | Visueller Stil |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button-Größe |
| `disabled` | `boolean` | `false` | Deaktiviert |
| `toggle` | `boolean` | `false` | Toggle-Modus für Button Groups |
| `selected` | `boolean` | `false` | Ausgewählt (bei toggle) |
| `value` | `string` | `''` | Wert für Events |
| `href` | `string` | - | Link-Modus |

**Slots:** Default (Label), `icon`
**Events:** `click`

```html
<md-button variant="filled">Click me</md-button>
<md-button variant="outlined">
  <md-icon slot="icon">add</md-icon>
  Add Item
</md-button>
```

---

### md-icon-button

| Property | Type | Default | Beschreibung |
|----------|------|---------|--------------|
| `variant` | `'standard' \| 'filled' \| 'tonal' \| 'outlined'` | `'standard'` | Visueller Stil |
| `size` | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | `'small'` | Container-Größe |
| `shape` | `'round' \| 'square'` | `'round'` | Form |
| `toggle` | `boolean` | `false` | Toggle-Modus |
| `selected` | `boolean` | `false` | Ausgewählt |
| `value` | `string` | `''` | Wert für Events |
| `aria-label` | `string` | - | Accessible Label (required) |

**Slots:** Default (Icon), `selected` (Icon bei selected)
**Events:** `click`, `toggle`

```html
<md-icon-button aria-label="Settings">
  <md-icon>settings</md-icon>
</md-icon-button>
```

---

### md-fab

| Property | Type | Default | Beschreibung |
|----------|------|---------|--------------|
| `variant` | `'surface' \| 'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Farb-Variante |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Größe (40/56/96dp) |
| `label` | `string` | - | Extended FAB Label |
| `lowered` | `boolean` | `false` | Reduzierte Elevation |
| `value` | `string` | `''` | Wert für Events |

**Slots:** Default (Icon)
**Events:** `click`

```html
<md-fab aria-label="Add">
  <md-icon>add</md-icon>
</md-fab>
<md-fab label="Create" variant="tertiary">
  <md-icon>edit</md-icon>
</md-fab>
```

---

### md-button-group

| Property | Type | Default | Beschreibung |
|----------|------|---------|--------------|
| `selection-mode` | `'single' \| 'multi'` | `'single'` | Auswahlmodus |
| `size` | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | `'medium'` | Größe aller Buttons |
| `disabled` | `boolean` | `false` | Alle deaktiviert |

**Slots:** `md-button` Kinder mit `toggle`
**Events:** `change` (detail: `{ value: string[] }`)

```html
<md-button-group selection-mode="single" aria-label="View">
  <md-button toggle value="day" selected>Day</md-button>
  <md-button toggle value="week">Week</md-button>
  <md-button toggle value="month">Month</md-button>
</md-button-group>
```

---

### md-split-button

| Property | Type | Default | Beschreibung |
|----------|------|---------|--------------|
| `variant` | `'filled' \| 'tonal' \| 'outlined' \| 'elevated'` | `'filled'` | Visueller Stil |
| `size` | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | `'medium'` | Größe |
| `disabled` | `boolean` | `false` | Deaktiviert |
| `value` | `string` | `''` | Wert für primäre Aktion |
| `leading-aria-label` | `string` | - | Label für Leading Button |
| `trailing-aria-label` | `string` | `'More options'` | Label für Trailing Button |

**Slots:** Default (Label), `leading-icon`, `trailing-icon`, `menu`
**Events:** `click` (native), `open`, `close`, `change` (detail: `{ value }`)

```html
<md-split-button value="save">
  <span slot="leading-icon" class="material-symbols-outlined">save</span>
  Save
  <button slot="menu" role="menuitem" value="save-as">Save As...</button>
  <button slot="menu" role="menuitem" value="save-copy">Save a Copy</button>
</md-split-button>
```

---

## Text Fields (`@material-wc/textfields`)

> **Detaillierte Specs:** [packages/textfields/SPEC.md](../packages/textfields/SPEC.md)

### md-filled-text-field

| Property | Type | Default | Beschreibung |
|----------|------|---------|--------------|
| `value` | `string` | `''` | Aktueller Wert |
| `label` | `string` | `''` | Floating Label |
| `placeholder` | `string` | `''` | Placeholder-Text |
| `type` | `string` | `'text'` | Input-Typ (text, email, password, etc.) |
| `disabled` | `boolean` | `false` | Deaktiviert |
| `required` | `boolean` | `false` | Pflichtfeld |
| `error` | `boolean` | `false` | Error-Zustand |
| `error-text` | `string` | `''` | Fehlermeldung |
| `supporting-text` | `string` | `''` | Hilfetext |
| `prefix-text` | `string` | `''` | Text vor dem Input |
| `suffix-text` | `string` | `''` | Text nach dem Input |
| `maxlength` | `number` | - | Max. Zeichenanzahl |

**Slots:** `leading-icon`, `trailing-icon`
**Events:** `input`, `change`, `focus`, `blur` (alle native)

```html
<md-filled-text-field label="Name" required></md-filled-text-field>
<md-filled-text-field
  label="Email"
  type="email"
  supporting-text="We'll never share your email"
>
  <md-icon slot="leading-icon">email</md-icon>
</md-filled-text-field>
```

---

### md-outlined-text-field

Identische API wie `md-filled-text-field`, aber mit Outline-Styling statt gefülltem Hintergrund.

```html
<md-outlined-text-field label="Username"></md-outlined-text-field>
<md-outlined-text-field
  label="Password"
  type="password"
  error
  error-text="Password must be at least 8 characters"
></md-outlined-text-field>
```

---

## Core (`@material-wc/core`)

### md-icon

| Property | Type | Default | Beschreibung |
|----------|------|---------|--------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Größe (20/24/40dp) |

**Slots:** Default (Icon-Content)

```html
<md-icon>settings</md-icon>
<md-icon size="large">home</md-icon>
```

---

## Deprecated Components

### md-toggle-button

> **Deprecated:** Verwende `md-button` mit `toggle` Attribut.

### md-segmented-button-set / md-segmented-button

> **Deprecated:** Verwende `md-button-group` mit `md-button toggle`.

---

## Event-Konventionen (MD3)

Per MD3-Konvention verwenden wir:

| Event-Typ | Beispiele | Payload |
|-----------|-----------|---------|
| **Native** | `click`, `input`, `change` | Standard (value via `element.value`) |
| **Lifecycle** | `open`, `close` | Kein Payload |
| **Selection** | `change` (bei Menüs) | `{ value: string }` |

Keine erweiterten Payloads für Standard-Aktionen. Werte sind über `element.value` abrufbar.
