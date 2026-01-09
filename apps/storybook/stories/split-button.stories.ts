import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@material-wc/buttons';
import type { MdSplitButton } from '@material-wc/buttons';

type SplitButtonArgs = Pick<MdSplitButton, 'variant' | 'size' | 'disabled'> & {
  label: string;
  showIcon: boolean;
};

const meta: Meta<SplitButtonArgs> = {
  title: 'MD3 Components/Buttons/Split Button',
  component: 'md-split-button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Wann verwenden?

Der Split Button kombiniert eine **primäre Aktion** mit einem **Dropdown-Menü** für verwandte Optionen. Ideal für:
- **Aktionen mit Varianten** - "Speichern" + "Speichern unter...", "Kopie speichern"
- **Standard + Alternativen** - "Senden" + "Später senden", "Als Entwurf speichern"
- **Kontextuelle Optionen** - "Download" + verschiedene Formate (PDF, DOCX, etc.)

## Wann NICHT verwenden?

- **Unabhängige Aktionen:** Wenn die Menü-Optionen nichts mit der primären Aktion zu tun haben
- **Einfache Aktionen:** Wenn nur eine Aktion ohne Varianten existiert → normaler Button
- **Navigation:** Für reine Navigation → Text Button oder Link

## Struktur

\`\`\`
┌─────────────┬───┐
│   Speichern │ ▼ │  ← Leading Button + Trailing Button
└─────────────┴───┘
       │
       ▼
┌─────────────────┐
│ Speichern unter │  ← Dropdown-Menü
│ Kopie speichern │
│ Als Vorlage     │
└─────────────────┘
\`\`\`

## Best Practices

- **Klare Hierarchie:** Die primäre Aktion (Leading Button) sollte die häufigste Aktion sein
- **Verwandte Optionen:** Menü-Items sollten Varianten der primären Aktion sein
- **Konsistente Icons:** Verwende Icons in Menü-Items für bessere Erkennbarkeit
- **Beschreibende Labels:** Menü-Items sollten klar beschreiben, was passiert
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'tonal', 'outlined', 'elevated'],
      description: 'The color variant of the split button',
      table: {
        defaultValue: { summary: 'filled' },
      },
    },
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      description: 'The size of the split button',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the split button is disabled',
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
      description: 'Whether to show a leading icon',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    variant: 'filled',
    size: 'medium',
    disabled: false,
    label: 'Save',
    showIcon: false,
  },
  render: (args) => html`
    <md-split-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
    >
      ${args.showIcon
        ? html`<span slot="leading-icon" class="material-symbols-outlined">save</span>`
        : ''}
      ${args.label}
      <button slot="menu" role="menuitem" data-value="option1">Option 1</button>
      <button slot="menu" role="menuitem" data-value="option2">Option 2</button>
      <button slot="menu" role="menuitem" data-value="option3">Option 3</button>
    </md-split-button>
  `,
};

export default meta;
type Story = StoryObj<SplitButtonArgs>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    showIcon: true,
  },
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <md-split-button variant="filled">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Filled
      </md-split-button>
      <md-split-button variant="tonal">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Tonal
      </md-split-button>
      <md-split-button variant="outlined">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Outlined
      </md-split-button>
      <md-split-button variant="elevated">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Elevated
      </md-split-button>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
      <md-split-button size="xsmall">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        XSmall (32dp)
      </md-split-button>
      <md-split-button size="small">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Small (36dp)
      </md-split-button>
      <md-split-button size="medium">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Medium (40dp)
      </md-split-button>
      <md-split-button size="large">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        Large (48dp)
      </md-split-button>
      <md-split-button size="xlarge">
        <span slot="leading-icon" class="material-symbols-outlined">save</span>
        XLarge (56dp)
      </md-split-button>
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

export const WithMenu: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Save with Options (fixed primary action)</h3>
        <md-split-button
          @md-leading-click=${() => console.log('Save clicked')}
          @md-menu-item-click=${(e: CustomEvent) => console.log('Menu item:', e.detail.value)}
        >
          <span slot="leading-icon" class="material-symbols-outlined">save</span>
          Save
          <button slot="menu" role="menuitem" data-value="save-as">Save As...</button>
          <button slot="menu" role="menuitem" data-value="save-copy">Save a Copy</button>
          <button slot="menu" role="menuitem" data-value="save-template">Save as Template</button>
        </md-split-button>
      </div>
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Send with Options</h3>
        <md-split-button variant="tonal"
          @md-menu-item-click=${(e: CustomEvent) => console.log('Send option:', e.detail.value)}
        >
          <span slot="leading-icon" class="material-symbols-outlined">send</span>
          Send
          <button slot="menu" role="menuitem" data-value="send-now">Send Now</button>
          <button slot="menu" role="menuitem" data-value="schedule">Schedule Send</button>
          <button slot="menu" role="menuitem" data-value="send-test">Send Test Email</button>
        </md-split-button>
      </div>
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Download Formats</h3>
        <md-split-button variant="outlined"
          @md-menu-item-click=${(e: CustomEvent) => console.log('Download format:', e.detail.value)}
        >
          <span slot="leading-icon" class="material-symbols-outlined">download</span>
          Download
          <button slot="menu" role="menuitem" data-value="pdf">Download as PDF</button>
          <button slot="menu" role="menuitem" data-value="docx">Download as DOCX</button>
          <button slot="menu" role="menuitem" data-value="txt">Download as TXT</button>
        </md-split-button>
      </div>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const WithCustomTrailingIcon: Story = {
  render: () => html`
    <md-split-button>
      <span slot="leading-icon" class="material-symbols-outlined">share</span>
      Share
      <span slot="trailing-icon" class="material-symbols-outlined">more_vert</span>
    </md-split-button>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const MenuItemsWithIcons: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">File Actions</h3>
        <md-split-button>
          <span slot="leading-icon" class="material-symbols-outlined">save</span>
          Save
          <button slot="menu" role="menuitem" data-value="save-as">
            <span class="material-symbols-outlined">save_as</span>
            Save As...
          </button>
          <button slot="menu" role="menuitem" data-value="save-copy">
            <span class="material-symbols-outlined">file_copy</span>
            Save a Copy
          </button>
          <button slot="menu" role="menuitem" data-value="export">
            <span class="material-symbols-outlined">upload</span>
            Export
          </button>
        </md-split-button>
      </div>
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Share Options</h3>
        <md-split-button variant="tonal">
          <span slot="leading-icon" class="material-symbols-outlined">share</span>
          Share
          <button slot="menu" role="menuitem" data-value="email">
            <span class="material-symbols-outlined">mail</span>
            Email
          </button>
          <button slot="menu" role="menuitem" data-value="link">
            <span class="material-symbols-outlined">link</span>
            Copy Link
          </button>
          <button slot="menu" role="menuitem" data-value="qr">
            <span class="material-symbols-outlined">qr_code</span>
            QR Code
          </button>
        </md-split-button>
      </div>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};
