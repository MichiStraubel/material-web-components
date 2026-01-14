import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import '@material-wc/buttons';
import type { MdIconButton } from '@material-wc/buttons';

type IconButtonArgs = Pick<MdIconButton, 'variant' | 'size' | 'shape' | 'width' | 'disabled' | 'selected' | 'toggle'>;

const meta: Meta<IconButtonArgs> = {
  title: 'MD3 Components/Buttons/Icon Button',
  component: 'md-icon-button',
  tags: ['autodocs', 'new'],
  parameters: {
    docs: {
      description: {
        component: `
## Wann verwenden?

Icon Buttons sind kompakte Buttons, die nur ein Icon ohne Label anzeigen. Sie eignen sich für:
- **Toolbars und App Bars** - Navigation, Suche, Menü
- **Inline-Aktionen** - Löschen, Bearbeiten, Teilen in Listen oder Karten
- **Toggle-Zustände** - Favoriten, Lesezeichen, Sichtbarkeit

## Varianten-Auswahl

| Variante | Verwendung | Beispiele |
|----------|------------|-----------|
| **Standard** | Niedrige Priorität, häufig wiederholte Aktionen | Navigation Icons, Toolbar-Aktionen |
| **Filled** | Höchste Priorität, wichtige Toggle-Aktionen | Favorit aktiv, Wichtig markiert |
| **Tonal** | Mittlere Priorität, sanfter als Filled | Sekundäre Toggle-Aktionen |
| **Outlined** | Wenn visueller Kontrast benötigt wird | Toggle-Aktionen mit klarer Grenze |

## Best Practices

- **Immer aria-label verwenden:** Icon Buttons haben kein sichtbares Label, daher ist ein beschreibendes aria-label für Barrierefreiheit erforderlich
- **Toggle für Zustände:** Verwende das \`toggle\` Attribut für An/Aus-Zustände wie Favoriten oder Lesezeichen
- **Konsistente Größen:** Verwende einheitliche Größen innerhalb einer Toolbar oder Liste
- **Erkennbare Icons:** Nutze etablierte Icons, die Benutzer sofort verstehen (z.B. Herz für Favorit)

## Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`click\` | \`{ originalEvent: MouseEvent, value: string }\` | Wird ausgelöst, wenn der Button geklickt wird |
| \`toggle\` | \`{ originalEvent: MouseEvent, value: string, selected: boolean }\` | Wird ausgelöst, wenn ein Toggle-Button seinen Zustand ändert |
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'filled', 'tonal', 'outlined'],
      description: 'The visual style variant of the icon button',
      table: {
        defaultValue: { summary: 'standard' },
      },
    },
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      description: 'The size of the icon button (MD3 Expressive)',
      table: {
        defaultValue: { summary: 'small' },
      },
    },
    shape: {
      control: 'select',
      options: ['round', 'square'],
      description: 'The shape of the icon button',
      table: {
        defaultValue: { summary: 'round' },
      },
    },
    width: {
      control: 'select',
      options: ['narrow', 'default', 'wide'],
      description: 'The width variant of the icon button',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    selected: {
      control: 'boolean',
      description: 'Whether the button is in a selected state',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    toggle: {
      control: 'boolean',
      description: 'Whether the button acts as a toggle',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    variant: 'standard',
    size: 'small',
    shape: 'round',
    width: 'default',
    disabled: false,
    selected: false,
    toggle: false,
  },
  render: (args) => html`
    <md-icon-button
      variant=${args.variant}
      size=${args.size}
      shape=${args.shape}
      width=${args.width}
      ?disabled=${args.disabled}
      ?selected=${args.selected}
      ?toggle=${args.toggle}
      aria-label="Favorite"
    >
      <span class="material-symbols-outlined">favorite</span>
    </md-icon-button>
  `,
};

export default meta;
type Story = StoryObj<IconButtonArgs>;

export const Standard: Story = {
  args: {
    variant: 'standard',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    selected: true,
  },
};

export const Tonal: Story = {
  args: {
    variant: 'tonal',
    selected: true,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <md-icon-button variant="standard" aria-label="Standard">
        <span class="material-symbols-outlined">favorite</span>
      </md-icon-button>
      <md-icon-button variant="filled" selected aria-label="Filled">
        <span class="material-symbols-outlined">favorite</span>
      </md-icon-button>
      <md-icon-button variant="tonal" selected aria-label="Tonal">
        <span class="material-symbols-outlined">favorite</span>
      </md-icon-button>
      <md-icon-button variant="outlined" aria-label="Outlined">
        <span class="material-symbols-outlined">favorite</span>
      </md-icon-button>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">MD3 Expressive: 5 Sizes (XSmall to XLarge)</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <div style="text-align: center;">
            <md-icon-button size="xsmall" aria-label="XSmall">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">XSmall (32dp)</div>
          </div>
          <div style="text-align: center;">
            <md-icon-button size="small" aria-label="Small">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Small (36dp)</div>
          </div>
          <div style="text-align: center;">
            <md-icon-button size="medium" aria-label="Medium">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Medium (40dp)</div>
          </div>
          <div style="text-align: center;">
            <md-icon-button size="large" aria-label="Large">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Large (48dp)</div>
          </div>
          <div style="text-align: center;">
            <md-icon-button size="xlarge" aria-label="XLarge">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">XLarge (56dp)</div>
          </div>
        </div>
      </div>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const AllShapes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">MD3 Expressive: 2 Shapes (Round & Square)</h4>
        <div style="display: flex; gap: 32px;">
          <div>
            <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Round Shape</h5>
            <div style="display: flex; gap: 12px; align-items: center;">
              <md-icon-button shape="round" variant="standard" aria-label="Round Standard">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
              <md-icon-button shape="round" variant="filled" selected aria-label="Round Filled">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
              <md-icon-button shape="round" variant="tonal" selected aria-label="Round Tonal">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
              <md-icon-button shape="round" variant="outlined" aria-label="Round Outlined">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
            </div>
          </div>
          <div>
            <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Square Shape</h5>
            <div style="display: flex; gap: 12px; align-items: center;">
              <md-icon-button shape="square" variant="standard" aria-label="Square Standard">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
              <md-icon-button shape="square" variant="filled" selected aria-label="Square Filled">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
              <md-icon-button shape="square" variant="tonal" selected aria-label="Square Tonal">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
              <md-icon-button shape="square" variant="outlined" aria-label="Square Outlined">
                <span class="material-symbols-outlined">favorite</span>
              </md-icon-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const AllWidths: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">MD3 Expressive: 3 Widths (Narrow, Default, Wide)</h4>
        <div style="display: flex; gap: 32px;">
          <div style="text-align: center;">
            <md-icon-button width="narrow" variant="filled" selected aria-label="Narrow">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Narrow</div>
          </div>
          <div style="text-align: center;">
            <md-icon-button width="default" variant="filled" selected aria-label="Default">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Default</div>
          </div>
          <div style="text-align: center;">
            <md-icon-button width="wide" variant="filled" selected aria-label="Wide">
              <span class="material-symbols-outlined">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Wide</div>
          </div>
        </div>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Widths across all sizes</h5>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="display: flex; gap: 24px; align-items: center;">
            <span style="width: 60px; font-size: 12px; color: #666;">XSmall:</span>
            <md-icon-button size="xsmall" width="narrow" variant="tonal" aria-label="XSmall Narrow">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
            <md-icon-button size="xsmall" width="default" variant="tonal" aria-label="XSmall Default">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
            <md-icon-button size="xsmall" width="wide" variant="tonal" aria-label="XSmall Wide">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
          </div>
          <div style="display: flex; gap: 24px; align-items: center;">
            <span style="width: 60px; font-size: 12px; color: #666;">Medium:</span>
            <md-icon-button size="medium" width="narrow" variant="tonal" aria-label="Medium Narrow">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
            <md-icon-button size="medium" width="default" variant="tonal" aria-label="Medium Default">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
            <md-icon-button size="medium" width="wide" variant="tonal" aria-label="Medium Wide">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
          </div>
          <div style="display: flex; gap: 24px; align-items: center;">
            <span style="width: 60px; font-size: 12px; color: #666;">XLarge:</span>
            <md-icon-button size="xlarge" width="narrow" variant="tonal" aria-label="XLarge Narrow">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
            <md-icon-button size="xlarge" width="default" variant="tonal" aria-label="XLarge Default">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
            <md-icon-button size="xlarge" width="wide" variant="tonal" aria-label="XLarge Wide">
              <span class="material-symbols-outlined">star</span>
            </md-icon-button>
          </div>
        </div>
      </div>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const Toggle: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <md-icon-button variant="standard" toggle aria-label="Toggle favorite">
        <span class="material-symbols-outlined">favorite</span>
        <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
      </md-icon-button>
      <md-icon-button variant="filled" toggle aria-label="Toggle star">
        <span class="material-symbols-outlined">star</span>
        <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
      </md-icon-button>
      <md-icon-button variant="outlined" toggle aria-label="Toggle bookmark">
        <span class="material-symbols-outlined">bookmark</span>
        <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">bookmark</span>
      </md-icon-button>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const ToggleWithDifferentIcons: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Favorite (outline -> filled)</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-icon-button variant="standard" toggle aria-label="Toggle favorite">
            <span class="material-symbols-outlined">favorite</span>
            <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
          </md-icon-button>
          <md-icon-button variant="filled" toggle aria-label="Toggle favorite">
            <span class="material-symbols-outlined">favorite</span>
            <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
          </md-icon-button>
          <md-icon-button variant="tonal" toggle aria-label="Toggle favorite">
            <span class="material-symbols-outlined">favorite</span>
            <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
          </md-icon-button>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Bookmark (add -> check)</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-icon-button variant="standard" toggle aria-label="Toggle bookmark">
            <span class="material-symbols-outlined">bookmark_add</span>
            <span slot="selected" class="material-symbols-outlined">bookmark_added</span>
          </md-icon-button>
          <md-icon-button variant="filled" toggle aria-label="Toggle bookmark">
            <span class="material-symbols-outlined">bookmark_add</span>
            <span slot="selected" class="material-symbols-outlined">bookmark_added</span>
          </md-icon-button>
          <md-icon-button variant="outlined" toggle aria-label="Toggle bookmark">
            <span class="material-symbols-outlined">bookmark_add</span>
            <span slot="selected" class="material-symbols-outlined">bookmark_added</span>
          </md-icon-button>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Visibility (off -> on)</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-icon-button variant="standard" toggle aria-label="Toggle visibility">
            <span class="material-symbols-outlined">visibility_off</span>
            <span slot="selected" class="material-symbols-outlined">visibility</span>
          </md-icon-button>
          <md-icon-button variant="filled" toggle aria-label="Toggle visibility">
            <span class="material-symbols-outlined">visibility_off</span>
            <span slot="selected" class="material-symbols-outlined">visibility</span>
          </md-icon-button>
        </div>
      </div>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const SelectedStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Unselected</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-icon-button variant="filled" aria-label="Unselected Filled">
            <span class="material-symbols-outlined">favorite</span>
          </md-icon-button>
          <md-icon-button variant="tonal" aria-label="Unselected Tonal">
            <span class="material-symbols-outlined">favorite</span>
          </md-icon-button>
          <md-icon-button variant="outlined" aria-label="Unselected Outlined">
            <span class="material-symbols-outlined">favorite</span>
          </md-icon-button>
        </div>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Selected</h4>
        <div style="display: flex; gap: 16px; align-items: center;">
          <md-icon-button variant="filled" selected aria-label="Selected Filled">
            <span class="material-symbols-outlined">favorite</span>
          </md-icon-button>
          <md-icon-button variant="tonal" selected aria-label="Selected Tonal">
            <span class="material-symbols-outlined">favorite</span>
          </md-icon-button>
          <md-icon-button variant="outlined" selected aria-label="Selected Outlined">
            <span class="material-symbols-outlined">favorite</span>
          </md-icon-button>
        </div>
      </div>
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

export const CommonIcons: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <md-icon-button aria-label="Menu">
        <span class="material-symbols-outlined">menu</span>
      </md-icon-button>
      <md-icon-button aria-label="Search">
        <span class="material-symbols-outlined">search</span>
      </md-icon-button>
      <md-icon-button aria-label="Settings">
        <span class="material-symbols-outlined">settings</span>
      </md-icon-button>
      <md-icon-button aria-label="Share">
        <span class="material-symbols-outlined">share</span>
      </md-icon-button>
      <md-icon-button aria-label="More options">
        <span class="material-symbols-outlined">more_vert</span>
      </md-icon-button>
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

        el.addEventListener('click', (e: Event) => {
          const customEvent = e as CustomEvent<{ originalEvent: MouseEvent; value: string }>;
          if (customEvent.detail?.value !== undefined) {
            const details = `<span style="color: #81c784;">Payload:</span> { <span style="color: #90caf9;">value</span>: <span style="color: #ef9a9a;">"${customEvent.detail.value}"</span> }`;
            addEvent('click', '#4fc3f7', details);
            console.log('click:', customEvent.detail);
          }
        });

        el.addEventListener('toggle', (event: Event) => {
          const customEvent = event as CustomEvent<{ selected: boolean; value: string }>;
          const details = `<span style="color: #81c784;">Payload:</span> { <span style="color: #90caf9;">value</span>: <span style="color: #ef9a9a;">"${customEvent.detail.value}"</span>, <span style="color: #90caf9;">selected</span>: <span style="color: #ce9178;">${customEvent.detail.selected}</span> }`;
          addEvent('toggle', '#ffb74d', details);
          console.log('toggle:', customEvent.detail);
        });
      }
    };

    queueMicrotask(setupListener);

    return html`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke den Toggle-Button, um die Events zu testen. Alle Events werden im Log angezeigt.
          </p>
        </div>
        <div style="display: flex; gap: 24px; align-items: center;">
          <div style="text-align: center;">
            <md-icon-button
              ${ref(buttonRef)}
              variant="filled"
              toggle
              value="favorite"
              aria-label="Toggle Button"
            >
              <span class="material-symbols-outlined">favorite</span>
              <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
            </md-icon-button>
            <div style="font-size: 12px; color: #666; margin-top: 4px;">Toggle</div>
          </div>
        </div>
        <div class="event-output" style="font-size: 13px; font-family: 'SF Mono', Monaco, 'Courier New', monospace; padding: 16px; background: #1e1e1e; color: #d4d4d4; border-radius: 8px; min-height: 100px; max-height: 200px; overflow-y: auto; line-height: 1.5;"><span class="placeholder" style="color: #666;">Klicke den Button, um Events zu sehen...</span></div>

        <div style="margin-top: 16px;">
          <h4 style="margin: 0 0 12px; font-size: 14px; color: #333;">Beispiel-Code</h4>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0 0 12px 0; font-size: 13px; line-height: 1.5;"><code>&lt;md-icon-button id="fav-btn" toggle value="favorite" aria-label="Favorite"&gt;
  &lt;span class="material-symbols-outlined"&gt;favorite&lt;/span&gt;
  &lt;span slot="selected"&gt;...&lt;/span&gt;
&lt;/md-icon-button&gt;</code></pre>
          <pre style="background: #1e1e1e; color: #d4d4d4; padding: 16px; border-radius: 8px; overflow-x: auto; margin: 0; font-size: 13px; line-height: 1.5;"><code>const iconButton = document.querySelector('#fav-btn');
iconButton.addEventListener('toggle', (e) =&gt; {
  console.log('Value:', e.detail.value);
  console.log('Selected:', e.detail.selected);
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
| \`click\` | \`{ originalEvent: MouseEvent, value: string }\` | Wird ausgelöst, wenn der Button geklickt wird |
| \`toggle\` | \`{ originalEvent: MouseEvent, value: string, selected: boolean }\` | Wird bei Toggle-Buttons ausgelöst, wenn der Zustand wechselt |

### Beispiel-Code

\`\`\`html
<md-icon-button id="fav-btn" toggle value="favorite" aria-label="Favorite">
  <span class="material-symbols-outlined">favorite</span>
  <span slot="selected" class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
</md-icon-button>
\`\`\`

\`\`\`javascript
const iconButton = document.querySelector('#fav-btn');

// Click Event
iconButton.addEventListener('click', (e) => {
  console.log('Value:', e.detail.value);
});

// Toggle Event (für Toggle-Buttons)
iconButton.addEventListener('toggle', (e) => {
  console.log('Value:', e.detail.value);
  console.log('Selected:', e.detail.selected);
});
\`\`\`
        `,
      },
    },
  },
};
