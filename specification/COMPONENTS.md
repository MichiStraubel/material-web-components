# Komponenten-Spezifikationen

## md-button

**Package:** `@material-wc/buttons`
**MD3 Spec:** https://m3.material.io/components/buttons/specs

Material Design 3 Button mit zwei Modi:
- **Default Mode:** Standard-Button mit verschiedenen Varianten
- **Toggle Mode:** Für Verwendung in Button Groups (mit `toggle` Attribut)

| Property | Type | Default | Beschreibung |
|----------|------|---------|--------------|
| `variant` | `'filled' \| 'outlined' \| 'text' \| 'elevated' \| 'tonal'` | `'filled'` | Visueller Stil (nur im Default-Modus) |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button-Größe (Default-Modus) |
| `disabled` | `boolean` | `false` | Deaktiviert |
| `fullWidth` | `boolean` | `false` | Volle Breite |
| `iconPosition` | `'start' \| 'end'` | `'start'` | Icon-Position |
| `href` | `string` | - | Link-Modus (rendert als `<a>`) |
| `target` | `'_blank' \| '_self' \| '_parent' \| '_top'` | - | Link-Target |
| `toggle` | `boolean` | `false` | Toggle-Modus für Button Groups |
| `selected` | `boolean` | `false` | Ausgewählt (bei toggle) |
| `value` | `string` | `''` | Wert für Toggle-Buttons in Groups |

**Slots:**
- Default: Button-Label
- `icon`: Icon-Slot

**Events:**
- `md-click`: Fired on click (detail: `{ originalEvent: MouseEvent }`)
- `md-toggle-click`: Fired bei Toggle-Buttons (detail: `{ value: string, selected: boolean, originalEvent: MouseEvent }`)

**Beispiel Default-Modus:**
```html
<md-button variant="filled">Click me</md-button>
<md-button variant="outlined">
  <md-icon slot="icon">add</md-icon>
  Add Item
</md-button>
```

**Beispiel Toggle-Modus (in Button Group):**
```html
<md-button-group>
  <md-button toggle value="day" selected>Day</md-button>
  <md-button toggle value="week">Week</md-button>
  <md-button toggle value="month">Month</md-button>
</md-button-group>
```

---

## md-icon-button

**Package:** `@material-wc/buttons`
**MD3 Spec:** https://m3.material.io/components/icon-buttons/specs

| Property | Type | Default | Beschreibung |
|----------|------|---------|--------------|
| `variant` | `'standard' \| 'filled' \| 'tonal' \| 'outlined'` | `'standard'` | Visueller Stil |
| `size` | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | `'small'` | Container-Größe (MD3 Expressive) |
| `shape` | `'round' \| 'square'` | `'round'` | Form (MD3 Expressive) |
| `width` | `'narrow' \| 'default' \| 'wide'` | `'default'` | Breiten-Variante (MD3 Expressive) |
| `disabled` | `boolean` | `false` | Deaktiviert |
| `toggle` | `boolean` | `false` | Toggle-Modus aktivieren |
| `selected` | `boolean` | `false` | Ausgewählt (bei toggle) |
| `href` | `string` | - | Link-Modus |
| `target` | `string` | - | Link-Target |
| `aria-label` | `string` | - | Accessible Label (required) |

**MD3 Expressive Größen:**
- XSmall: 32dp Container
- Small: 36dp Container (default)
- Medium: 40dp Container
- Large: 48dp Container
- XLarge: 56dp Container
- Icon: immer 24dp

**Slots:**
- Default: Icon (unselected state)
- `selected`: Icon für selected state (bei toggle)

**Events:**
- `md-click`: Fired on click
- `md-toggle`: Fired when toggle state changes (detail: `{ selected: boolean }`)

---

## md-fab

**Package:** `@material-wc/buttons`
**MD3 Spec:** https://m3.material.io/components/floating-action-button/specs

| Property | Type | Default | Beschreibung |
|----------|------|---------|--------------|
| `variant` | `'surface' \| 'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Farb-Variante |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | FAB-Größe |
| `disabled` | `boolean` | `false` | Deaktiviert |
| `label` | `string` | - | Extended FAB Label |
| `lowered` | `boolean` | `false` | Reduzierte Elevation |

**Größen:**
- Small: 40dp
- Medium: 56dp (default)
- Large: 96dp

**Slots:**
- Default: Icon

**Events:**
- `md-click`: Fired on click

---

## md-icon

**Package:** `@material-wc/core`

| Property | Type | Default | Beschreibung |
|----------|------|---------|--------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Icon-Größe |

**Größen:**
- Small: 20dp
- Medium: 24dp (default)
- Large: 40dp

**Slots:**
- Default: Icon-Content (Font-Icon oder SVG)

---

## md-button-group

**Package:** `@material-wc/buttons`
**MD3 Spec:** https://m3.material.io/components/button-groups/specs

Container-Komponente für Connected Button Groups (MD3 Expressive).

| Property | Type | Default | Beschreibung |
|----------|------|---------|--------------|
| `selection-mode` | `'single' \| 'multi'` | `'single'` | Auswahlmodus (Radio oder Checkbox) |
| `size` | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | `'medium'` | Größe aller Buttons (MD3 Expressive) |
| `disabled` | `boolean` | `false` | Alle Buttons deaktiviert |
| `aria-label` | `string` | - | Accessible Label für die Gruppe |

**MD3 Expressive Größen:**
- XSmall: 32dp Höhe
- Small: 36dp Höhe
- Medium: 40dp Höhe (default)
- Large: 48dp Höhe
- XLarge: 56dp Höhe

**MD3 Expressive Features:**
- Connected Button Shapes: Leading/Middle/Trailing Positionen
- Selected Buttons werden immer fully rounded
- 4dp Spacing zwischen Buttons
- Border-Radius skaliert mit Größe (halbe Höhe für fully rounded)

**Slots:**
- Default: `md-button` Kinder mit `toggle` Attribut

**Events:**
- `md-change`: Fired bei Auswahländerung (detail: `{ selected: string[], previousSelected: string[] }`)

**Accessibility:**
- Single-select: `role="radiogroup"` mit `role="radio"` Kindern
- Multi-select: `role="group"` mit `role="checkbox"` Kindern
- Keyboard: Arrow Keys, Home/End, Space/Enter

**Beispiel Single-Select:**
```html
<md-button-group selection-mode="single" aria-label="View options">
  <md-button toggle value="day" selected>Day</md-button>
  <md-button toggle value="week">Week</md-button>
  <md-button toggle value="month">Month</md-button>
</md-button-group>
```

**Beispiel Multi-Select mit Icons:**
```html
<md-button-group selection-mode="multi" aria-label="Text formatting">
  <md-button toggle value="bold" aria-label="Bold">
    <md-icon slot="icon">format_bold</md-icon>
  </md-button>
  <md-button toggle value="italic" aria-label="Italic">
    <md-icon slot="icon">format_italic</md-icon>
  </md-button>
</md-button-group>
```

---

## md-toggle-button (Deprecated)

> **Deprecated:** Verwende stattdessen `md-button` mit `toggle` Attribut.
>
> ```html
> <!-- Alt (deprecated) -->
> <md-toggle-button value="day">Day</md-toggle-button>
>
> <!-- Neu -->
> <md-button toggle value="day">Day</md-button>
> ```

**Package:** `@material-wc/buttons`

---

## md-segmented-button-set (Deprecated)

> **Deprecated:** Verwende stattdessen `md-button-group`.
> Segmented Buttons wurden in MD3 Expressive durch Connected Button Groups ersetzt.

**Package:** `@material-wc/buttons`

---

## md-segmented-button (Deprecated)

> **Deprecated:** Verwende stattdessen `md-button` mit `toggle` Attribut.
> Segmented Buttons wurden in MD3 Expressive durch Connected Button Groups ersetzt.
