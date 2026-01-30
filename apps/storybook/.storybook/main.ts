import type { StorybookConfig } from '@storybook/web-components-vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|ts)'],
  addons: [
    '@storybook/addon-docs',
    'storybook-addon-tag-badges',
  ],
  framework: '@storybook/web-components-vite',
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    // Set base path for GitHub Pages deployment
    if (process.env.STORYBOOK_BASE) {
      config.base = process.env.STORYBOOK_BASE;
    }

    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@material-wc/core/icon': resolve(__dirname, '../../../packages/core/src/icon/icon.ts'),
      '@material-wc/core': resolve(__dirname, '../../../packages/core/src/index.ts'),
      '@material-wc/buttons': resolve(__dirname, '../../../packages/buttons/src/index.ts'),
      '@material-wc/layout/app-layout': resolve(__dirname, '../../../packages/layout/src/app-layout/app-layout.ts'),
      '@material-wc/layout/nav-item': resolve(__dirname, '../../../packages/layout/src/nav-item/nav-item.ts'),
      '@material-wc/layout': resolve(__dirname, '../../../packages/layout/src/index.ts'),
    };
    return config;
  },
};

export default config;
