import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
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

## Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`click\` | Native Event | Wird ausgelöst, wenn der Leading Button geklickt wird (value über \`element.value\` abrufbar) |
| \`open\` | - | Wird ausgelöst, wenn das Menü geöffnet wird |
| \`close\` | - | Wird ausgelöst, wenn das Menü geschlossen wird |
| \`change\` | \`{ value: string }\` | Wird ausgelöst, wenn ein Menü-Item ausgewählt wird |
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
      <button slot="menu" role="menuitem" value="option1">Option 1</button>
      <button slot="menu" role="menuitem" value="option2">Option 2</button>
      <button slot="menu" role="menuitem" value="option3">Option 3</button>
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
          <button slot="menu" role="menuitem" value="save-as">Save As...</button>
          <button slot="menu" role="menuitem" value="save-copy">Save a Copy</button>
          <button slot="menu" role="menuitem" value="save-template">Save as Template</button>
        </md-split-button>
      </div>
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Send with Options</h3>
        <md-split-button variant="tonal"
          @md-menu-item-click=${(e: CustomEvent) => console.log('Send option:', e.detail.value)}
        >
          <span slot="leading-icon" class="material-symbols-outlined">send</span>
          Send
          <button slot="menu" role="menuitem" value="send-now">Send Now</button>
          <button slot="menu" role="menuitem" value="schedule">Schedule Send</button>
          <button slot="menu" role="menuitem" value="send-test">Send Test Email</button>
        </md-split-button>
      </div>
      <div>
        <h3 style="margin: 0 0 8px; font-size: 14px; color: #666;">Download Formats</h3>
        <md-split-button variant="outlined"
          @md-menu-item-click=${(e: CustomEvent) => console.log('Download format:', e.detail.value)}
        >
          <span slot="leading-icon" class="material-symbols-outlined">download</span>
          Download
          <button slot="menu" role="menuitem" value="pdf">Download as PDF</button>
          <button slot="menu" role="menuitem" value="docx">Download as DOCX</button>
          <button slot="menu" role="menuitem" value="txt">Download as TXT</button>
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
          <button slot="menu" role="menuitem" value="save-as">
            <span class="material-symbols-outlined">save_as</span>
            Save As...
          </button>
          <button slot="menu" role="menuitem" value="save-copy">
            <span class="material-symbols-outlined">file_copy</span>
            Save a Copy
          </button>
          <button slot="menu" role="menuitem" value="export">
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
          <button slot="menu" role="menuitem" value="email">
            <span class="material-symbols-outlined">mail</span>
            Email
          </button>
          <button slot="menu" role="menuitem" value="link">
            <span class="material-symbols-outlined">link</span>
            Copy Link
          </button>
          <button slot="menu" role="menuitem" value="qr">
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

export const EventHandling: Story = {
  render: () => {
    const buttonRef = createRef<Element>();

    const setupListener = () => {
      const el = buttonRef.value as HTMLElement | undefined;
      if (el && !(el as HTMLElement & { _listenerAttached?: boolean })._listenerAttached) {
        (el as HTMLElement & { _listenerAttached?: boolean })._listenerAttached = true;

        const addEvent = (eventName: string, color: string, details?: string) => {
          const output = el.closest('.event-demo-container')?.querySelector('.event-output');
          if (output) {
            const timestamp = new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 3 });
            const eventLine = `<div style="margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid #333;"><span style="color: #666; font-size: 11px;">${timestamp}</span> <span style="color: ${color}; font-weight: 600;">${eventName}</span>${details ? `\n${details}` : ''}</div>`;

            const placeholder = output.querySelector('.placeholder');
            if (placeholder) {
              placeholder.remove();
            }
            output.insertAdjacentHTML('afterbegin', eventLine);
          }
        };

        el.addEventListener('click', () => {
          const splitButton = el as MdSplitButton;
          const details = `<span style="color: #81c784;">element.value:</span> <span style="color: #ef9a9a;">"${splitButton.value}"</span>`;
          addEvent('click', '#4fc3f7', details);
          console.log('click - value:', splitButton.value);
        });

        el.addEventListener('open', () => {
          addEvent('open', '#ffb74d', '<span style="color: #666;">(menu opened)</span>');
          console.log('open');
        });

        el.addEventListener('close', () => {
          addEvent('close', '#ff8a65', '<span style="color: #666;">(menu closed)</span>');
          console.log('close');
        });

        el.addEventListener('change', (e: Event) => {
          const customEvent = e as CustomEvent<{ value: string }>;
          const details = `<span style="color: #81c784;">Payload:</span> { <span style="color: #90caf9;">value</span>: <span style="color: #ef9a9a;">"${customEvent.detail.value}"</span> }`;
          addEvent('change', '#81c784', details);
          console.log('change:', customEvent.detail);
        });
      }
    };

    queueMicrotask(setupListener);

    return html`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke die Buttons, um die Events zu testen. Alle Events werden im Log angezeigt.
          </p>
        </div>
        <md-split-button ${ref(buttonRef)} id="demo-split-button" value="save">
          <span slot="leading-icon" class="material-symbols-outlined">save</span>
          Save
          <button slot="menu" role="menuitem" value="save-as">Save As...</button>
          <button slot="menu" role="menuitem" value="save-copy">Save a Copy</button>
          <button slot="menu" role="menuitem" value="save-template">Save as Template</button>
        </md-split-button>
        <div class="event-output" style="font-size: 13px; font-family: 'SF Mono', Monaco, 'Courier New', monospace; padding: 16px; background: #1e1e1e; color: #d4d4d4; border-radius: 8px; min-height: 100px; max-height: 200px; overflow-y: auto; line-height: 1.5;"><span class="placeholder" style="color: #666;">Klicke die Buttons, um Events zu sehen...</span></div>

        <div style="margin-top: 16px;">
          <h4 style="margin: 0 0 12px; font-size: 14px; color: #333;">Beispiel-Code</h4>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0 0 12px 0; font-size: 13px; line-height: 1.5;"><code>&lt;md-split-button id="save-split-button" value="save"&gt;
  &lt;span slot="leading-icon" class="material-symbols-outlined"&gt;save&lt;/span&gt;
  Save
  &lt;button slot="menu" role="menuitem" value="save-as"&gt;Save As...&lt;/button&gt;
  &lt;button slot="menu" role="menuitem" value="save-copy"&gt;Save a Copy&lt;/button&gt;
&lt;/md-split-button&gt;</code></pre>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0; font-size: 13px; line-height: 1.5;"><code>const splitButton = document.querySelector('#save-split-button');

// Leading button click (primary action)
splitButton.addEventListener('click', () =&gt; {
  console.log('Primary action, value:', splitButton.value);
});

// Menu lifecycle
splitButton.addEventListener('open', () =&gt; console.log('Menu opened'));
splitButton.addEventListener('close', () =&gt; console.log('Menu closed'));

// Menu item selection
splitButton.addEventListener('change', (e) =&gt; {
  console.log('Selected:', e.detail.value);
});</code></pre>
        </div>
      </div>
    `;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: `
### Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`click\` | Native Event | Leading Button wurde geklickt (value über \`element.value\`) |
| \`open\` | - | Menü wurde geöffnet |
| \`close\` | - | Menü wurde geschlossen |
| \`change\` | \`{ value }\` | Menü-Item wurde ausgewählt |

### Beispiel-Code

\`\`\`html
<md-split-button id="save-split-button" value="save">
  <span slot="leading-icon" class="material-symbols-outlined">save</span>
  Save
  <button slot="menu" role="menuitem" value="save-as">Save As...</button>
  <button slot="menu" role="menuitem" value="save-copy">Save a Copy</button>
</md-split-button>
\`\`\`

\`\`\`javascript
const splitButton = document.querySelector('#save-split-button');

// Leading button click (primary action)
splitButton.addEventListener('click', () => {
  console.log('Primary action, value:', splitButton.value);
});

// Menu lifecycle
splitButton.addEventListener('open', () => console.log('Menu opened'));
splitButton.addEventListener('close', () => console.log('Menu closed'));

// Menu item selection
splitButton.addEventListener('change', (e) => {
  console.log('Selected:', e.detail.value);
});
\`\`\`
        `,
      },
    },
  },
};
