import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@material-wc/buttons';
import type { MdSegmentedButtonSet } from '@material-wc/buttons';

type SegmentedButtonSetArgs = Pick<MdSegmentedButtonSet, 'selectionMode' | 'disabled' | 'density'>;

/**
 * @deprecated Use md-button-group and md-toggle-button instead.
 * Segmented buttons are deprecated in MD3 Expressive in favor of connected button groups.
 */
const meta: Meta<SegmentedButtonSetArgs> = {
  title: 'MD3 Components/Deprecated/Segmented Button',
  component: 'md-segmented-button-set',
  tags: ['autodocs', 'deprecated'],
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
      description: 'Whether all segments are disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    density: {
      control: 'select',
      options: ['default', 'compact'],
      description: 'Density variant',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
  },
  args: {
    selectionMode: 'single',
    disabled: false,
    density: 'default',
  },
  render: (args) => html`
    <md-segmented-button-set
      selection-mode=${args.selectionMode}
      ?disabled=${args.disabled}
      density=${args.density}
      aria-label="View options"
    >
      <md-segmented-button value="day" selected>Day</md-segmented-button>
      <md-segmented-button value="week">Week</md-segmented-button>
      <md-segmented-button value="month">Month</md-segmented-button>
    </md-segmented-button-set>
  `,
};

export default meta;
type Story = StoryObj<SegmentedButtonSetArgs>;

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
    <md-segmented-button-set
      selection-mode=${args.selectionMode}
      ?disabled=${args.disabled}
      density=${args.density}
      aria-label="Text formatting"
    >
      <md-segmented-button value="bold">
        <span slot="icon" class="material-symbols-outlined">format_bold</span>
      </md-segmented-button>
      <md-segmented-button value="italic">
        <span slot="icon" class="material-symbols-outlined">format_italic</span>
      </md-segmented-button>
      <md-segmented-button value="underline">
        <span slot="icon" class="material-symbols-outlined">format_underlined</span>
      </md-segmented-button>
    </md-segmented-button-set>
  `,
};

export const WithIcons: Story = {
  render: () => html`
    <md-segmented-button-set aria-label="Calendar view">
      <md-segmented-button value="day" selected>
        <span slot="icon" class="material-symbols-outlined">today</span>
        Day
      </md-segmented-button>
      <md-segmented-button value="week">
        <span slot="icon" class="material-symbols-outlined">date_range</span>
        Week
      </md-segmented-button>
      <md-segmented-button value="month">
        <span slot="icon" class="material-symbols-outlined">calendar_month</span>
        Month
      </md-segmented-button>
    </md-segmented-button-set>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const IconOnly: Story = {
  render: () => html`
    <md-segmented-button-set selection-mode="multi" aria-label="Text alignment">
      <md-segmented-button value="left" selected aria-label="Align left">
        <span slot="icon" class="material-symbols-outlined">format_align_left</span>
      </md-segmented-button>
      <md-segmented-button value="center" aria-label="Align center">
        <span slot="icon" class="material-symbols-outlined">format_align_center</span>
      </md-segmented-button>
      <md-segmented-button value="right" aria-label="Align right">
        <span slot="icon" class="material-symbols-outlined">format_align_right</span>
      </md-segmented-button>
      <md-segmented-button value="justify" aria-label="Justify">
        <span slot="icon" class="material-symbols-outlined">format_align_justify</span>
      </md-segmented-button>
    </md-segmented-button-set>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const TextOnly: Story = {
  render: () => html`
    <md-segmented-button-set aria-label="Price range">
      <md-segmented-button value="cheap" selected>$</md-segmented-button>
      <md-segmented-button value="moderate">$$</md-segmented-button>
      <md-segmented-button value="expensive">$$$</md-segmented-button>
      <md-segmented-button value="luxury">$$$$</md-segmented-button>
    </md-segmented-button-set>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const TwoSegments: Story = {
  render: () => html`
    <md-segmented-button-set aria-label="Mode">
      <md-segmented-button value="light" selected>
        <span slot="icon" class="material-symbols-outlined">light_mode</span>
        Light
      </md-segmented-button>
      <md-segmented-button value="dark">
        <span slot="icon" class="material-symbols-outlined">dark_mode</span>
        Dark
      </md-segmented-button>
    </md-segmented-button-set>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const FiveSegments: Story = {
  render: () => html`
    <md-segmented-button-set aria-label="Rating">
      <md-segmented-button value="1" selected>1</md-segmented-button>
      <md-segmented-button value="2">2</md-segmented-button>
      <md-segmented-button value="3">3</md-segmented-button>
      <md-segmented-button value="4">4</md-segmented-button>
      <md-segmented-button value="5">5</md-segmented-button>
    </md-segmented-button-set>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const WithCheckmarks: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">With checkmark (default)</h4>
        <md-segmented-button-set selection-mode="multi" aria-label="Features">
          <md-segmented-button value="wifi" selected>
            <span slot="icon" class="material-symbols-outlined">wifi</span>
            WiFi
          </md-segmented-button>
          <md-segmented-button value="bluetooth" selected>
            <span slot="icon" class="material-symbols-outlined">bluetooth</span>
            Bluetooth
          </md-segmented-button>
          <md-segmented-button value="nfc">
            <span slot="icon" class="material-symbols-outlined">nfc</span>
            NFC
          </md-segmented-button>
        </md-segmented-button-set>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Without checkmark (no-checkmark)</h4>
        <md-segmented-button-set selection-mode="multi" aria-label="Features">
          <md-segmented-button value="wifi" selected no-checkmark>
            <span slot="icon" class="material-symbols-outlined">wifi</span>
            WiFi
          </md-segmented-button>
          <md-segmented-button value="bluetooth" selected no-checkmark>
            <span slot="icon" class="material-symbols-outlined">bluetooth</span>
            Bluetooth
          </md-segmented-button>
          <md-segmented-button value="nfc" no-checkmark>
            <span slot="icon" class="material-symbols-outlined">nfc</span>
            NFC
          </md-segmented-button>
        </md-segmented-button-set>
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

export const DisabledSegment: Story = {
  render: () => html`
    <md-segmented-button-set aria-label="Options">
      <md-segmented-button value="a" selected>Option A</md-segmented-button>
      <md-segmented-button value="b" disabled>Option B (disabled)</md-segmented-button>
      <md-segmented-button value="c">Option C</md-segmented-button>
    </md-segmented-button-set>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const Compact: Story = {
  args: {
    density: 'compact',
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Default density (40dp)</h4>
        <md-segmented-button-set density="default" aria-label="Default density">
          <md-segmented-button value="a" selected>Option A</md-segmented-button>
          <md-segmented-button value="b">Option B</md-segmented-button>
          <md-segmented-button value="c">Option C</md-segmented-button>
        </md-segmented-button-set>
      </div>
      <div>
        <h4 style="margin: 0 0 8px; font-size: 14px; color: #666;">Compact density (32dp)</h4>
        <md-segmented-button-set density="compact" aria-label="Compact density">
          <md-segmented-button value="a" selected>Option A</md-segmented-button>
          <md-segmented-button value="b">Option B</md-segmented-button>
          <md-segmented-button value="c">Option C</md-segmented-button>
        </md-segmented-button-set>
      </div>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const SingleSegment: Story = {
  render: () => html`
    <md-segmented-button-set aria-label="Single option">
      <md-segmented-button value="only" selected>Only Option</md-segmented-button>
    </md-segmented-button-set>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const EventHandling: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <md-segmented-button-set
        aria-label="Interactive example"
        @md-change=${(e: CustomEvent) => {
          const output = document.getElementById('event-output');
          if (output) {
            output.textContent = `Selected: ${e.detail.selected.join(', ') || 'none'}`;
          }
        }}
      >
        <md-segmented-button value="option1" selected>Option 1</md-segmented-button>
        <md-segmented-button value="option2">Option 2</md-segmented-button>
        <md-segmented-button value="option3">Option 3</md-segmented-button>
      </md-segmented-button-set>
      <div id="event-output" style="font-size: 14px; color: #666; font-family: monospace;">
        Selected: option1
      </div>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};
