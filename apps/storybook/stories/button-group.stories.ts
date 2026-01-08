import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@material-wc/buttons';
import type { MdButtonGroup } from '@material-wc/buttons';

type ButtonGroupArgs = Pick<MdButtonGroup, 'selectionMode' | 'disabled' | 'size'>;

const meta: Meta<ButtonGroupArgs> = {
  title: 'Buttons/Button Group',
  component: 'md-button-group',
  tags: ['autodocs', 'new'],
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
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <md-button-group
        aria-label="Interactive example"
        @md-change=${(e: CustomEvent) => {
          const output = document.getElementById('button-group-event-output');
          if (output) {
            output.textContent = `Selected: ${e.detail.selected.join(', ') || 'none'}`;
          }
        }}
      >
        <md-button toggle value="option1" selected>Option 1</md-button>
        <md-button toggle value="option2">Option 2</md-button>
        <md-button toggle value="option3">Option 3</md-button>
      </md-button-group>
      <div id="button-group-event-output" style="font-size: 14px; color: #666; font-family: monospace;">
        Selected: option1
      </div>
    </div>
  `,
  parameters: {
    controls: { disable: true },
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
