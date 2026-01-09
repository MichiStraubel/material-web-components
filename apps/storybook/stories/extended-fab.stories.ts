import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@material-wc/buttons';
import type { MdFab } from '@material-wc/buttons';

type ExtendedFabArgs = Pick<MdFab, 'variant' | 'disabled' | 'lowered'> & {
  label: string;
  showIcon: boolean;
};

const meta: Meta<ExtendedFabArgs> = {
  title: 'MD3 Components/Buttons/Extended FAB',
  component: 'md-fab',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Wann verwenden?

Der Extended FAB erweitert den Standard-FAB um ein **Text-Label**. Er ist ideal wenn:
- **Die Aktion unklar ist** - Wenn nur ein Icon nicht ausreicht, um die Aktion zu erklären
- **Mehr Kontext benötigt wird** - "Neue E-Mail" statt nur "+"
- **Branding wichtig ist** - Das Label kann die Markensprache widerspiegeln

## Extended FAB vs. Standard FAB

| Aspekt | Standard FAB | Extended FAB |
|--------|--------------|--------------|
| **Größe** | Kompakt (56dp) | Breiter (variabel) |
| **Klarheit** | Icon muss selbsterklärend sein | Label erklärt die Aktion |
| **Verwendung** | Etablierte Aktionen (z.B. "+") | Spezifische Aktionen |

## Typische Verwendungen

- **E-Mail Apps:** "Verfassen" mit Stift-Icon
- **Notizen Apps:** "Neue Notiz" mit Plus-Icon
- **Kalender:** "Neuer Termin" mit Kalender-Icon
- **Chat:** "Neue Nachricht" mit Chat-Icon

## Best Practices

- **Kurze Labels:** 1-2 Wörter, aktionsorientiert ("Erstellen", "Hinzufügen")
- **Icon + Label:** Verwende beide für maximale Klarheit
- **Konsistente Position:** Wie der Standard-FAB, typischerweise unten rechts
- **Responsive:** Kann bei wenig Platz zum Standard-FAB kollabieren
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['surface', 'primary', 'secondary', 'tertiary'],
      description: 'The color variant of the FAB',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the FAB is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    lowered: {
      control: 'boolean',
      description: 'Whether the FAB has lowered elevation',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'The label text',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show an icon',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
  args: {
    variant: 'primary',
    disabled: false,
    lowered: false,
    label: 'Compose',
    showIcon: true,
  },
  render: (args) => html`
    <md-fab
      extended
      variant=${args.variant}
      ?disabled=${args.disabled}
      ?lowered=${args.lowered}
      aria-label=${args.label}
    >
      ${args.showIcon
        ? html`<span slot="icon" class="material-symbols-outlined">edit</span>`
        : ''}
      ${args.label}
    </md-fab>
  `,
};

export default meta;
type Story = StoryObj<ExtendedFabArgs>;

export const Default: Story = {};

export const WithoutIcon: Story = {
  args: {
    showIcon: false,
    label: 'New Message',
  },
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <md-fab variant="surface" extended aria-label="Navigate">
        <span slot="icon" class="material-symbols-outlined">navigation</span>
        Navigate
      </md-fab>
      <md-fab variant="primary" extended aria-label="Compose">
        <span slot="icon" class="material-symbols-outlined">edit</span>
        Compose
      </md-fab>
      <md-fab variant="secondary" extended aria-label="Share">
        <span slot="icon" class="material-symbols-outlined">share</span>
        Share
      </md-fab>
      <md-fab variant="tertiary" extended aria-label="Download">
        <span slot="icon" class="material-symbols-outlined">download</span>
        Download
      </md-fab>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const WithAndWithoutIcon: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <p style="margin: 0; font-size: 14px; color: #666;">
        Extended FABs can optionally omit the icon (unique to extended variant)
      </p>
      <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
        <md-fab extended aria-label="With icon">
          <span slot="icon" class="material-symbols-outlined">edit</span>
          Compose
        </md-fab>
        <md-fab extended aria-label="Without icon">
          New Message
        </md-fab>
      </div>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const Lowered: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-fab extended aria-label="Normal elevation">
        <span slot="icon" class="material-symbols-outlined">add</span>
        Create
      </md-fab>
      <md-fab extended lowered aria-label="Lowered elevation">
        <span slot="icon" class="material-symbols-outlined">add</span>
        Create
      </md-fab>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const PositionedExample: Story = {
  render: () => html`
    <div style="position: relative; width: 100%; height: 300px; background: #f5f5f5; border-radius: 8px;">
      <md-fab
        extended
        style="position: absolute; bottom: 16px; right: 16px;"
        aria-label="Compose email"
      >
        <span slot="icon" class="material-symbols-outlined">edit</span>
        Compose
      </md-fab>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};
