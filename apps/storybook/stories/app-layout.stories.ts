import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@material-wc/layout';
import '@material-wc/core/icon';
import '@material-wc/buttons';
import type { Navigation } from '@material-wc/layout';

type AppLayoutArgs = {
  selectedNav: string;
  navExpanded: boolean;
  drawerOpen: boolean;
  navigation: Navigation;
};

const meta: Meta<AppLayoutArgs> = {
  title: 'MD3 Components/Layout/App Layout',
  component: 'md-app-layout',
  tags: ['autodocs', 'new'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## App Layout (MD3 Expressive)

Root layout component for SPAs with adaptive navigation based on viewport width.

### Responsive Behavior

| Window Class | Width | Navigation |
|--------------|-------|------------|
| **Compact** | < 600px | Bottom Bar (≤5 items) or Drawer (>5 items/sections) |
| **Medium** | 600–839px | Flexible Bar (64px, icon beside label) |
| **Expanded** | 840–1199px | Rail (toggle expand) |
| **Large** | 1200–1599px | Expanded by default |
| **Extra-Large** | ≥ 1600px | Permanently expanded |

### Navigation Approaches

There are two ways to define navigation:

1. **Data-driven** (via \`navigation\` property, with optional \`children\` for hierarchy)
2. **Slot-based** (via \`slot="nav"\` with \`md-nav-item\`)

### When to Use What

| Scenario | Approach |
|----------|----------|
| ≤5 static items in HTML | Slot-based (\`md-nav-item\` in slot) |
| Dynamic navigation from API/state | Data-driven (\`navigation\` property) |
| More than 5 items | Data-driven (auto drawer fallback) |
| Sections with labels | Data-driven (\`NavSection[]\`) |
| Hierarchical drill-down (2-3 levels) | Data-driven (items with \`children\` property) |

**Note:** Slot-based navigation supports only the Navigation Bar (max 5 items). For drawer features, hierarchical navigation, or more items, use the data-driven approach with the \`navigation\` property.
        `,
      },
    },
  },
  argTypes: {
    selectedNav: {
      control: 'text',
      description: 'Currently selected navigation item value',
    },
    navExpanded: {
      control: 'boolean',
      description: 'Whether the navigation is expanded',
    },
    drawerOpen: {
      control: 'boolean',
      description: 'Whether the modal navigation drawer is open',
    },
  },
};

export default meta;
type Story = StoryObj<AppLayoutArgs>;

// ============================================================
// NAVIGATION DATA
// ============================================================

// Navigation with 4 items (fits in bar)
const nav4Items: Navigation = [
  { value: 'home', label: 'Home', icon: 'home' },
  { value: 'search', label: 'Search', icon: 'search' },
  { value: 'library', label: 'Library', icon: 'video_library' },
  { value: 'profile', label: 'Profile', icon: 'person' },
];

// Navigation with 5 items (max for bar)
const nav5Items: Navigation = [
  { value: 'home', label: 'Home', icon: 'home' },
  { value: 'search', label: 'Search', icon: 'search' },
  { value: 'explore', label: 'Explore', icon: 'explore' },
  { value: 'library', label: 'Library', icon: 'video_library' },
  { value: 'profile', label: 'Profile', icon: 'person' },
];

// Navigation with 7 items (requires drawer)
const nav7Items: Navigation = [
  { value: 'home', label: 'Home', icon: 'home' },
  { value: 'search', label: 'Search', icon: 'search' },
  { value: 'explore', label: 'Explore', icon: 'explore' },
  { value: 'library', label: 'Library', icon: 'video_library' },
  { value: 'history', label: 'History', icon: 'history' },
  { value: 'downloads', label: 'Downloads', icon: 'download' },
  { value: 'profile', label: 'Profile', icon: 'person' },
];

// Navigation with sections (requires drawer)
const navWithSections: Navigation = [
  { value: 'home', label: 'Home', icon: 'home' },
  { value: 'search', label: 'Search', icon: 'search' },
  {
    label: 'Library',
    items: [
      { value: 'favorites', label: 'Favorites', icon: 'favorite' },
      { value: 'playlists', label: 'Playlists', icon: 'playlist_play' },
      { value: 'history', label: 'History', icon: 'history' },
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

// Navigation with href links (renders as <a> tags)
const navWithLinks: Navigation = [
  { value: 'home', label: 'Home', icon: 'home', href: '#home' },
  { value: 'search', label: 'Search', icon: 'search', href: '#search' },
  { value: 'docs', label: 'Docs', icon: 'description', href: '#docs' },
  { value: 'github', label: 'GitHub', icon: 'code', href: 'https://github.com', target: '_blank' },
];

// Hierarchical navigation with 3 levels (uses children property)
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
  {
    value: 'explore',
    label: 'Explore',
    icon: 'explore',
    children: [
      { value: 'trending', label: 'Trending', icon: 'trending_up' },
      { value: 'new-releases', label: 'New Releases', icon: 'new_releases' },
      { value: 'charts', label: 'Charts', icon: 'bar_chart' },
    ],
  },
  { value: 'settings', label: 'Settings', icon: 'settings' },
];

// ============================================================
// CATEGORY 1: NAVIGATION BAR (Compact, ≤5 Items)
// ============================================================

export const BarDataDriven4Items: Story = {
  name: '1.1 Bar: Data-driven (4 Items)',
  args: {
    selectedNav: 'home',
    navExpanded: false,
    drawerOpen: false,
    navigation: nav4Items,
  },
  parameters: {
    docs: {
      description: {
        story: `
### Navigation Bar - Data-driven (4 Items)

Bottom navigation bar with 4 items, defined via the \`navigation\` property.

**When to use:** Dynamic navigation from API or state management.

**Note:** The \`top-app-bar\` slot can be used for a title, even without a burger menu.
        `,
      },
      source: {
        code: `
const navigation = [
  { value: 'home', label: 'Home', icon: 'home' },
  { value: 'search', label: 'Search', icon: 'search' },
  { value: 'library', label: 'Library', icon: 'video_library' },
  { value: 'profile', label: 'Profile', icon: 'person' },
];

html\`
  <md-app-layout
    selected-nav="home"
    .navigation=\${navigation}
  >
    <span slot="top-app-bar">My App</span>
    <div>Content</div>
  </md-app-layout>
\`
`,
        language: 'typescript',
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      .navigation=${args.navigation}
      style="height: 600px; width: 375px;"
    >
      <span slot="top-app-bar">My App</span>
      <div>
        <h1>Navigation Bar (Data-driven)</h1>
        <p>4 items → Bottom Navigation Bar</p>
        <p>Title displayed via <code>slot="top-app-bar"</code>.</p>
      </div>
    </md-app-layout>
  `,
};

export const BarDataDriven5Items: Story = {
  name: '1.2 Bar: Data-driven (5 Items)',
  args: {
    selectedNav: 'home',
    navExpanded: false,
    drawerOpen: false,
    navigation: nav5Items,
  },
  parameters: {
    docs: {
      description: {
        story: `
### Navigation Bar - Data-driven (5 Items)

Bottom navigation bar with 5 items (maximum for bar mode).

**MD3 Guideline:** Navigation Bar supports 3-5 destinations.
        `,
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      .navigation=${args.navigation}
      style="height: 600px; width: 375px;"
    >
      <span slot="top-app-bar">My App</span>
      <div>
        <h1>Navigation Bar (5 Items Max)</h1>
        <p>5 items → Still Bottom Navigation Bar</p>
        <p>This is the maximum for bar mode per MD3.</p>
      </div>
    </md-app-layout>
  `,
};

export const BarSlotBased: Story = {
  name: '1.3 Bar: Slot-based',
  args: {
    selectedNav: 'home',
    navExpanded: false,
    drawerOpen: false,
    navigation: [],
  },
  parameters: {
    docs: {
      description: {
        story: `
### Navigation Bar - Slot-based

Bottom navigation bar with items defined via slots in HTML.

**When to use:** Static navigation defined directly in markup.
        `,
      },
      source: {
        code: `
<md-app-layout selected-nav="home">
  <span slot="top-app-bar">My App</span>

  <md-nav-item slot="nav" value="home" label="Home" icon="home" selected></md-nav-item>
  <md-nav-item slot="nav" value="search" label="Search" icon="search"></md-nav-item>
  <md-nav-item slot="nav" value="library" label="Library" icon="video_library"></md-nav-item>
  <md-nav-item slot="nav" value="profile" label="Profile" icon="person"></md-nav-item>

  <div>Content</div>
</md-app-layout>
`,
        language: 'html',
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      style="height: 600px; width: 375px;"
    >
      <span slot="top-app-bar">My App</span>

      <md-nav-item slot="nav" value="home" label="Home" icon="home"></md-nav-item>
      <md-nav-item slot="nav" value="search" label="Search" icon="search"></md-nav-item>
      <md-nav-item slot="nav" value="library" label="Library" icon="video_library"></md-nav-item>
      <md-nav-item slot="nav" value="profile" label="Profile" icon="person"></md-nav-item>

      <div>
        <h1>Navigation Bar (Slot-based)</h1>
        <p>4 items → Bottom Navigation Bar</p>
        <p>Navigation defined via <code>slot="nav"</code> in HTML.</p>
      </div>
    </md-app-layout>
  `,
};

// ============================================================
// CATEGORY 2: MODAL DRAWER (Compact, >5 Items or Sections)
// ============================================================

export const DrawerDataDrivenManyItems: Story = {
  name: '2.1 Drawer: Data-driven (Many Items)',
  args: {
    selectedNav: 'home',
    navExpanded: false,
    drawerOpen: false,
    navigation: nav7Items,
  },
  parameters: {
    docs: {
      description: {
        story: `
### Modal Drawer - Data-driven (Many Items)

When navigation has more than 5 items, the component automatically switches
to a modal drawer with a menu button in the top app bar.

**Trigger:** >5 items without sections
        `,
      },
      source: {
        code: `
const navigation = [
  { value: 'home', label: 'Home', icon: 'home' },
  { value: 'search', label: 'Search', icon: 'search' },
  { value: 'explore', label: 'Explore', icon: 'explore' },
  { value: 'library', label: 'Library', icon: 'video_library' },
  { value: 'history', label: 'History', icon: 'history' },
  { value: 'downloads', label: 'Downloads', icon: 'download' },
  { value: 'profile', label: 'Profile', icon: 'person' },
];

html\`
  <md-app-layout .navigation=\${navigation}>
    <span slot="top-app-bar">My App</span>
    <div>Content</div>
  </md-app-layout>
\`
`,
        language: 'typescript',
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      .navigation=${args.navigation}
      style="height: 600px; width: 375px;"
    >
      <span slot="top-app-bar">My App</span>
      <div>
        <h1>Modal Drawer (Many Items)</h1>
        <p>7 items → Menu button opens drawer.</p>
        <p>Click the menu button to see all navigation items.</p>
      </div>
    </md-app-layout>
  `,
};

export const DrawerDataDrivenSections: Story = {
  name: '2.2 Drawer: Data-driven (Sections)',
  args: {
    selectedNav: 'home',
    navExpanded: false,
    drawerOpen: false,
    navigation: navWithSections,
  },
  parameters: {
    docs: {
      description: {
        story: `
### Modal Drawer - Data-driven (Sections)

Navigation with sections automatically triggers drawer mode,
regardless of item count. Sections are displayed with labels.

**Trigger:** Presence of \`NavSection\` objects in navigation
        `,
      },
      source: {
        code: `
const navigation = [
  { value: 'home', label: 'Home', icon: 'home' },
  { value: 'search', label: 'Search', icon: 'search' },
  {
    label: 'Library',
    items: [
      { value: 'favorites', label: 'Favorites', icon: 'favorite' },
      { value: 'playlists', label: 'Playlists', icon: 'playlist_play' },
      { value: 'history', label: 'History', icon: 'history' },
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

html\`
  <md-app-layout .navigation=\${navigation}>
    <span slot="top-app-bar">My App</span>
    <div>Content</div>
  </md-app-layout>
\`
`,
        language: 'typescript',
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      .navigation=${args.navigation}
      style="height: 600px; width: 375px;"
    >
      <span slot="top-app-bar">My App</span>
      <div>
        <h1>Modal Drawer (Sections)</h1>
        <p>Sections → Menu button opens drawer.</p>
        <p>Sections are displayed with labels in the drawer.</p>
      </div>
    </md-app-layout>
  `,
};

export const BarSlotBased5Items: Story = {
  name: '1.4 Bar: Slot-based (5 Items)',
  args: {
    selectedNav: 'home',
    navExpanded: false,
    drawerOpen: false,
    navigation: [],
  },
  parameters: {
    docs: {
      description: {
        story: `
### Navigation Bar - Slot-based (5 Items)

Maximum of 5 items in slot-based navigation bar. Additional items are hidden with a console warning.

**Note:** For more than 5 items, use the data-driven \`navigation\` property which automatically switches to drawer mode.
        `,
      },
      source: {
        code: `
<md-app-layout selected-nav="home">
  <span slot="top-app-bar">My App</span>

  <md-nav-item slot="nav" value="home" label="Home" icon="home"></md-nav-item>
  <md-nav-item slot="nav" value="search" label="Search" icon="search"></md-nav-item>
  <md-nav-item slot="nav" value="explore" label="Explore" icon="explore"></md-nav-item>
  <md-nav-item slot="nav" value="library" label="Library" icon="video_library"></md-nav-item>
  <md-nav-item slot="nav" value="profile" label="Profile" icon="person"></md-nav-item>

  <div>Content</div>
</md-app-layout>
`,
        language: 'html',
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      style="height: 600px; width: 375px;"
    >
      <span slot="top-app-bar">My App</span>

      <md-nav-item slot="nav" value="home" label="Home" icon="home"></md-nav-item>
      <md-nav-item slot="nav" value="search" label="Search" icon="search"></md-nav-item>
      <md-nav-item slot="nav" value="explore" label="Explore" icon="explore"></md-nav-item>
      <md-nav-item slot="nav" value="library" label="Library" icon="video_library"></md-nav-item>
      <md-nav-item slot="nav" value="profile" label="Profile" icon="person"></md-nav-item>

      <div>
        <h1>Navigation Bar (5 Items Max)</h1>
        <p>5 items via slots → Maximum for bar mode.</p>
        <p>For more items, use the data-driven approach.</p>
      </div>
    </md-app-layout>
  `,
};

// ============================================================
// CATEGORY 3: HIERARCHICAL NAVIGATION (Drawer with Drill-down)
// ============================================================

export const HierarchicalDataDriven: Story = {
  name: '3.1 Hierarchical: Data-driven (3 Levels)',
  args: {
    selectedNav: 'home',
    navExpanded: false,
    drawerOpen: false,
    navigation: hierarchicalNav,
  },
  parameters: {
    docs: {
      description: {
        story: `
### Hierarchical Navigation - Data-driven (3 Levels)

Navigation with up to 3 levels of depth. Items with \`children\` property
enable drill-down navigation. Clicking a parent item (indicated by chevron)
drills down into its children.

**Features:**
- Inline-replace pattern (MD3 compliant)
- Slide animations between levels
- Back navigation with parent label
- Max 3 levels per MD3 guidelines
- Automatic detection via \`children\` property
        `,
      },
      source: {
        code: `
const navigation = [
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
        ],
      },
    ],
  },
  { value: 'settings', label: 'Settings', icon: 'settings' },
];

html\`
  <md-app-layout .navigation=\${navigation}>
    <span slot="top-app-bar">My App</span>
    <div>Content</div>
  </md-app-layout>
\`
`,
        language: 'typescript',
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      .navigation=${args.navigation}
      style="height: 600px; width: 375px;"
      @nav-change=${(e: CustomEvent) => console.log('nav-change:', e.detail)}
    >
      <span slot="top-app-bar">My App</span>
      <div>
        <h1>Hierarchical Navigation</h1>
        <p>Click the menu button to open the drawer.</p>
        <p>Click <strong>Library</strong> or <strong>Explore</strong> to drill down.</p>
        <p>Click <strong>Podcasts</strong> (inside Library) for level 3.</p>
      </div>
    </md-app-layout>
  `,
};

export const HierarchicalDrawerOpen: Story = {
  name: '3.2 Hierarchical: Drawer Pre-opened',
  args: {
    selectedNav: 'music',
    navExpanded: false,
    drawerOpen: true,
    navigation: hierarchicalNav,
  },
  parameters: {
    docs: {
      description: {
        story: `
### Hierarchical Navigation - Drawer Pre-opened

Same hierarchical navigation with the drawer already open
to demonstrate the initial state.
        `,
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      .navigation=${args.navigation}
      style="height: 600px; width: 375px;"
      @nav-change=${(e: CustomEvent) => console.log('nav-change:', e.detail)}
    >
      <span slot="top-app-bar">My App</span>
      <div>
        <h1>Drawer Pre-opened</h1>
        <p>The drawer is pre-opened to show the hierarchical navigation.</p>
        <p>Try clicking on <strong>Library</strong> to see the drill-down animation.</p>
      </div>
    </md-app-layout>
  `,
};

// ============================================================
// CATEGORY 4: TABLET/DESKTOP (Rail & Expanded)
// ============================================================

export const TabletRailDataDriven: Story = {
  name: '4.1 Tablet: Rail Data-driven',
  args: {
    selectedNav: 'home',
    navExpanded: false,
    drawerOpen: false,
    navigation: nav5Items,
  },
  parameters: {
    docs: {
      description: {
        story: `
### Tablet - Navigation Rail (Data-driven)

At tablet width (840-1199px), navigation displays as a collapsed rail
with icons and labels. Click the menu button to expand.

**Breakpoint:** expanded (840–1199px)
        `,
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      .navigation=${args.navigation}
      style="height: 600px; width: 900px;"
    >
      <div>
        <h1>Navigation Rail (Tablet)</h1>
        <p>Width: 900px → Navigation Rail</p>
        <p>Click the menu button to expand the rail.</p>
      </div>
    </md-app-layout>
  `,
};

export const TabletRailSlotBased: Story = {
  name: '4.2 Tablet: Rail Slot-based',
  args: {
    selectedNav: 'home',
    navExpanded: false,
    drawerOpen: false,
    navigation: [],
  },
  parameters: {
    docs: {
      description: {
        story: `
### Tablet - Navigation Rail (Slot-based)

Navigation rail with items defined via slots.
        `,
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      style="height: 600px; width: 900px;"
    >
      <md-nav-item slot="nav" value="home" label="Home" icon="home" selected></md-nav-item>
      <md-nav-item slot="nav" value="search" label="Search" icon="search"></md-nav-item>
      <md-nav-item slot="nav" value="explore" label="Explore" icon="explore"></md-nav-item>
      <md-nav-item slot="nav" value="library" label="Library" icon="video_library"></md-nav-item>
      <md-nav-item slot="nav" value="profile" label="Profile" icon="person"></md-nav-item>

      <div>
        <h1>Navigation Rail (Slot-based)</h1>
        <p>Width: 900px → Navigation Rail</p>
        <p>Items defined via slots.</p>
      </div>
    </md-app-layout>
  `,
};

export const DesktopExpandedDataDriven: Story = {
  name: '4.3 Desktop: Expanded Data-driven',
  args: {
    selectedNav: 'home',
    navExpanded: true,
    drawerOpen: false,
    navigation: nav5Items,
  },
  parameters: {
    docs: {
      description: {
        story: `
### Desktop - Expanded Navigation (Data-driven)

At desktop width (1200px+), navigation is expanded by default,
showing icons with full labels.

**Breakpoint:** large (1200–1599px)
        `,
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      .navigation=${args.navigation}
      style="height: 600px; width: 1280px;"
    >
      <div>
        <h1>Expanded Navigation (Desktop)</h1>
        <p>Width: 1280px → Expanded by default</p>
        <p>Navigation defined via <code>navigation</code> property.</p>
      </div>
    </md-app-layout>
  `,
};

export const DesktopExpandedSlotBased: Story = {
  name: '4.4 Desktop: Expanded Slot-based',
  args: {
    selectedNav: 'home',
    navExpanded: true,
    drawerOpen: false,
    navigation: [],
  },
  parameters: {
    docs: {
      description: {
        story: `
### Desktop - Expanded Navigation (Slot-based)

Expanded navigation with items defined via slots.
        `,
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      style="height: 600px; width: 1280px;"
    >
      <md-nav-item slot="nav" value="home" label="Home" icon="home" selected></md-nav-item>
      <md-nav-item slot="nav" value="search" label="Search" icon="search"></md-nav-item>
      <md-nav-item slot="nav" value="explore" label="Explore" icon="explore"></md-nav-item>
      <md-nav-item slot="nav" value="library" label="Library" icon="video_library"></md-nav-item>
      <md-nav-item slot="nav" value="profile" label="Profile" icon="person"></md-nav-item>

      <div>
        <h1>Expanded Navigation (Slot-based)</h1>
        <p>Width: 1280px → Expanded by default</p>
        <p>Items defined via slots.</p>
      </div>
    </md-app-layout>
  `,
};

export const DesktopSectionsDataDriven: Story = {
  name: '4.5 Desktop: Sections Data-driven',
  args: {
    selectedNav: 'home',
    navExpanded: true,
    drawerOpen: false,
    navigation: navWithSections,
  },
  parameters: {
    docs: {
      description: {
        story: `
### Desktop - Sections (Data-driven)

Expanded navigation with sections at desktop width.
Sections display with labels in the expanded rail.
        `,
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      .navigation=${args.navigation}
      style="height: 600px; width: 1280px;"
    >
      <div>
        <h1>Sections (Desktop)</h1>
        <p>Width: 1280px → Expanded with sections</p>
        <p>Sections display with labels.</p>
      </div>
    </md-app-layout>
  `,
};

export const DesktopSectionsSlotBased: Story = {
  name: '4.6 Desktop: Sections Slot-based',
  args: {
    selectedNav: 'home',
    navExpanded: true,
    drawerOpen: false,
    navigation: [],
  },
  parameters: {
    docs: {
      description: {
        story: `
### Desktop - Sections (Slot-based)

Expanded navigation with sections defined via \`md-nav-section\` components.
        `,
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      style="height: 600px; width: 1280px;"
    >
      <md-nav-item slot="nav" value="home" label="Home" icon="home" selected></md-nav-item>
      <md-nav-item slot="nav" value="search" label="Search" icon="search"></md-nav-item>

      <md-nav-section slot="nav" label="Library">
        <md-nav-item value="favorites" label="Favorites" icon="favorite"></md-nav-item>
        <md-nav-item value="playlists" label="Playlists" icon="playlist_play"></md-nav-item>
        <md-nav-item value="history" label="History" icon="history"></md-nav-item>
      </md-nav-section>

      <md-nav-section slot="nav" label="Account">
        <md-nav-item value="profile" label="Profile" icon="person"></md-nav-item>
        <md-nav-item value="settings" label="Settings" icon="settings"></md-nav-item>
      </md-nav-section>

      <div>
        <h1>Sections via Slot (Desktop)</h1>
        <p>Width: 1280px → Expanded with sections</p>
        <p>Sections defined via <code>md-nav-section</code>.</p>
      </div>
    </md-app-layout>
  `,
};

export const DesktopHierarchical: Story = {
  name: '4.7 Desktop: Hierarchical Inline-expand',
  args: {
    selectedNav: 'music',
    navExpanded: true,
    drawerOpen: false,
    navigation: hierarchicalNav,
  },
  parameters: {
    docs: {
      description: {
        story: `
### Desktop - Hierarchical Navigation (Inline Expand)

At desktop width, hierarchical navigation uses inline expand/collapse
instead of slide animations. Parent items toggle their children inline.

**Difference from mobile:**
- Mobile: Slide animation replaces content
- Desktop: Inline expand with chevron rotation
        `,
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      .navigation=${args.navigation}
      style="height: 600px; width: 1280px;"
      @nav-change=${(e: CustomEvent) => console.log('nav-change:', e.detail)}
    >
      <div>
        <h1>Hierarchical (Desktop)</h1>
        <p>Width: 1280px → Inline expand/collapse</p>
        <p>Click <strong>Library</strong> or <strong>Explore</strong> to expand inline.</p>
        <p>Chevron rotates to indicate expanded state.</p>
      </div>
    </md-app-layout>
  `,
};

// ============================================================
// CATEGORY 5: SPECIAL CASES
// ============================================================

export const WithBadges: Story = {
  name: '5.1 Special: With Badges',
  args: {
    selectedNav: 'home',
    navExpanded: false,
    drawerOpen: false,
    navigation: [
      { value: 'home', label: 'Home', icon: 'home' },
      { value: 'search', label: 'Search', icon: 'search' },
      { value: 'notifications', label: 'Notifications', icon: 'notifications', badge: '3' },
      { value: 'messages', label: 'Messages', icon: 'mail', badge: '12' },
      { value: 'profile', label: 'Profile', icon: 'person' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: `
### Special - Navigation with Badges

Navigation items can display badges for notifications or counts.
        `,
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      .navigation=${args.navigation}
      style="height: 600px; width: 375px;"
    >
      <div>
        <h1>Navigation with Badges</h1>
        <p>Items can display badges for notifications.</p>
      </div>
    </md-app-layout>
  `,
};

export const DrawerOnlyItems: Story = {
  name: '5.2 Special: Drawer-only Items',
  args: {
    selectedNav: 'home',
    navExpanded: false,
    drawerOpen: false,
    navigation: [
      { value: 'home', label: 'Home', icon: 'home' },
      { value: 'search', label: 'Search', icon: 'search' },
      { value: 'favorites', label: 'Favorites', icon: 'favorite' },
      { value: 'help', label: 'Help', icon: 'help', drawerOnly: true },
      { value: 'settings', label: 'Settings', icon: 'settings', drawerOnly: true },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: `
### Special - Drawer-only Items

Items with \`drawerOnly: true\` only appear in the drawer,
not in the bottom bar. Useful for secondary actions.

**Bar shows:** 3 items (Home, Search, Favorites)
**Drawer shows:** 5 items (all including Help, Settings)
        `,
      },
      source: {
        code: `
const navigation = [
  { value: 'home', label: 'Home', icon: 'home' },
  { value: 'search', label: 'Search', icon: 'search' },
  { value: 'favorites', label: 'Favorites', icon: 'favorite' },
  { value: 'help', label: 'Help', icon: 'help', drawerOnly: true },
  { value: 'settings', label: 'Settings', icon: 'settings', drawerOnly: true },
];
`,
        language: 'typescript',
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      .navigation=${args.navigation}
      style="height: 600px; width: 375px;"
    >
      <span slot="top-app-bar">My App</span>
      <div>
        <h1>Drawer-only Items</h1>
        <p>Bar shows 3 items, drawer shows 5.</p>
        <p>Help and Settings only appear in drawer.</p>
        <p>Click menu to see all items.</p>
      </div>
    </md-app-layout>
  `,
};

export const WithTopAppBarContent: Story = {
  name: '5.3 Special: Top App Bar Content',
  args: {
    selectedNav: 'home',
    navExpanded: false,
    drawerOpen: false,
    navigation: nav4Items,
  },
  parameters: {
    docs: {
      description: {
        story: `
### Special - Top App Bar with Title

The \`top-app-bar\` slot accepts content that displays next to the menu button.
Typically used for app title or page title.
        `,
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      .navigation=${args.navigation}
      style="height: 600px; width: 375px;"
    >
      <span slot="top-app-bar">My Application</span>
      <div>
        <h1>Top App Bar Content</h1>
        <p>The title "My Application" is displayed in the top app bar.</p>
      </div>
    </md-app-layout>
  `,
};

export const ExtraLargeScreen: Story = {
  name: '5.4 Special: Extra-Large Screen',
  args: {
    selectedNav: 'home',
    navExpanded: true,
    drawerOpen: false,
    navigation: nav5Items,
  },
  parameters: {
    docs: {
      description: {
        story: `
### Special - Extra-Large Screen (≥1600px)

At extra-large width, navigation is permanently expanded
and cannot be collapsed.

**Breakpoint:** extra-large (≥1600px)
        `,
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      .navigation=${args.navigation}
      style="height: 600px; width: 1700px;"
    >
      <div>
        <h1>Extra-Large Screen</h1>
        <p>Width: 1700px → Permanently expanded</p>
        <p>Navigation cannot be collapsed at this width.</p>
      </div>
    </md-app-layout>
  `,
};

// ============================================================
// CATEGORY 6: NAVIGATION WITH LINKS (href)
// ============================================================

export const NavWithLinks: Story = {
  name: '6.1 Links: Data-driven with href',
  args: {
    selectedNav: 'home',
    navExpanded: false,
    drawerOpen: false,
    navigation: navWithLinks,
  },
  parameters: {
    docs: {
      description: {
        story: `
### Navigation with Links (href property)

Navigation items with \`href\` property render as \`<a>\` tags instead of \`<button>\`.
This enables native browser navigation while still emitting \`nav-item-click\` events.

**Features:**
- Renders as \`<a>\` tag for SEO and accessibility
- Supports \`target="_blank"\` for external links
- Uses \`aria-current="page"\` instead of \`aria-selected\`
- Still emits \`nav-item-click\` for selection tracking

**Use cases:**
- Multi-page applications (MPA)
- External links (GitHub, documentation)
- Deep-linkable navigation
        `,
      },
      source: {
        code: `
const navigation = [
  { value: 'home', label: 'Home', icon: 'home', href: '/home' },
  { value: 'search', label: 'Search', icon: 'search', href: '/search' },
  { value: 'docs', label: 'Docs', icon: 'description', href: '/docs' },
  { value: 'github', label: 'GitHub', icon: 'code', href: 'https://github.com', target: '_blank' },
];

html\`
  <md-app-layout
    selected-nav="home"
    .navigation=\${navigation}
  >
    <div>Content</div>
  </md-app-layout>
\`
`,
        language: 'typescript',
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      .navigation=${args.navigation}
      style="height: 600px; width: 375px;"
      @nav-change=${(e: CustomEvent) => console.log('nav-change:', e.detail)}
    >
      <span slot="top-app-bar">Link Navigation</span>
      <div>
        <h1>Navigation with Links</h1>
        <p>Items render as <code>&lt;a&gt;</code> tags.</p>
        <p>Click <strong>GitHub</strong> to open in new tab.</p>
        <p>Check the browser URL bar when clicking items.</p>
      </div>
    </md-app-layout>
  `,
};

export const NavLinksSlotBased: Story = {
  name: '6.2 Links: Slot-based with href',
  args: {
    selectedNav: 'home',
    navExpanded: false,
    drawerOpen: false,
    navigation: [],
  },
  parameters: {
    docs: {
      description: {
        story: `
### Slot-based Navigation with Links

Same link functionality available for slot-based navigation using the \`href\` attribute on \`md-nav-item\`.
        `,
      },
      source: {
        code: `
<md-app-layout selected-nav="home">
  <span slot="top-app-bar">My App</span>

  <md-nav-item slot="nav" value="home" label="Home" icon="home" href="#home"></md-nav-item>
  <md-nav-item slot="nav" value="about" label="About" icon="info" href="#about"></md-nav-item>
  <md-nav-item slot="nav" value="contact" label="Contact" icon="mail" href="#contact"></md-nav-item>
  <md-nav-item slot="nav" value="external" label="External" icon="open_in_new" href="https://example.com" target="_blank"></md-nav-item>

  <div>Content</div>
</md-app-layout>
`,
        language: 'html',
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      style="height: 600px; width: 375px;"
      @nav-change=${(e: CustomEvent) => console.log('nav-change:', e.detail)}
    >
      <span slot="top-app-bar">Link Navigation</span>

      <md-nav-item slot="nav" value="home" label="Home" icon="home" href="#home"></md-nav-item>
      <md-nav-item slot="nav" value="about" label="About" icon="info" href="#about"></md-nav-item>
      <md-nav-item slot="nav" value="contact" label="Contact" icon="mail" href="#contact"></md-nav-item>
      <md-nav-item slot="nav" value="external" label="External" icon="open_in_new" href="https://example.com" target="_blank"></md-nav-item>

      <div>
        <h1>Slot-based Links</h1>
        <p>Navigation items with <code>href</code> attribute.</p>
        <p>Click <strong>External</strong> to open in new tab.</p>
      </div>
    </md-app-layout>
  `,
};

export const NavLinksMixedMode: Story = {
  name: '6.3 Links: Mixed (href + button)',
  args: {
    selectedNav: 'home',
    navExpanded: false,
    drawerOpen: false,
    navigation: [
      { value: 'home', label: 'Home', icon: 'home', href: '#home' },
      { value: 'search', label: 'Search', icon: 'search' }, // No href = button
      { value: 'settings', label: 'Settings', icon: 'settings' }, // No href = button
      { value: 'help', label: 'Help', icon: 'help', href: 'https://help.example.com', target: '_blank' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: `
### Mixed Navigation (Links + Buttons)

You can mix items with and without \`href\`. Items without \`href\` render as buttons
for SPA-style navigation, while items with \`href\` render as links.

**In this example:**
- **Home, Help**: Links (\`<a>\` tags)
- **Search, Settings**: Buttons (SPA navigation)
        `,
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      .navigation=${args.navigation}
      style="height: 600px; width: 375px;"
      @nav-change=${(e: CustomEvent) => console.log('nav-change:', e.detail)}
    >
      <span slot="top-app-bar">Mixed Navigation</span>
      <div>
        <h1>Mixed Link/Button Navigation</h1>
        <p><strong>Home, Help</strong>: render as links</p>
        <p><strong>Search, Settings</strong>: render as buttons</p>
        <p>Open DevTools to inspect the elements.</p>
      </div>
    </md-app-layout>
  `,
};

export const NavLinksDesktop: Story = {
  name: '6.4 Links: Desktop Rail with href',
  args: {
    selectedNav: 'home',
    navExpanded: true,
    drawerOpen: false,
    navigation: navWithLinks,
  },
  parameters: {
    docs: {
      description: {
        story: `
### Desktop Navigation Rail with Links

Link navigation also works in expanded rail mode on desktop.
        `,
      },
    },
  },
  render: (args) => html`
    <md-app-layout
      selected-nav=${args.selectedNav}
      ?nav-expanded=${args.navExpanded}
      ?drawer-open=${args.drawerOpen}
      .navigation=${args.navigation}
      style="height: 600px; width: 1280px;"
      @nav-change=${(e: CustomEvent) => console.log('nav-change:', e.detail)}
    >
      <div>
        <h1>Desktop Rail with Links</h1>
        <p>Width: 1280px → Expanded rail</p>
        <p>Navigation items render as links.</p>
        <p>Click <strong>GitHub</strong> to open in new tab.</p>
      </div>
    </md-app-layout>
  `,
};
