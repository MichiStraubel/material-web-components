# FAB Menu

Das **FAB Menu** ist eine Material Design 3 Expressive-Komponente, die einen Floating Action Button mit einem Menü für verwandte Aktionen kombiniert. Es ersetzt das frühere "Speed Dial"-Pattern und gestapelte kleine FABs.

## Installation

```bash
npm install @material-wc/buttons
```

```javascript
import '@material-wc/buttons';
// oder spezifisch:
import { MdFabMenu, MdFabMenuItem } from '@material-wc/buttons';
```

## Grundlegende Verwendung

```html
<md-fab-menu aria-label="Create menu">
  <md-fab-menu-item value="photo" label="Photo">
    <span class="material-symbols-outlined">photo_camera</span>
  </md-fab-menu-item>
  <md-fab-menu-item value="document" label="Document">
    <span class="material-symbols-outlined">description</span>
  </md-fab-menu-item>
  <md-fab-menu-item value="note" label="Note">
    <span class="material-symbols-outlined">note_add</span>
  </md-fab-menu-item>
</md-fab-menu>
```

## MD3 Expressive Spezifikationen

Das FAB Menu folgt den Material Design 3 Expressive-Richtlinien:

| Aspekt | Spezifikation |
|--------|---------------|
| **Menü-Items** | 2-6 Items (MD3-Empfehlung) |
| **FAB-Größen** | Small (40dp), Medium (56dp), Large (96dp) |
| **Icon-Animation** | + morpht zu × beim Öffnen |
| **Touch Target** | 48dp Minimum pro Item |
| **Ausrichtung** | Start, Center, End |
| **Nach Item-Klick** | Menü schließt automatisch |

## Wann verwenden?

Das FAB Menu eignet sich besonders für:

- **Primäre Aktion mit Varianten** - z.B. "Erstellen" mit Optionen für Dokument, Foto, Notiz
- **Kontextuelle Aktionen** - Verschiedene Arten von Inhalten hinzufügen
- **Gruppierte Funktionen** - Zusammengehörige Aktionen an einem Ort

### Wann NICHT verwenden?

- **Mehr als 6 Items** - Verwende stattdessen ein Bottom Sheet oder ein vollständiges Menü
- **Unabhängige Aktionen** - Wenn die Aktionen nicht thematisch zusammengehören
- **Einzelne Aktion** - Verwende einen normalen FAB

## API

### md-fab-menu

#### Properties

| Property | Type | Default | Beschreibung |
|----------|------|---------|--------------|
| `variant` | `'surface' \| 'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Farbvariante des FAB |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Größe des FAB |
| `disabled` | `boolean` | `false` | Deaktiviert das FAB Menu |
| `lowered` | `boolean` | `false` | Reduzierte Elevation |
| `alignment` | `'start' \| 'center' \| 'end'` | `'end'` | Ausrichtung des Menüs relativ zum FAB |
| `open-label` | `string` | `'Open menu'` | Aria-Label wenn geschlossen |
| `close-label` | `string` | `'Close menu'` | Aria-Label wenn geöffnet |

#### Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| `md-open` | `{}` | Wird ausgelöst, wenn das Menü geöffnet wird |
| `md-close` | `{}` | Wird ausgelöst, wenn das Menü geschlossen wird |
| `md-item-click` | `{ value, label, element, originalEvent }` | Wird ausgelöst, wenn ein Menü-Item geklickt wird |

#### Slots

| Slot | Beschreibung |
|------|--------------|
| (default) | Slot für `md-fab-menu-item` Elemente (2-6 Items) |
| `icon` | Custom Icon für den FAB (Standard: + / × Animation) |

#### CSS Custom Properties

| Property | Default | Beschreibung |
|----------|---------|--------------|
| `--md-fab-menu-gap` | `12px` | Abstand zwischen FAB und Menü-Items |

#### Methods

| Method | Beschreibung |
|--------|--------------|
| `open()` | Öffnet das Menü |
| `close()` | Schließt das Menü |
| `toggle()` | Wechselt den Zustand des Menüs |

### md-fab-menu-item

#### Properties

| Property | Type | Default | Beschreibung |
|----------|------|---------|--------------|
| `value` | `string` | `''` | Wert, der beim Klick zurückgegeben wird |
| `label` | `string` | `''` | Label-Text (optional) |
| `disabled` | `boolean` | `false` | Deaktiviert das Item |

#### Slots

| Slot | Beschreibung |
|------|--------------|
| (default) | Icon-Inhalt |
| `label` | Alternative zum `label` Property |

## Beispiele

### Alle Varianten

```html
<md-fab-menu variant="surface">...</md-fab-menu>
<md-fab-menu variant="primary">...</md-fab-menu>
<md-fab-menu variant="secondary">...</md-fab-menu>
<md-fab-menu variant="tertiary">...</md-fab-menu>
```

### Alle Größen

```html
<md-fab-menu size="small">...</md-fab-menu>  <!-- 40dp -->
<md-fab-menu size="medium">...</md-fab-menu> <!-- 56dp -->
<md-fab-menu size="large">...</md-fab-menu>  <!-- 96dp -->
```

### Icon-Only Items

```html
<md-fab-menu>
  <md-fab-menu-item value="photo">
    <span class="material-symbols-outlined">photo_camera</span>
  </md-fab-menu-item>
  <md-fab-menu-item value="video">
    <span class="material-symbols-outlined">videocam</span>
  </md-fab-menu-item>
</md-fab-menu>
```

### Items mit Labels

```html
<md-fab-menu>
  <md-fab-menu-item value="photo" label="Take Photo">
    <span class="material-symbols-outlined">photo_camera</span>
  </md-fab-menu-item>
  <md-fab-menu-item value="video" label="Record Video">
    <span class="material-symbols-outlined">videocam</span>
  </md-fab-menu-item>
</md-fab-menu>
```

### Positionierung (typisch)

```html
<md-fab-menu
  style="position: fixed; bottom: 16px; right: 16px;"
  aria-label="Create content"
>
  ...
</md-fab-menu>
```

### Event Handling

```javascript
const fabMenu = document.querySelector('md-fab-menu');

fabMenu.addEventListener('md-open', () => {
  console.log('Menu opened');
});

fabMenu.addEventListener('md-close', () => {
  console.log('Menu closed');
});

fabMenu.addEventListener('md-item-click', (event) => {
  console.log('Item clicked:', event.detail.value, event.detail.label);
  // Das Menü schließt sich automatisch nach dem Klick (MD3-konform)
});
```

### In Lit-Komponenten

```typescript
import { LitElement, html } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import '@material-wc/buttons';

class MyComponent extends LitElement {
  private menuRef = createRef<HTMLElement>();

  firstUpdated() {
    this.menuRef.value?.addEventListener('md-item-click', this.handleItemClick);
  }

  handleItemClick = (event: Event) => {
    const { value, label } = (event as CustomEvent).detail;
    console.log(`Selected: ${label} (${value})`);
  };

  render() {
    return html`
      <md-fab-menu ${ref(this.menuRef)}>
        <md-fab-menu-item value="option1" label="Option 1">
          <span class="material-symbols-outlined">star</span>
        </md-fab-menu-item>
        <md-fab-menu-item value="option2" label="Option 2">
          <span class="material-symbols-outlined">favorite</span>
        </md-fab-menu-item>
      </md-fab-menu>
    `;
  }
}
```

## Accessibility

- Das FAB Menu verwendet `role="menu"` für den Menü-Container
- Jedes Item hat `role="menuitem"`
- Der FAB hat `aria-expanded` und `aria-haspopup="menu"`
- ESC-Taste schließt das Menü
- Klick außerhalb schließt das Menü
- Focus kehrt zum FAB zurück nach dem Schließen

## Best Practices

1. **2-6 Items**: Halte die Anzahl der Menü-Items zwischen 2 und 6
2. **Verwandte Aktionen**: Alle Items sollten thematisch zusammengehören
3. **Klare Labels**: Verwende kurze, aktionsorientierte Labels
4. **Konsistente Position**: Positioniere das FAB Menu konsistent (typisch: unten rechts)
5. **Aria-Labels**: Verwende aussagekräftige `aria-label` Attribute

## Quellen

- [Material Design 3 FAB Menu Guidelines](https://m3.material.io/components/fab-menu/guidelines)
- [Material 3 Expressive FAB Menu](https://medium.com/@renaud.mathieu/discovering-material-3-expressive-fab-menu-ecfae766a946)
- [Material 3 FAB Menus in Android](https://www.boltuix.com/2025/06/ultimate-guide-to-material-3-fab-menus.html)
