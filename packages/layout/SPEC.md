# MD3 Layout Specification

Material Design 3 Layout Components Specification based on [m3.material.io/foundations/layout](https://m3.material.io/foundations/layout/understanding-layout/overview) and [Android Canonical Layouts](https://developer.android.com/develop/ui/views/layout/canonical-layouts).

## Overview

Layout components provide responsive page structure following MD3 guidelines. They handle window size classes, navigation patterns, and canonical layouts automatically.

## Components

| Component | Element | Description |
|-----------|---------|-------------|
| App Layout | `md-app-layout` | Main application shell with adaptive navigation |
| Adaptive Nav | `md-adaptive-nav` | Responsive navigation container |
| Nav Item | `md-nav-item` | Navigation destination item |
| List-Detail | `md-list-detail` | Two-pane list and detail layout |
| Supporting Pane | `md-supporting-pane` | Primary content with supporting panel |

---

## Window Size Classes (MD3)

### Width Classes

| Class | Width | Device Coverage | Description |
|-------|-------|-----------------|-------------|
| `compact` | < 600dp | 99.96% phones portrait | Phones in portrait |
| `medium` | 600dp – 839dp | 93.73% tablets portrait | Tablets portrait, foldables |
| `expanded` | 840dp – 1199dp | 97.22% tablets landscape | Tablets landscape |
| `large` | 1200dp – 1599dp | Large tablets | Large tablet displays |
| `extra-large` | ≥ 1600dp | Desktop | Desktop & external displays |

### Height Classes

| Class | Height | Device Coverage | Description |
|-------|--------|-----------------|-------------|
| `compact` | < 480dp | 99.78% phones landscape | Phones in landscape |
| `medium` | 480dp – 899dp | 96.56% tablets landscape | Tablets landscape, phones portrait |
| `expanded` | ≥ 900dp | 94.25% tablets portrait | Tablets in portrait |

### CSS Custom Properties

```css
--md-breakpoint-compact: 600px;
--md-breakpoint-medium: 840px;
--md-breakpoint-expanded: 1200px;
--md-breakpoint-large: 1600px;
```

---

## Layout Grid (MD3)

### Columns

| Window Class | Columns |
|--------------|---------|
| Compact | 4 |
| Medium | 8 |
| Expanded | 12 |

### Margins (Body Margins)

| Window Class | Margin |
|--------------|--------|
| Compact | 16px |
| Medium | 24px |
| Expanded | 24px – 200px (flexible) |

### Gutters

| Size | Value | Use Case |
|------|-------|----------|
| Tight | 8px | Dense layouts |
| Default | 16px | Standard spacing |
| Comfortable | 24px | Spacious layouts |
| Relaxed | 32px | Large separation |

### Baseline Grid

All spacing follows an **8px baseline grid**. Valid values: 8, 16, 24, 32, 40, 48, 56, 64px.

---

## md-app-layout

Main application shell providing adaptive navigation, top app bar, and content structure.
Automatically adapts navigation pattern and content margins based on window size class.
Uses `md-adaptive-nav` internally for responsive navigation.

### Anatomy

```
┌─────────────────────────────────────────────────────┐
│ .app-layout                                         │
│ ┌─────────────────────────────────────────────────┐ │
│ │ .app-layout__main                               │ │
│ │ ┌──────────┬──────────────────────────────────┐ │ │
│ │ │          │ .app-layout__content-area        │ │ │
│ │ │ adaptive │ ┌──────────────────────────────┐ │ │ │
│ │ │   nav    │ │ top-app-bar (optional)       │ │ │ │
│ │ │          │ ├──────────────────────────────┤ │ │ │
│ │ │          │ │ content (slot: default)      │ │ │ │
│ │ │          │ │                              │ │ │ │
│ │ └──────────┴─┴──────────────────────────────┘ │ │ │
│ └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

**Note:** The Top App Bar is positioned within the content area, NOT spanning over the navigation.

### Navigation Pattern by Window Class (MD3 Expressive)

| Window Class | Navigation Type | Width | Content Margins |
|--------------|-----------------|-------|-----------------|
| Compact | Navigation Bar (bottom) | 100% (80px height) | 16px |
| Medium | Navigation Rail (collapsed) | 80px | 24px |
| Expanded | Navigation Rail (collapsed/expanded) | 80px / 280px | 24px |
| Large | Expanded Rail (default) | 280px | 32px |
| Extra-Large | Expanded Rail (always visible) | 280px | auto (centered) |

### Compact Navigation: Automatic Drawer Fallback

**Design Decision:** When the `navigation` property is used in compact mode,
the component automatically switches from a Bottom Navigation Bar to a
Modal Navigation Drawer when:

- More than **5 navigation items** exist on the top level, OR
- The navigation contains **sections** (`NavSection` entries)

**Rationale:** MD3 specifies that a Navigation Bar supports 3–5 destinations
([Navigation Bar Guidelines](https://m3.material.io/components/navigation-bar/guidelines)).
MD3 does not explicitly define what should happen when more than 5 destinations
exist in compact mode. This implementation uses a Modal Navigation Drawer as
fallback, triggered via a burger menu icon in the Top App Bar.

**Behavior:**

| Condition | Compact Navigation |
|-----------|--------------------|
| ≤5 items, no sections | Bottom Navigation Bar |
| >5 items | Top App Bar with burger menu → Modal Navigation Drawer |
| Sections present | Top App Bar with burger menu → Modal Navigation Drawer |

The Top App Bar is always visible in compact mode. The Modal Navigation Drawer
overlays the entire viewport including the Top App Bar.

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `nav-open` | `boolean` | `false` | Navigation expanded state |
| `nav-mode` | `'auto' \| 'bar' \| 'rail' \| 'expanded'` | `'auto'` | Override navigation mode |
| `selected-nav` | `string` | `''` | Currently selected navigation item value |
| `navigation` | `Navigation` | `[]` | Navigation items (data-driven). Supports `children` for hierarchical navigation. |
| `has-top-app-bar` | `boolean` | `false` | Reserve space for top app bar |
| `content-max-width` | `string` | `'none'` | Maximum content width (e.g., `'720px'`) |
| `content-padding` | `'none' \| 'compact' \| 'comfortable'` | `'comfortable'` | Internal content padding |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Main content area |
| `nav` | Navigation items (`md-nav-item` elements) |
| `nav-header` | Header content for navigation (FAB, logo) |
| `nav-footer` | Footer content for navigation |
| `top-app-bar` | Top app bar content |

### CSS Parts

| Part | Description |
|------|-------------|
| `container` | The main layout container |
| `navigation` | The adaptive navigation area |
| `content-area` | The content area wrapper |
| `content` | The main content area |
| `top-app-bar` | The top app bar area |

### Example

```html
<md-app-layout selected-nav="home">
  <md-fab slot="nav-header" size="small" variant="tertiary">
    <md-icon slot="icon">edit</md-icon>
  </md-fab>
  <md-nav-item slot="nav" value="home" label="Home">
    <md-icon slot="icon">home</md-icon>
  </md-nav-item>
  <md-nav-item slot="nav" value="search" label="Search">
    <md-icon slot="icon">search</md-icon>
  </md-nav-item>
  <main>Page content</main>
</md-app-layout>
```

---

## md-adaptive-nav

Responsive navigation container that automatically switches between navigation modes.

### Navigation Modes

| Mode | Description |
|------|-------------|
| `bar` | Bottom navigation bar (80px height) |
| `rail` | Navigation rail (80px width, icons with labels) |
| `expanded` | Expanded rail (280px width, full labels) |

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `mode` | `'auto' \| 'bar' \| 'rail' \| 'expanded'` | `'auto'` | Override mode |
| `expanded` | `boolean` | `false` | Rail expanded state |
| `modal` | `boolean` | `false` | Expanded rail as modal with scrim |
| `selected-value` | `string` | `''` | Currently selected item value |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Navigation items (`md-nav-item` elements) |
| `header` | Header content (FAB, logo) |
| `footer` | Footer content |

### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `nav-expand` | `{ expanded: boolean }` | Expansion state changed |
| `nav-select` | `{ value: string }` | Item selected |

---

## md-nav-item

Navigation destination item for use within `md-adaptive-nav` or `md-app-layout`.

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | `''` | Unique identifier |
| `label` | `string` | `''` | Label text |
| `icon` | `string` | `''` | Material icon name (convenience property) |
| `badge` | `string` | `''` | Badge text or count |
| `href` | `string` | `''` | URL to navigate to. If provided, renders as `<a>` instead of `<button>`. |
| `target` | `string` | `''` | Link target when href is provided (e.g., `'_blank'`, `'_self'`) |
| `selected` | `boolean` | `false` | Selected state |
| `disabled` | `boolean` | `false` | Disabled state |
| `mode` | `'bar' \| 'bar-horizontal' \| 'rail' \| 'expanded'` | `'rail'` | Display mode (set by parent) |

### Slots

| Slot | Description |
|------|-------------|
| `icon` | Icon element (e.g., `md-icon`, SVG). Falls back to `icon` property if not provided. |
| `selected-icon` | Icon shown when selected (optional, falls back to `icon` slot) |

### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `nav-item-click` | `{ value: string }` | Item clicked |

### Dimensions (MD3)

| Property | Bar Mode | Rail Mode | Expanded Mode |
|----------|----------|-----------|---------------|
| Width | 48-80px | 56px | 100% |
| Height | auto | auto | 56px |
| Icon | 24px | 24px | 24px |
| Indicator | 56×32px | 56×32px | full width, 56px height |
| Label | 12px | 12px | 14px |

### Content Padding Values

| Size | Value |
|------|-------|
| `none` | 0 |
| `compact` | 16px |
| `comfortable` | 24px |

### Content Max-Width Recommendations

| Content Type | Max Width |
|--------------|-----------|
| Reading (body text) | 720px (40-60 chars) |
| Dashboard | 1200px |
| Full-width | none |

### Navigation Rail Dimensions (MD3)

| Property | Value |
|----------|-------|
| Width | 80px |
| Icon Container | 56px × 32px |
| Icon Size | 24px |
| Label | Below icon, optional |
| Vertical Padding | 12px |
| Item Gap | 12px |
| FAB Position | Top, 56px from top edge |

### Navigation Drawer Dimensions (MD3)

| Property | Value |
|----------|-------|
| Width | 360px (standard) |
| Width (collapsed) | 80px (rail mode) |
| Item Height | 56px |
| Item Padding | 16px horizontal |
| Section Gap | 16px |
| Divider Inset | 16px |

### Bottom Navigation Dimensions (MD3)

| Property | Value |
|----------|-------|
| Height | 80px |
| Icon Size | 24px |
| Label | Below icon |
| Max Items | 5 |
| Min Items | 3 |
| Active Indicator | 64px × 32px, pill shape |

### CSS Custom Properties

```css
/* Navigation */
--md-nav-rail-width: 80px;
--md-nav-drawer-width: 360px;
--md-nav-bottom-height: 80px;

/* Colors */
--md-nav-surface: var(--md-sys-color-surface);
--md-nav-on-surface: var(--md-sys-color-on-surface);
--md-nav-indicator: var(--md-sys-color-secondary-container);
--md-nav-on-indicator: var(--md-sys-color-on-secondary-container);
```

---

## md-list-detail

Two-pane layout for list and detail views.

### Anatomy

```
Compact/Medium (single pane):
┌─────────────────────────────┐
│                             │
│     List OR Detail          │
│     (one visible)           │
│                             │
└─────────────────────────────┘

Expanded (dual pane):
┌─────────────┬───────────────┐
│             │               │
│    List     │    Detail     │
│   (fixed)   │  (flexible)   │
│             │               │
└─────────────┴───────────────┘
```

### Responsive Behavior

| Window Class | Layout | Pane Visibility |
|--------------|--------|-----------------|
| Compact | Single pane | List OR Detail (navigation) |
| Medium | Single pane | List OR Detail (navigation) |
| Expanded | Dual pane | List AND Detail side-by-side |
| Large | Dual pane | List AND Detail, more detail space |
| Extra-Large | Dual pane | List AND Detail, max-width content |

### Pane Dimensions by Window Class

| Window Class | List Width | Detail Width | Max Content Width |
|--------------|------------|--------------|-------------------|
| Expanded | 360px | Flexible | none |
| Large | 360px | Flexible | none |
| Extra-Large | 360px | Flexible | 1200px (centered) |

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `selected` | `string \| null` | `null` | Currently selected item ID |
| `show-detail` | `boolean` | `false` | Show detail pane (compact/medium) |
| `list-width` | `string` | `'360px'` | List pane width (expanded) |
| `divider` | `boolean` | `true` | Show divider between panes |

### Slots

| Slot | Description |
|------|-------------|
| `list` | List content |
| `detail` | Detail content |
| `empty` | Shown when no item selected (expanded) |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `select` | `{ id: string }` | Item selected |
| `back` | - | Back navigation triggered |

### Animation (Compact/Medium)

| Property | Value |
|----------|-------|
| Transition | Slide horizontal |
| Duration | 300ms |
| Easing | `--md-sys-motion-easing-standard` |

---

## md-supporting-pane

Primary content with supporting secondary pane.

### Anatomy

```
Compact (stacked):
┌─────────────────────────────┐
│                             │
│      Primary Content        │
│                             │
├─────────────────────────────┤
│      Supporting Pane        │
└─────────────────────────────┘

Medium (equal split):
┌─────────────┬───────────────┐
│             │               │
│   Primary   │  Supporting   │
│    (50%)    │    (50%)      │
│             │               │
└─────────────┴───────────────┘

Expanded (weighted split):
┌───────────────────┬─────────┐
│                   │         │
│     Primary       │ Support │
│      (70%)        │  (30%)  │
│                   │         │
└───────────────────┴─────────┘
```

### Responsive Behavior

| Window Class | Layout | Primary Width | Supporting Width |
|--------------|--------|---------------|------------------|
| Compact | Stacked (vertical) | 100% | 100% |
| Medium | Side-by-side | 50% | 50% |
| Expanded | Side-by-side | 70% | 30% |
| Large | Side-by-side | 70% | 30% |
| Extra-Large | Side-by-side | 70% | 30% (max 400px) |

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `pane-position` | `'end' \| 'start'` | `'end'` | Supporting pane position |
| `pane-open` | `boolean` | `true` | Supporting pane visibility |
| `resizable` | `boolean` | `false` | Allow user to resize panes |
| `min-pane-width` | `string` | `'280px'` | Minimum supporting pane width |
| `max-pane-width` | `string` | `'400px'` | Maximum supporting pane width |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Primary content |
| `pane` | Supporting pane content |

### Divider

| Property | Value |
|----------|-------|
| Width | 1px |
| Color | `--md-sys-color-outline-variant` |
| Draggable (when resizable) | 8px hit area |

---

## Spacing Tokens

### Component Spacing

| Token | Value | Use Case |
|-------|-------|----------|
| `--md-spacing-xs` | 4px | Tight grouping |
| `--md-spacing-sm` | 8px | Related elements |
| `--md-spacing-md` | 16px | Standard spacing |
| `--md-spacing-lg` | 24px | Section separation |
| `--md-spacing-xl` | 32px | Major sections |
| `--md-spacing-2xl` | 48px | Page sections |

### Pane Padding

| Location | Padding |
|----------|---------|
| Pane internal | 16px – 24px |
| Content gap | 24px |

---

## Color Tokens

| Element | Token |
|---------|-------|
| Page Background | `--md-sys-color-surface` |
| Nav Surface | `--md-sys-color-surface-container` |
| Pane Divider | `--md-sys-color-outline-variant` |
| Active Nav Indicator | `--md-sys-color-secondary-container` |

---

## Motion

### Navigation Transitions

| Transition | Duration | Easing |
|------------|----------|--------|
| Drawer open/close | 250ms | `standard` |
| Rail to Drawer | 200ms | `standard` |
| Page transition | 300ms | `standard` |

### Pane Transitions

| Transition | Duration | Easing |
|------------|----------|--------|
| Pane show/hide | 200ms | `standard` |
| Pane resize | 0ms (real-time) | - |
| Layout reflow | 300ms | `standard` |

---

## Accessibility

### Landmarks

| Component | Role | Label |
|-----------|------|-------|
| App Layout | - | - |
| Navigation | `navigation` | "Main navigation" |
| Main Content | `main` | - |
| Supporting Pane | `complementary` | "Supporting content" |

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | Move between regions |
| `Escape` | Close drawer (mobile) |
| `Arrow Keys` | Navigate within nav items |

### Focus Management

- Focus moves to detail pane when item selected (compact)
- Focus returns to list on back navigation
- Drawer trap focus when open (modal mode)

---

## Responsive Utilities

### CSS Classes (automatically applied)

```css
/* Applied to :host based on container width */
:host([data-window-class="compact"]) { }
:host([data-window-class="medium"]) { }
:host([data-window-class="expanded"]) { }
:host([data-window-class="large"]) { }
:host([data-window-class="extra-large"]) { }
```

### Container Queries

Components use CSS Container Queries for responsive behavior:

```css
@container (width < 600px) { /* compact */ }
@container (width >= 600px) and (width < 840px) { /* medium */ }
@container (width >= 840px) and (width < 1200px) { /* expanded */ }
@container (width >= 1200px) and (width < 1600px) { /* large */ }
@container (width >= 1600px) { /* extra-large */ }
```

---

## Multi-Level Navigation (Hierarchical)

Support for navigation hierarchies up to 3 levels deep, following MD3 patterns for deep navigation structures.

### Design Principles (MD3)

1. **Inline-Replace Pattern**: When selecting a parent item, its children replace the current drawer content
2. **Context Preservation**: Back navigation header shows parent label for orientation
3. **Maximum Depth**: 3 levels (Root → Level 1 → Level 2)
4. **Chevron Indicators**: Visual cue for expandable items (pointing right `chevron_right`)
5. **Shared Component**: Same `md-nav-group` component works in Drawer (mobile) and Rail (desktop)

### Drawer Header Behavior

| Level | Header Content |
|-------|----------------|
| **Root (Level 0)** | Menu close button (`menu_open` icon, left-aligned) |
| **Level 1+** | Back arrow (`arrow_back`) + Parent label |

**Important: Icon Alignment**

The drawer's close button must be positioned to align exactly with the menu button in the Top App Bar. This creates visual continuity when the drawer opens/closes.

**Requirements:**
- **Same horizontal position**: Both use `padding: 0 4px` with a 48px button
- **Same vertical position**: Close header height (`--nav-group-close-header-height: 64px`) must match Top App Bar height (`--top-app-bar-height: 64px`)
- **Same icon size**: Both buttons are 48x48px with centered 24px icon

```
Top App Bar:               Drawer (Root Level):
┌─────────────────────┐    ┌─────────────────────┐
│ ☰  My App           │    │ ☰                   │  ← Same position (64px height)
└─────────────────────┘    ├─────────────────────┤
                           │ ● Home              │
```

### Drawer Closing Mechanisms

| Mechanism | Description |
|-----------|-------------|
| **Close button** | `menu_open` icon in drawer header (root level only) |
| **Scrim tap** | Tap outside drawer to close |
| **Item selection** | Selecting a leaf item closes the drawer |
| **System back** | Back button/gesture closes drawer |
| **Swipe gesture** | Swipe toward anchor edge dismisses drawer |

### Anatomy: Inline-Replace Navigation

```
Level 0 (Root):                    Level 1 (After selecting "Library"):
┌─────────────────────────┐        ┌─────────────────────────┐
│ ☰                       │        │ ←  Library              │  ← Back header
├─────────────────────────┤        ├─────────────────────────┤
│ ● Home                  │        │ ● Music                 │
│   Search                │        │   Videos                │
│   Library         ▶     │ ←Click │   Podcasts        ▶     │  ← Has children
│   Settings              │        │   Audiobooks            │
└─────────────────────────┘        └─────────────────────────┘
     ↑ menu_open icon                    ↑ Back arrow + label

Level 2 (After selecting "Podcasts"):
┌─────────────────────────┐
│ ←  Podcasts             │  ← Back to Level 1
├─────────────────────────┤
│ ● Subscribed            │
│   Downloads             │
│   History               │
└─────────────────────────┘
```

### Navigation Rail Expansion (Desktop)

On larger screens (expanded/large/extra-large), the Navigation Rail can show nested items inline when expanded:

```
Rail Collapsed (80px):       Rail Expanded (360px):
┌────────┐                   ┌──────────────────────────────┐
│  [●]   │                   │ ● Home                       │
│  Home  │                   │   Search                     │
├────────┤                   ├──────────────────────────────┤
│  [○]   │                   │ ▼ Library                    │ ← Expanded inline
│ Library│                   │     Music                    │
├────────┤                   │     Videos                   │
│  [○]   │                   │     Podcasts           ▶     │ ← Has L2 children
│Settings│                   ├──────────────────────────────┤
└────────┘                   │   Settings                   │
                             └──────────────────────────────┘
```

### Data Structures

#### NavDestination

Navigation item with optional children for hierarchical navigation:

```typescript
interface NavDestination {
  /** Unique identifier */
  value: string;
  /** Display label */
  label: string;
  /** Material icon name */
  icon: string;
  /** Optional badge text */
  badge?: string;
  /** URL to navigate to. If provided, renders as <a> instead of <button>. */
  href?: string;
  /** Link target when href is provided (e.g., '_blank', '_self') */
  target?: string;
  /** If true, only show in drawer (not in bar/rail) */
  drawerOnly?: boolean;
  /** Child navigation items (max 2 additional levels) */
  children?: NavDestination[];
}
```

#### NavSection

Section with navigation items:

```typescript
interface NavSection {
  /** Optional section label (e.g., "Library", "Account") */
  label?: string;
  /** Navigation items in this section */
  items: NavDestination[];
}
```

#### Navigation

Complete navigation structure (unified API):

```typescript
type Navigation = (NavDestination | NavSection)[];
```

> **Note:** The separate `HierarchicalNavigation` type is deprecated. Use `Navigation` with `children` property on items instead.

### md-nav-group

Reusable component for rendering hierarchical navigation. Used internally by both Drawer and expanded Rail.

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | `HierarchicalNavItem[]` | `[]` | Navigation items to display |
| `selected-value` | `string` | `''` | Currently selected item value |
| `current-path` | `string[]` | `[]` | Path of parent values to current level |
| `mode` | `'drawer' \| 'rail-expanded'` | `'drawer'` | Display mode |
| `show-back` | `boolean` | `false` | Show back navigation header |
| `back-label` | `string` | `''` | Label for back navigation |

#### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `nav-select` | `{ value: string, path: string[] }` | Item selected (leaf node) |
| `nav-drill` | `{ value: string, label: string, children: HierarchicalNavItem[] }` | Drill into children |
| `nav-back` | `{ toPath: string[] }` | Navigate back one level |

#### Slots

| Slot | Description |
|------|-------------|
| `header` | Content above navigation items |
| `footer` | Content below navigation items |

#### CSS Parts

| Part | Description |
|------|-------------|
| `container` | Root container |
| `back-header` | Back navigation header |
| `back-button` | Back arrow button |
| `back-label` | Parent label text |
| `items` | Items container |
| `item` | Individual nav item |
| `item-icon` | Item icon area |
| `item-label` | Item label text |
| `item-chevron` | Chevron indicator for parents |

### Interaction Behavior

#### Drawer Mode (Compact/Medium)

1. **Initial State**: Root level items displayed
2. **Click parent item**: Animate slide-left, replace content with children, show back header
3. **Click back arrow**: Animate slide-right, return to parent level
4. **Click leaf item**: Select item, close drawer, emit `nav-select`

#### Rail Expanded Mode (Large/Extra-Large)

1. **Initial State**: Root level items with inline expansion capability
2. **Click parent item**: Toggle inline expand/collapse with chevron rotation
3. **Click nested parent**: For Level 2, use inline expansion (no slide animation)
4. **Click leaf item**: Select item, emit `nav-select`

### Animation Specifications

| Transition | Duration | Easing | Description |
|------------|----------|--------|-------------|
| Slide to child | 250ms | `standard` | Content slides left, new level enters from right |
| Slide to parent | 250ms | `standard` | Content slides right, parent level enters from left |
| Chevron rotation | 200ms | `standard` | 0° → 90° for expand, 90° → 0° for collapse |
| Inline expand | 200ms | `standard` | Height animation for children container |

### CSS Custom Properties

```css
/* Navigation Group */
--md-nav-group-back-height: 56px;
--md-nav-group-item-height: 56px;
--md-nav-group-item-padding: 16px;
--md-nav-group-indent: 16px;          /* Indent per level in rail mode */
--md-nav-group-chevron-size: 24px;

/* Animation */
--md-nav-group-slide-duration: 250ms;
--md-nav-group-expand-duration: 200ms;
```

### Accessibility

| Feature | Implementation |
|---------|----------------|
| **Back button** | `aria-label="Back to {parent}"` |
| **Parent items** | `aria-expanded="true/false"`, `aria-haspopup="true"` |
| **Chevron** | `aria-hidden="true"` (decorative) |
| **Level announcement** | `aria-live="polite"` on level change |
| **Keyboard** | `Enter/Space` to drill, `Escape` or `Backspace` to go back |

### Usage Example

```html
<md-app-layout .navigation=${navigation} selected-nav="music">
  <main>Content</main>
</md-app-layout>
```

```typescript
// Simple flat navigation
const simpleNav: Navigation = [
  { value: 'home', label: 'Home', icon: 'home' },
  { value: 'search', label: 'Search', icon: 'search' },
  { value: 'settings', label: 'Settings', icon: 'settings' },
];

// Hierarchical navigation (using children property)
const hierarchicalNav: Navigation = [
  { value: 'home', label: 'Home', icon: 'home' },
  { value: 'search', label: 'Search', icon: 'search' },
  {
    value: 'library',
    label: 'Library',
    icon: 'library_music',
    children: [
      { value: 'music', label: 'Music', icon: 'music_note' },
      { value: 'videos', label: 'Videos', icon: 'video_library' },
      {
        value: 'podcasts',
        label: 'Podcasts',
        icon: 'podcasts',
        children: [
          { value: 'subscribed', label: 'Subscribed', icon: 'subscriptions' },
          { value: 'downloads', label: 'Downloads', icon: 'download' },
          { value: 'history', label: 'History', icon: 'history' },
        ],
      },
      { value: 'audiobooks', label: 'Audiobooks', icon: 'auto_stories' },
    ],
  },
  { value: 'settings', label: 'Settings', icon: 'settings' },
];
```

The component automatically detects hierarchical navigation when items have `children` and enables drill-down behavior in the modal drawer.

### Constraints

| Constraint | Value | Rationale |
|------------|-------|-----------|
| Max depth | 3 levels | MD3: "Avoid more than 2-3 levels to prevent navigation fatigue" |
| Root items in bar | Max 5 | MD3 Navigation Bar guideline |
| Chevron visibility | Parents only | Clear affordance for drillable items |
| Back header | Levels 1+ only | Root has no parent to return to |

---

## md-nav-section

Visual grouping component for static navigation items. Used within slot-based navigation to organize items into labeled sections.

### Purpose

Sections provide visual grouping and labeling of related navigation items. They are an alternative to data-driven `NavSection` objects when static, declarative markup is preferred.

### MD3 Design Constraints

> **Important:** According to MD3 Navigation Drawer guidelines, sections are flat visual groupings and do NOT support nested submenus or hierarchical children. Sections are purely organizational—they group related top-level destinations together.

| Constraint | Value | Rationale |
|------------|-------|-----------|
| **Nesting** | Not allowed | Sections are flat groupings only |
| **Submenus** | Not supported | Use `hierarchicalNavigation` for drill-down navigation |
| **Children** | `md-nav-item` only | No nested sections or parent items |

For hierarchical navigation with multiple levels, use the `hierarchicalNavigation` property with `HierarchicalNavItem` objects instead of sections.

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `undefined` | Optional section header label |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Navigation items (`md-nav-item` elements) |

### CSS Parts

| Part | Description |
|------|-------------|
| `section` | Root container |
| `label` | Section header label |
| `items` | Items container |

### Usage Example

```html
<md-app-layout>
  <md-nav-section slot="nav" label="Main">
    <md-nav-item value="home" label="Home" icon="home"></md-nav-item>
    <md-nav-item value="search" label="Search" icon="search"></md-nav-item>
  </md-nav-section>

  <md-nav-section slot="nav" label="Library">
    <md-nav-item value="music" label="Music" icon="music_note"></md-nav-item>
    <md-nav-item value="videos" label="Videos" icon="video_library"></md-nav-item>
  </md-nav-section>

  <main>Content</main>
</md-app-layout>
```

### When to Use What

| Scenario | Recommended Approach |
|----------|---------------------|
| Static navigation (≤5 items) | `md-nav-item` directly in slot |
| Static navigation with sections | `md-nav-section` with slotted `md-nav-item` |
| Dynamic flat navigation | `navigation` property with `NavDestination[]` |
| Dynamic hierarchical navigation | `navigation` property with `children` on items |
| Sectioned navigation | `navigation` property with `NavSection[]` |

> **Note:** Slot-based navigation only supports Navigation Bar mode (≤5 items). For >5 items or sections, use the `navigation` property which automatically switches to Modal Drawer in compact mode.

---

## References

- [MD3 Layout Overview](https://m3.material.io/foundations/layout/understanding-layout/overview)
- [MD3 Applying Layout](https://m3.material.io/foundations/layout/applying-layout)
- [MD3 Window Size Classes](https://m3.material.io/foundations/layout/applying-layout/window-size-classes)
- [MD3 Canonical Layouts](https://m3.material.io/foundations/layout/canonical-layouts/overview)
- [MD3 Navigation Rail](https://m3.material.io/components/navigation-rail/overview)
- [MD3 Navigation Drawer](https://m3.material.io/components/navigation-drawer/overview)
- [Android Canonical Layouts](https://developer.android.com/develop/ui/views/layout/canonical-layouts)
- [Android Window Size Classes](https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes)
