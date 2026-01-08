import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@material-wc/core/icon';
import type { MdIcon } from '@material-wc/core';

type IconArgs = Pick<MdIcon, 'size' | 'filled'> & {
  name: string;
};

const meta: Meta<IconArgs> = {
  title: 'Components/Icon',
  component: 'md-icon',
  tags: ['autodocs', 'new'],
  argTypes: {
    name: {
      control: 'text',
      description: 'The icon name from Material Symbols',
      table: {
        defaultValue: { summary: 'home' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the icon',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    filled: {
      control: 'boolean',
      description: 'Whether to use the filled variant',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    name: 'home',
    size: 'medium',
    filled: false,
  },
  render: (args) => html`
    <md-icon size=${args.size} ?filled=${args.filled}>${args.name}</md-icon>
  `,
};

export default meta;
type Story = StoryObj<IconArgs>;

export const Default: Story = {
  args: {
    name: 'home',
  },
};

export const Filled: Story = {
  args: {
    name: 'favorite',
    filled: true,
  },
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-icon size="small">home</md-icon>
      <md-icon size="medium">home</md-icon>
      <md-icon size="large">home</md-icon>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const FilledVariant: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <md-icon>favorite</md-icon>
        <span style="font-size: 12px;">Outlined</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <md-icon filled>favorite</md-icon>
        <span style="font-size: 12px;">Filled</span>
      </div>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const CommonIcons: Story = {
  render: () => html`
    <div style="display: flex; flex-wrap: wrap; gap: 16px;">
      ${['add', 'edit', 'delete', 'search', 'settings', 'home', 'person', 'favorite', 'star', 'check', 'close', 'menu', 'more_vert', 'share', 'download', 'upload'].map(
        (icon) => html`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; width: 80px;">
            <md-icon>${icon}</md-icon>
            <span style="font-size: 11px; text-align: center;">${icon}</span>
          </div>
        `
      )}
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};

export const WithColor: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; align-items: center;">
      <md-icon style="color: var(--color-primary);">palette</md-icon>
      <md-icon style="color: #e91e63;">favorite</md-icon>
      <md-icon style="color: #4caf50;">check_circle</md-icon>
      <md-icon style="color: #ff9800;">warning</md-icon>
      <md-icon style="color: #f44336;">error</md-icon>
    </div>
  `,
  parameters: {
    controls: { disable: true },
  },
};
