import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@material-wc/buttons';
import type { MdButton } from '@material-wc/buttons';

type ButtonArgs = Pick<MdButton, 'variant' | 'size' | 'disabled' | 'fullWidth' | 'iconPosition'> & {
  label: string;
};

const meta: Meta<ButtonArgs> = {
  title: 'MD3 Components/Buttons/Button',
  component: 'md-button',
  tags: ['autodocs', 'new'],
  parameters: {
    docs: {
      description: {
        component: `
## Wann verwenden?

Buttons kommunizieren Aktionen, die Benutzer ausführen können. Sie werden typischerweise in der gesamten UI platziert, in Bereichen wie:
- Dialoge
- Formulare
- Karten
- Toolbars

## Varianten-Auswahl (nach Priorität)

| Variante | Verwendung | Beispiele |
|----------|------------|-----------|
| **Filled** | Höchste Priorität, primäre Aktionen | "Speichern", "Senden", "Bestätigen" |
| **Tonal** | Mittlere Priorität, sekundäre Aktionen | "Bearbeiten", "Teilen" |
| **Elevated** | Wenn Abhebung vom Hintergrund nötig | Aktionen auf Bildern oder farbigen Flächen |
| **Outlined** | Niedrigere Priorität, alternative Aktionen | "Abbrechen", "Zurück" |
| **Text** | Niedrigste Priorität, tertiäre Aktionen | "Mehr erfahren", "Details anzeigen" |

## Best Practices

- **Eine primäre Aktion pro Ansicht:** Verwende nur einen Filled Button pro logischen Bereich
- **Klare Labels:** Beschreibe die Aktion, nicht das Objekt ("Speichern" statt "Dokument")
- **Konsistente Hierarchie:** Kombiniere Varianten sinnvoll (Filled + Outlined, nicht zwei Filled)
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'text', 'elevated', 'tonal'],
      description: 'The visual style variant of the button',
      table: {
        defaultValue: { summary: 'filled' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button takes the full width',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    iconPosition: {
      control: 'select',
      options: ['start', 'end'],
      description: 'Position of the icon relative to the text',
      table: {
        defaultValue: { summary: 'start' },
      },
    },
    label: {
      control: 'text',
      description: 'The text content of the button',
    },
  },
  args: {
    variant: 'filled',
    size: 'medium',
    disabled: false,
    fullWidth: false,
    iconPosition: 'start',
    label: 'Button',
  },
  render: (args) => html`
    <md-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      ?full-width=${args.fullWidth}
    >
      ${args.label}
    </md-button>
  `,
};

export default meta;
type Story = StoryObj<ButtonArgs>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Filled Button',
  },
  parameters: {
    docs: {
      description: {
        story: '**Höchste Priorität.** Für die wichtigste Aktion auf einer Seite oder in einem Abschnitt. Beispiele: "Kaufen", "Speichern", "Senden".',
      },
    },
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Outlined Button',
  },
  parameters: {
    docs: {
      description: {
        story: '**Mittlere Priorität.** Für sekundäre Aktionen, die eine Alternative zur primären Aktion darstellen. Beispiele: "Abbrechen", "Zurück", "Mehr Details".',
      },
    },
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Text Button',
  },
  parameters: {
    docs: {
      description: {
        story: '**Niedrigste Priorität.** Für tertiäre Aktionen oder Navigation. Weniger visuelles Gewicht, ideal für "Mehr erfahren", "Überspringen", Links in Texten.',
      },
    },
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    label: 'Elevated Button',
  },
  parameters: {
    docs: {
      description: {
        story: '**Für Kontrast.** Wenn der Button vom Hintergrund abgehoben werden muss, z.B. auf Bildern, farbigen Flächen oder in Karten mit wenig Kontrast.',
      },
    },
  },
};

export const Tonal: Story = {
  args: {
    variant: 'tonal',
    label: 'Tonal Button',
  },
  parameters: {
    docs: {
      description: {
        story: '**Mittlere Priorität, sanfter.** Alternative zu Filled für weniger dominante primäre Aktionen. Gut für UI mit vielen Aktionen, wo Filled zu dominant wäre.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    variant: 'filled',
    label: 'Disabled Button',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button variant="filled">Filled</md-button>
      <md-button variant="outlined">Outlined</md-button>
      <md-button variant="text">Text</md-button>
      <md-button variant="elevated">Elevated</md-button>
      <md-button variant="tonal">Tonal</md-button>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button size="small">Small</md-button>
      <md-button size="medium">Medium</md-button>
      <md-button size="large">Large</md-button>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const SizesWithVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Filled</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-button variant="filled" size="small">Small</md-button>
          <md-button variant="filled" size="medium">Medium</md-button>
          <md-button variant="filled" size="large">Large</md-button>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Outlined</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-button variant="outlined" size="small">Small</md-button>
          <md-button variant="outlined" size="medium">Medium</md-button>
          <md-button variant="outlined" size="large">Large</md-button>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Tonal</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-button variant="tonal" size="small">Small</md-button>
          <md-button variant="tonal" size="medium">Medium</md-button>
          <md-button variant="tonal" size="large">Large</md-button>
        </div>
      </div>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const DisabledStates: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button variant="filled" disabled>Filled</md-button>
      <md-button variant="outlined" disabled>Outlined</md-button>
      <md-button variant="text" disabled>Text</md-button>
      <md-button variant="elevated" disabled>Elevated</md-button>
      <md-button variant="tonal" disabled>Tonal</md-button>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const FullWidth: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
      <md-button variant="filled" full-width>Full Width Filled</md-button>
      <md-button variant="outlined" full-width>Full Width Outlined</md-button>
      <md-button variant="tonal" full-width>Full Width Tonal</md-button>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const AsLink: Story = {
  render: () => html`
    <md-button href="https://material.io" target="_blank">
      Visit Material Design
    </md-button>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const WithIcon: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button variant="filled" size="small">
        <span slot="icon" class="material-symbols-outlined">add</span>
        Add
      </md-button>
      <md-button variant="filled" size="medium">
        <span slot="icon" class="material-symbols-outlined">add</span>
        Add Item
      </md-button>
      <md-button variant="filled" size="large">
        <span slot="icon" class="material-symbols-outlined">add</span>
        Add New Item
      </md-button>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const WithIconVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
      <md-button variant="filled">
        <span slot="icon" class="material-symbols-outlined">send</span>
        Send
      </md-button>
      <md-button variant="outlined">
        <span slot="icon" class="material-symbols-outlined">edit</span>
        Edit
      </md-button>
      <md-button variant="tonal">
        <span slot="icon" class="material-symbols-outlined">download</span>
        Download
      </md-button>
      <md-button variant="elevated">
        <span slot="icon" class="material-symbols-outlined">share</span>
        Share
      </md-button>
      <md-button variant="text">
        <span slot="icon" class="material-symbols-outlined">delete</span>
        Delete
      </md-button>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const IconPosition: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Icon Start (Default)</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-button variant="filled">
            <span slot="icon" class="material-symbols-outlined">arrow_back</span>
            Back
          </md-button>
          <md-button variant="outlined">
            <span slot="icon" class="material-symbols-outlined">add</span>
            Add Item
          </md-button>
          <md-button variant="tonal">
            <span slot="icon" class="material-symbols-outlined">download</span>
            Download
          </md-button>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Icon End</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-button variant="filled" icon-position="end">
            <span slot="icon" class="material-symbols-outlined">arrow_forward</span>
            Next
          </md-button>
          <md-button variant="outlined" icon-position="end">
            <span slot="icon" class="material-symbols-outlined">open_in_new</span>
            Open Link
          </md-button>
          <md-button variant="tonal" icon-position="end">
            <span slot="icon" class="material-symbols-outlined">send</span>
            Send
          </md-button>
        </div>
      </div>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};
