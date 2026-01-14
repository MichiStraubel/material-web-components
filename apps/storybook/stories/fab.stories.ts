import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import '@material-wc/buttons';
import type { MdFab } from '@material-wc/buttons';

type FabArgs = Pick<MdFab, 'variant' | 'size' | 'disabled' | 'lowered'>;

const meta: Meta<FabArgs> = {
  title: 'MD3 Components/Buttons/FAB',
  component: 'md-fab',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Wann verwenden?

Der Floating Action Button (FAB) repräsentiert die **wichtigste Aktion** auf einem Bildschirm. Er sollte sparsam eingesetzt werden:
- **Eine FAB pro Bildschirm** - Der FAB hebt die primäre Aktion hervor
- **Konstruktive Aktionen** - Erstellen, Hinzufügen, Teilen, Erkunden
- **Nicht für destruktive Aktionen** - Löschen, Archivieren gehören nicht in einen FAB

## Varianten-Auswahl

| Variante | Verwendung |
|----------|------------|
| **Primary** | Standard für die wichtigste Aktion (Markenfarbe) |
| **Surface** | Neutraler Hintergrund, wenn Primary zu dominant |
| **Secondary** | Alternative Farbakzentuierung |
| **Tertiary** | Dritte Farbvariante für spezielle Designs |

## Größen

| Größe | Maße | Verwendung |
|-------|------|------------|
| **Small** | 40dp | Kompakte UIs, sekundäre FABs |
| **Medium** | 56dp | Standard, empfohlen für die meisten Fälle |
| **Large** | 96dp | Besonders wichtige Aktionen, große Bildschirme |

## Positionierung

Der FAB wird typischerweise **unten rechts** positioniert:
\`\`\`css
position: fixed;
bottom: 16px;
right: 16px;
\`\`\`

## Best Practices

- **Nur eine primäre Aktion:** Ein FAB pro Bildschirm, für die wichtigste Aktion
- **Konsistente Position:** Immer an der gleichen Stelle im Layout
- **Nicht bei Scroll verstecken:** Der FAB sollte immer sichtbar bleiben
- **Lowered für weniger Dominanz:** Verwende \`lowered\` wenn der FAB weniger hervorstechen soll

## Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`click\` | \`{ originalEvent: MouseEvent, value: string }\` | Wird ausgelöst, wenn der FAB geklickt wird |
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
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the FAB',
      table: {
        defaultValue: { summary: 'medium' },
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
  },
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    lowered: false,
  },
  render: (args) => html`
    <md-fab
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      ?lowered=${args.lowered}
      aria-label="Add"
    >
      <span slot="icon" class="material-symbols-outlined">add</span>
    </md-fab>
  `,
};

export default meta;
type Story = StoryObj<FabArgs>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Surface: Story = {
  args: {
    variant: 'surface',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-fab variant="surface" aria-label="Surface FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab variant="primary" aria-label="Primary FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab variant="secondary" aria-label="Secondary FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab variant="tertiary" aria-label="Tertiary FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-fab size="small" aria-label="Small FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab size="medium" aria-label="Medium FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab size="large" aria-label="Large FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const Lowered: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-fab aria-label="Normal elevation">
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
      <md-fab lowered aria-label="Lowered elevation">
        <span slot="icon" class="material-symbols-outlined">add</span>
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
        style="position: absolute; bottom: 16px; right: 16px;"
        aria-label="Add item"
      >
        <span slot="icon" class="material-symbols-outlined">add</span>
      </md-fab>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const EventHandling: Story = {
  render: () => {
    const fabRef = createRef<Element>();

    const setupListener = () => {
      const el = fabRef.value as HTMLElement | undefined;
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

        el.addEventListener('click', (e: Event) => {
          const customEvent = e as CustomEvent<{ originalEvent: MouseEvent; value: string }>;
          if (customEvent.detail?.value !== undefined) {
            const details = `<span style="color: #81c784;">Payload:</span> { <span style="color: #90caf9;">value</span>: <span style="color: #ef9a9a;">"${customEvent.detail.value}"</span> }`;
            addEvent('click', '#4fc3f7', details);
            console.log('click:', customEvent.detail);
          }
        });
      }
    };

    queueMicrotask(setupListener);

    return html`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke den FAB, um das Event zu testen. Alle Events werden im Log angezeigt.
          </p>
        </div>
        <md-fab ${ref(fabRef)} value="add-item" aria-label="Add item">
          <span slot="icon" class="material-symbols-outlined">add</span>
        </md-fab>
        <div class="event-output" style="font-size: 13px; font-family: 'SF Mono', Monaco, 'Courier New', monospace; padding: 16px; background: #1e1e1e; color: #d4d4d4; border-radius: 8px; min-height: 100px; max-height: 200px; overflow-y: auto; line-height: 1.5;"><span class="placeholder" style="color: #666;">Klicke den FAB, um Events zu sehen...</span></div>

        <div style="margin-top: 16px;">
          <h4 style="margin: 0 0 12px; font-size: 14px; color: #333;">Beispiel-Code</h4>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0 0 12px 0; font-size: 13px; line-height: 1.5;"><code>&lt;md-fab id="create-fab" value="create" aria-label="Create"&gt;
  &lt;span slot="icon" class="material-symbols-outlined"&gt;add&lt;/span&gt;
&lt;/md-fab&gt;</code></pre>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0; font-size: 13px; line-height: 1.5;"><code>const fab = document.querySelector('#create-fab');
fab.addEventListener('click', (e) =&gt; {
  console.log('Value:', e.detail.value);
  // Output: "create"
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
| \`click\` | \`{ originalEvent: MouseEvent, value: string }\` | Wird ausgelöst, wenn der FAB geklickt wird |

### Beispiel-Code

\`\`\`html
<md-fab id="create-fab" value="create" aria-label="Create">
  <span slot="icon" class="material-symbols-outlined">add</span>
</md-fab>
\`\`\`

\`\`\`javascript
const fab = document.querySelector('#create-fab');
fab.addEventListener('click', (e) => {
  console.log('Value:', e.detail.value);
  // Output: "create"
});
\`\`\`
        `,
      },
    },
  },
};
