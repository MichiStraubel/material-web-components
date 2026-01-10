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
| \`md-click\` | \`{ originalEvent: MouseEvent }\` | Wird ausgelöst, wenn der FAB geklickt wird |
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
        el.addEventListener('md-click', (event: Event) => {
          const customEvent = event as CustomEvent;
          const output = el.closest('.event-demo-container')?.querySelector('.event-output');
          if (output) {
            output.textContent = `md-click: ${JSON.stringify(customEvent.detail)}`;
          }
          console.log('md-click:', customEvent.detail);
        });
      }
    };

    queueMicrotask(setupListener);

    return html`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke den FAB, um das Event zu testen.
          </p>
        </div>
        <md-fab ${ref(fabRef)} aria-label="Add item">
          <span slot="icon" class="material-symbols-outlined">add</span>
        </md-fab>
        <pre class="event-output" style="font-size: 12px; color: #666; font-family: monospace; padding: 12px; background: #f5f5f5; border-radius: 4px; min-height: 40px; margin: 0;">Klicke den FAB...</pre>
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
| \`md-click\` | \`{ originalEvent: MouseEvent }\` | Wird ausgelöst, wenn der FAB geklickt wird |
        `,
      },
    },
  },
};
