import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@material-wc/buttons';
import type { MdButton } from '@material-wc/buttons';

type ButtonArgs = Pick<MdButton, 'variant' | 'disabled'> & {
  label: string;
};

const meta: Meta<ButtonArgs> = {
  title: 'Components/Button',
  component: 'md-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'text', 'elevated', 'tonal'],
      description: 'The visual style variant of the button',
      table: {
        defaultValue: { summary: 'filled' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'The text content of the button',
    },
  },
  args: {
    variant: 'filled',
    disabled: false,
    label: 'Button',
  },
  render: (args) => html`
    <md-button variant=${args.variant} ?disabled=${args.disabled}>
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
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Outlined Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Text Button',
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    label: 'Elevated Button',
  },
};

export const Tonal: Story = {
  args: {
    variant: 'tonal',
    label: 'Tonal Button',
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
    <md-button variant="filled">
      <svg slot="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
      </svg>
      Continue
    </md-button>
  `,
  parameters: {
    controls: { disable: true },
  },
};
