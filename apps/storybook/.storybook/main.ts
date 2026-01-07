import type { StorybookConfig } from '@storybook/web-components-vite';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|ts)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@material-wc/core': resolve(__dirname, '../../../packages/core/src/index.ts'),
      '@material-wc/buttons': resolve(__dirname, '../../../packages/buttons/src/index.ts'),
    };
    return config;
  },
};

export default config;
