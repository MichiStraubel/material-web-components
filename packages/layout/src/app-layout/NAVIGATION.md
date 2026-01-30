# MD3 Expressive Navigation Behavior

This document describes the adaptive navigation behavior of the `md-app-layout` component according to Material Design 3 Expressive guidelines.

## Breakpoints & Navigation Components

| Breakpoint | Viewport | Navigation Component | Mode |
|------------|----------|---------------------|------|
| **compact** | < 600px | Navigation Bar (Bottom) | `bar` |
| **medium** | 600–839px | Flexible Navigation Bar | `bar-horizontal` |
| **expanded** | 840–1199px | Navigation Rail (collapsed) | `rail` |
| **large** | 1200–1599px | Navigation Rail (expanded default) | `expanded` |
| **extra-large** | ≥ 1600px | Navigation Rail (expanded permanent) | `expanded` |

## Behavior per Size Class

### Compact (< 600px)

- Bottom Navigation Bar at the bottom of the screen
- Vertical icon + label arrangement
- Maximum 5 items visible
- Modal overlay when expanded

### Medium (600–839px)

- Flexible Navigation Bar on the side
- Horizontal icon + label arrangement
- Modal overlay when expanded

### Expanded (840–1199px)

- Navigation Rail (narrow, icons only)
- Hamburger button to expand
- Expansion opens modal overlay with scrim

### Large (1200–1599px)

- Navigation Rail expanded by default
- Shows icons + labels
- Can be collapsed via toggle

### Extra-Large (≥ 1600px)

- Navigation Rail permanently expanded
- No toggle available
- Always shows icons + labels

## Extended Solution: More Than 5 Elements

The MD3 guideline allows a maximum of **5 items** in the Navigation Bar. Our component provides an automatic fallback solution.

### Drawer Mode Activation

The drawer mode is activated when:

1. More than 5 `barItems` exist (items without `drawerOnly: true`)
2. Navigation contains `NavSection` objects (groupings)

```typescript
private get useDrawerInCompact(): boolean {
  return this.barItems.length > 5 || this.hasSections;
}
```

### Behavior with > 5 Items (Compact Mode)

1. **Bottom Bar is hidden** completely
2. **Hamburger menu** appears in the Top App Bar
3. **Modal Drawer** opens on click
4. Drawer displays **all** navigation elements including sections

### Visual Comparison

```
Compact (≤5 Items)          Compact (>5 Items)
┌─────────────────┐         ┌─────────────────┐
│  App Title      │         │  ☰  App Title   │  ← Burger opens Drawer
├─────────────────┤         ├─────────────────┤
│                 │         │                 │
│    Content      │         │    Content      │
│                 │         │                 │
├─────────────────┤         │                 │
│ 🏠  🔍  ❤️  ✉️  👤 │         └─────────────────┘  ← No Bottom Bar!
└─────────────────┘
```

## Data Structures

### NavDestination

A single navigation item:

```typescript
interface NavDestination {
  /** Unique identifier for this destination */
  value: string;
  /** Display label */
  label: string;
  /** Material icon name */
  icon: string;
  /** Optional badge text (e.g., unread count) */
  badge?: string;
  /** If true, only show in drawer (not in bar/rail) */
  drawerOnly?: boolean;
}
```

### NavSection

A grouping of navigation items (drawer only):

```typescript
interface NavSection {
  /** Optional section label */
  label?: string;
  /** Navigation items in this section */
  items: NavDestination[];
}
```

### Navigation

The complete navigation structure:

```typescript
type Navigation = (NavDestination | NavSection)[];
```

## Usage Examples

### Standard Navigation (≤5 Items)

```typescript
const navigation: Navigation = [
  { value: 'home', label: 'Home', icon: 'home' },
  { value: 'search', label: 'Search', icon: 'search' },
  { value: 'favorites', label: 'Favorites', icon: 'favorite' },
  { value: 'messages', label: 'Messages', icon: 'mail' },
  { value: 'profile', label: 'Profile', icon: 'person' },
];
// -> Bottom Navigation Bar in compact mode
```

### Extended Navigation (>5 Items)

```typescript
const navigation: Navigation = [
  { value: 'home', label: 'Home', icon: 'home' },
  { value: 'search', label: 'Search', icon: 'search' },
  { value: 'favorites', label: 'Favorites', icon: 'favorite' },
  { value: 'messages', label: 'Messages', icon: 'mail' },
  { value: 'profile', label: 'Profile', icon: 'person' },
  { value: 'settings', label: 'Settings', icon: 'settings' },
];
// -> Automatic Drawer mode in compact (burger menu)
```

### Sectioned Navigation

```typescript
const navigation: Navigation = [
  { value: 'home', label: 'Home', icon: 'home' },
  {
    label: 'Library',
    items: [
      { value: 'music', label: 'Music', icon: 'music_note' },
      { value: 'videos', label: 'Videos', icon: 'video_library' },
      { value: 'photos', label: 'Photos', icon: 'photo_library' },
    ],
  },
  {
    label: 'Account',
    items: [
      { value: 'profile', label: 'Profile', icon: 'person' },
      { value: 'settings', label: 'Settings', icon: 'settings' },
    ],
  },
];
// -> Automatic Drawer mode (sections require drawer)
```

### Drawer-Only Items

```typescript
const navigation: Navigation = [
  { value: 'home', label: 'Home', icon: 'home' },
  { value: 'search', label: 'Search', icon: 'search' },
  { value: 'favorites', label: 'Favorites', icon: 'favorite' },
  { value: 'help', label: 'Help', icon: 'help', drawerOnly: true },
  { value: 'settings', label: 'Settings', icon: 'settings', drawerOnly: true },
];
// -> 3 items in bar, 5 items in drawer
```

## Events

| Event | Detail | Description |
|-------|--------|-------------|
| `nav-change` | `{ value: string }` | Fired when navigation selection changes |
| `nav-expand` | `{ expanded: boolean }` | Fired when navigation rail expands/collapses |
| `drawer-change` | `{ open: boolean }` | Fired when drawer opens/closes |

## References

- [Navigation Bar – Material Design 3](https://m3.material.io/components/navigation-bar/guidelines)
- [Navigation Rail – Material Design 3](https://m3.material.io/components/navigation-rail/guidelines)
- [Navigation Drawer – Material Design 3](https://m3.material.io/components/navigation-drawer/guidelines)
- [Layout – Material Design 3](https://m3.material.io/foundations/layout/understanding-layout/parts-of-layout)
