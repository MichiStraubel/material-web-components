# Komponenten-Spezifikationen

## md-button

**Package:** `@material-wc/buttons`
**MD3 Spec:** https://m3.material.io/components/buttons/specs

| Property | Type | Default | Beschreibung |
|----------|------|---------|--------------|
| `variant` | `'filled' \| 'outlined' \| 'text' \| 'elevated' \| 'tonal'` | `'filled'` | Visueller Stil |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button-Größe |
| `disabled` | `boolean` | `false` | Deaktiviert |
| `fullWidth` | `boolean` | `false` | Volle Breite |
| `iconPosition` | `'start' \| 'end'` | `'start'` | Icon-Position |
| `href` | `string` | - | Link-Modus (rendert als `<a>`) |
| `target` | `'_blank' \| '_self' \| '_parent' \| '_top'` | - | Link-Target |

**Slots:**
- Default: Button-Label
- `icon`: Icon-Slot

**Events:**
- `md-click`: Fired on click (detail: `{ originalEvent: MouseEvent }`)

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
