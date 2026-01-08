import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@material-wc/buttons';
import type { MdFab } from '@material-wc/buttons';

type FabArgs = Pick<MdFab, 'variant' | 'size' | 'disabled' | 'extended' | 'lowered'> & {
  label?: string;
};

const meta: Meta<FabArgs> = {
  title: 'Components/FAB',
  component: 'md-fab',
  tags: ['autodocs', 'new'],
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
    extended: {
      control: 'boolean',
      description: 'Whether the FAB shows a label',
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
      description: 'The label text (for extended FAB)',
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    disabled: false,
    extended: false,
    lowered: false,
    label: '',
  },
  render: (args) => html`
    <md-fab
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      ?extended=${args.extended}
      ?lowered=${args.lowered}
      aria-label="Add"
    >
      <span slot="icon" class="material-symbols-outlined">add</span>
      ${args.label}
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

export const Extended: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-fab extended size="small" aria-label="Small Extended FAB">
        <span slot="icon" class="material-symbols-outlined">edit</span>
        Edit
      </md-fab>
      <md-fab extended size="medium" aria-label="Medium Extended FAB">
        <span slot="icon" class="material-symbols-outlined">add</span>
        Create New
      </md-fab>
      <md-fab extended size="large" aria-label="Large Extended FAB">
        <span slot="icon" class="material-symbols-outlined">mail</span>
        Compose Message
      </md-fab>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const ExtendedVariants: Story = {
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
