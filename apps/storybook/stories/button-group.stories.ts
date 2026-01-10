import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import '@material-wc/buttons';
import type { MdButtonGroup } from '@material-wc/buttons';

type ButtonGroupArgs = Pick<MdButtonGroup, 'selectionMode' | 'disabled' | 'size'>;

const meta: Meta<ButtonGroupArgs> = {
  title: 'MD3 Components/Buttons/Button Group',
  component: 'md-button-group',
  tags: ['autodocs', 'new'],
  parameters: {
    docs: {
      description: {
        component: `
## Wann verwenden?

Button Groups gruppieren zusammengehörige Optionen visuell und funktional. Sie eignen sich für:
- **Ansichtswechsel** - Tag/Woche/Monat, Liste/Grid, Karte/Satellit
- **Filter-Optionen** - Kategorien, Status-Filter, Sortierung
- **Text-Formatierung** - Fett/Kursiv/Unterstrichen (Multi-Select)
- **Ausrichtung** - Links/Zentriert/Rechts

## Auswahlmodi

| Modus | Verhalten | Verwendung |
|-------|-----------|------------|
| **Single** | Nur eine Option aktiv (wie Radio) | Ansichtswechsel, exklusive Optionen |
| **Multi** | Mehrere Optionen möglich (wie Checkbox) | Formatierung, Filter-Kombinationen |

## Accessibility

Die Button Group verwendet automatisch die korrekten ARIA-Rollen:
- **Single-Select:** \`role="radiogroup"\` mit \`role="radio"\` Kindern
- **Multi-Select:** \`role="group"\` mit \`role="checkbox"\` Kindern
- **Keyboard:** Pfeiltasten, Home/End, Space/Enter

## Best Practices

- **2-5 Optionen:** Zu viele Optionen verwirren, nutze ggf. ein Dropdown
- **Kurze Labels:** Halte die Button-Labels kurz und prägnant
- **Konsistente Länge:** Buttons sollten ähnlich lang sein für ein ausgewogenes Layout
- **Icons für Klarheit:** Bei Icon-only Buttons immer \`aria-label\` verwenden
- **Vorauswahl:** Bei Single-Select sollte immer eine Option vorausgewählt sein

## Events

| Event | Detail | Beschreibung |
|-------|--------|--------------|
| \`md-change\` | \`{ selected: string[], previousSelected: string[] }\` | Wird ausgelöst, wenn sich die Auswahl ändert |
        `,
      },
    },
  },
  argTypes: {
    selectionMode: {
      control: 'select',
      options: ['single', 'multi'],
      description: 'Selection mode: single (radio) or multi (checkbox)',
      table: {
        defaultValue: { summary: 'single' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether all buttons are disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      description: 'Size of all buttons in the group (MD3 Expressive)',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
  },
  args: {
    selectionMode: 'single',
    disabled: false,
    size: 'medium',
  },
  render: (args) => html`
    <md-button-group
      selection-mode=${args.selectionMode}
      ?disabled=${args.disabled}
      size=${args.size}
      aria-label="View options"
    >
      <md-button toggle value="day" selected>Day</md-button>
      <md-button toggle value="week">Week</md-button>
      <md-button toggle value="month">Month</md-button>
    </md-button-group>
  `,
};

export default meta;
type Story = StoryObj<ButtonGroupArgs>;

export const SingleSelect: Story = {
  args: {
    selectionMode: 'single',
  },
};

export const MultiSelect: Story = {
  args: {
    selectionMode: 'multi',
  },
  render: (args) => html`
    <md-button-group
      selection-mode=${args.selectionMode}
      ?disabled=${args.disabled}
      aria-label="Text formatting"
    >
      <md-button toggle value="bold">
        <span slot="icon" class="material-symbols-outlined">format_bold</span>
      </md-button>
      <md-button toggle value="italic">
        <span slot="icon" class="material-symbols-outlined">format_italic</span>
      </md-button>
      <md-button toggle value="underline">
        <span slot="icon" class="material-symbols-outlined">format_underlined</span>
      </md-button>
    </md-button-group>
  `,
};

export const WithIcons: Story = {
  render: () => html`
    <md-button-group aria-label="Calendar view">
      <md-button toggle value="day" selected>
        <span slot="icon" class="material-symbols-outlined">today</span>
        Day
      </md-button>
      <md-button toggle value="week">
        <span slot="icon" class="material-symbols-outlined">date_range</span>
        Week
      </md-button>
      <md-button toggle value="month">
        <span slot="icon" class="material-symbols-outlined">calendar_month</span>
        Month
      </md-button>
    </md-button-group>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const IconOnly: Story = {
  render: () => html`
    <md-button-group selection-mode="multi" aria-label="Text alignment">
      <md-button toggle value="left" selected aria-label="Align left">
        <span slot="icon" class="material-symbols-outlined">format_align_left</span>
      </md-button>
      <md-button toggle value="center" aria-label="Align center">
        <span slot="icon" class="material-symbols-outlined">format_align_center</span>
      </md-button>
      <md-button toggle value="right" aria-label="Align right">
        <span slot="icon" class="material-symbols-outlined">format_align_right</span>
      </md-button>
      <md-button toggle value="justify" aria-label="Justify">
        <span slot="icon" class="material-symbols-outlined">format_align_justify</span>
      </md-button>
    </md-button-group>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const TextOnly: Story = {
  render: () => html`
    <md-button-group aria-label="Price range">
      <md-button toggle value="cheap" selected>$</md-button>
      <md-button toggle value="moderate">$$</md-button>
      <md-button toggle value="expensive">$$$</md-button>
      <md-button toggle value="luxury">$$$$</md-button>
    </md-button-group>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const TwoButtons: Story = {
  render: () => html`
    <md-button-group aria-label="Mode">
      <md-button toggle value="light" selected>
        <span slot="icon" class="material-symbols-outlined">light_mode</span>
        Light
      </md-button>
      <md-button toggle value="dark">
        <span slot="icon" class="material-symbols-outlined">dark_mode</span>
        Dark
      </md-button>
    </md-button-group>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const FiveButtons: Story = {
  render: () => html`
    <md-button-group aria-label="Rating">
      <md-button toggle value="1" selected>1</md-button>
      <md-button toggle value="2">2</md-button>
      <md-button toggle value="3">3</md-button>
      <md-button toggle value="4">4</md-button>
      <md-button toggle value="5">5</md-button>
    </md-button-group>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const ConnectedShapes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">MD3 Expressive: Connected Button Shapes</h4>
        <p style="margin: 0 0 16px; font-size: 12px; color: #999;">
          Unselected buttons have position-based shapes (leading, middle, trailing).<br/>
          Selected buttons always become fully rounded.
        </p>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Selection on first button</h5>
        <md-button-group aria-label="Example 1">
          <md-button toggle value="a" selected>Selected</md-button>
          <md-button toggle value="b">Middle</md-button>
          <md-button toggle value="c">Trailing</md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Selection on middle button</h5>
        <md-button-group aria-label="Example 2">
          <md-button toggle value="a">Leading</md-button>
          <md-button toggle value="b" selected>Selected</md-button>
          <md-button toggle value="c">Trailing</md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Selection on last button</h5>
        <md-button-group aria-label="Example 3">
          <md-button toggle value="a">Leading</md-button>
          <md-button toggle value="b">Middle</md-button>
          <md-button toggle value="c" selected>Selected</md-button>
        </md-button-group>
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

export const DisabledButton: Story = {
  render: () => html`
    <md-button-group aria-label="Options">
      <md-button toggle value="a" selected>Option A</md-button>
      <md-button toggle value="b" disabled>Option B (disabled)</md-button>
      <md-button toggle value="c">Option C</md-button>
    </md-button-group>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const SingleButton: Story = {
  render: () => html`
    <md-button-group aria-label="Single option">
      <md-button toggle value="only" selected>Only Option</md-button>
    </md-button-group>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const EventHandling: Story = {
  render: () => {
    const groupRef = createRef<Element>();

    const setupListener = () => {
      const el = groupRef.value as HTMLElement | undefined;
      if (el && !(el as HTMLElement & { _listenerAttached?: boolean })._listenerAttached) {
        (el as HTMLElement & { _listenerAttached?: boolean })._listenerAttached = true;
        el.addEventListener('md-change', (event: Event) => {
          const customEvent = event as CustomEvent<{ selected: string[]; previousSelected: string[] }>;
          const output = el.closest('.event-demo-container')?.querySelector('.event-output');
          if (output) {
            output.textContent = `md-change:\nSelected: ${customEvent.detail.selected.join(', ') || 'none'}\nPrevious: ${customEvent.detail.previousSelected.join(', ') || 'none'}`;
          }
          console.log('md-change:', customEvent.detail);
        });
      }
    };

    queueMicrotask(setupListener);

    return html`
      <div class="event-demo-container" style="display: flex; flex-direction: column; gap: 16px;">
        <div style="padding: 16px; background: #e3f2fd; border-radius: 8px; border: 1px solid #90caf9;">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: #1565c0;">Event-Dokumentation</h4>
          <p style="margin: 0; font-size: 12px; color: #1976d2;">
            Klicke die Buttons, um das <code>md-change</code> Event zu testen.
          </p>
        </div>
        <md-button-group ${ref(groupRef)} aria-label="Interactive example">
          <md-button toggle value="option1" selected>Option 1</md-button>
          <md-button toggle value="option2">Option 2</md-button>
          <md-button toggle value="option3">Option 3</md-button>
        </md-button-group>
        <pre class="event-output" style="font-size: 12px; color: #666; font-family: monospace; padding: 12px; background: #f5f5f5; border-radius: 4px; min-height: 60px; margin: 0; white-space: pre-wrap;">Klicke die Buttons...</pre>
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
| \`md-change\` | \`{ selected: string[], previousSelected: string[] }\` | Wird ausgelöst, wenn sich die Auswahl ändert |

Das Event enthält sowohl die neue Auswahl als auch die vorherige Auswahl, um Änderungen nachvollziehen zu können.
        `,
      },
    },
  },
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 16px; font-size: 14px; color: #666;">MD3 Expressive: Size Variants</h4>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">XSmall (32dp height)</h5>
        <md-button-group size="xsmall" aria-label="XSmall example">
          <md-button toggle value="a" selected>Day</md-button>
          <md-button toggle value="b">Week</md-button>
          <md-button toggle value="c">Month</md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Small (36dp height)</h5>
        <md-button-group size="small" aria-label="Small example">
          <md-button toggle value="a" selected>Day</md-button>
          <md-button toggle value="b">Week</md-button>
          <md-button toggle value="c">Month</md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Medium (40dp height) - Default</h5>
        <md-button-group size="medium" aria-label="Medium example">
          <md-button toggle value="a" selected>Day</md-button>
          <md-button toggle value="b">Week</md-button>
          <md-button toggle value="c">Month</md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Large (48dp height)</h5>
        <md-button-group size="large" aria-label="Large example">
          <md-button toggle value="a" selected>Day</md-button>
          <md-button toggle value="b">Week</md-button>
          <md-button toggle value="c">Month</md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">XLarge (56dp height)</h5>
        <md-button-group size="xlarge" aria-label="XLarge example">
          <md-button toggle value="a" selected>Day</md-button>
          <md-button toggle value="b">Week</md-button>
          <md-button toggle value="c">Month</md-button>
        </md-button-group>
      </div>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const SizesWithIcons: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 16px; font-size: 14px; color: #666;">Size Variants with Icons</h4>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">XSmall</h5>
        <md-button-group size="xsmall" selection-mode="multi" aria-label="XSmall icons">
          <md-button toggle value="bold" aria-label="Bold">
            <span slot="icon" class="material-symbols-outlined">format_bold</span>
          </md-button>
          <md-button toggle value="italic" aria-label="Italic">
            <span slot="icon" class="material-symbols-outlined">format_italic</span>
          </md-button>
          <md-button toggle value="underline" aria-label="Underline">
            <span slot="icon" class="material-symbols-outlined">format_underlined</span>
          </md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">Medium (Default)</h5>
        <md-button-group size="medium" selection-mode="multi" aria-label="Medium icons">
          <md-button toggle value="bold" aria-label="Bold">
            <span slot="icon" class="material-symbols-outlined">format_bold</span>
          </md-button>
          <md-button toggle value="italic" aria-label="Italic">
            <span slot="icon" class="material-symbols-outlined">format_italic</span>
          </md-button>
          <md-button toggle value="underline" aria-label="Underline">
            <span slot="icon" class="material-symbols-outlined">format_underlined</span>
          </md-button>
        </md-button-group>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #999;">XLarge</h5>
        <md-button-group size="xlarge" selection-mode="multi" aria-label="XLarge icons">
          <md-button toggle value="bold" aria-label="Bold">
            <span slot="icon" class="material-symbols-outlined">format_bold</span>
          </md-button>
          <md-button toggle value="italic" aria-label="Italic">
            <span slot="icon" class="material-symbols-outlined">format_italic</span>
          </md-button>
          <md-button toggle value="underline" aria-label="Underline">
            <span slot="icon" class="material-symbols-outlined">format_underlined</span>
          </md-button>
        </md-button-group>
      </div>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const MigrationFromSegmentedButton: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div style="padding: 16px; background: #fff3cd; border-radius: 8px; border: 1px solid #ffc107;">
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #856404;">Migration Guide</h4>
        <p style="margin: 0 0 8px; font-size: 12px; color: #856404;">
          <code>md-segmented-button</code>, <code>md-segmented-button-set</code>, and <code>md-toggle-button</code> are deprecated.
        </p>
        <p style="margin: 0; font-size: 12px; color: #856404;">
          Use <code>md-button-group</code> with <code>md-button toggle</code> instead.
        </p>
      </div>
      <div style="display: flex; gap: 32px;">
        <div>
          <h5 style="margin: 0 0 8px; font-size: 12px; color: #dc3545;">Before (deprecated)</h5>
          <code style="font-size: 11px; display: block; padding: 8px; background: #f8f9fa; border-radius: 4px;">
            &lt;md-button-group&gt;<br/>
            &nbsp;&nbsp;&lt;md-toggle-button&gt;<br/>
            &lt;/md-button-group&gt;
          </code>
        </div>
        <div>
          <h5 style="margin: 0 0 8px; font-size: 12px; color: #28a745;">After (MD3 Expressive)</h5>
          <code style="font-size: 11px; display: block; padding: 8px; background: #f8f9fa; border-radius: 4px;">
            &lt;md-button-group&gt;<br/>
            &nbsp;&nbsp;&lt;md-button toggle&gt;<br/>
            &lt;/md-button-group&gt;
          </code>
        </div>
      </div>
      <div>
        <h5 style="margin: 0 0 8px; font-size: 12px; color: #666;">New Button Group (MD3 Expressive)</h5>
        <md-button-group aria-label="Example">
          <md-button toggle value="day" selected>Day</md-button>
          <md-button toggle value="week">Week</md-button>
          <md-button toggle value="month">Month</md-button>
        </md-button-group>
      </div>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};
