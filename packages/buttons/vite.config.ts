import { defineConfig, mergeConfig } from 'vite';
import baseConfig from '../../vite.config.base';

export default mergeConfig(
  baseConfig,
  defineConfig({
    build: {
      lib: {
        entry: {
          index: 'src/index.ts',
          'button/button': 'src/button/button.ts',
          'icon-button/icon-button': 'src/icon-button/icon-button.ts',
          'fab/fab': 'src/fab/fab.ts',
          'split-button/split-button': 'src/split-button/split-button.ts',
          'toggle-button/toggle-button': 'src/toggle-button/toggle-button.ts',
          'button-group/button-group': 'src/button-group/button-group.ts',
          // Deprecated
          'segmented-button/segmented-button': 'src/segmented-button/segmented-button.ts',
          'segmented-button-set/segmented-button-set': 'src/segmented-button-set/segmented-button-set.ts',
        },
      },
      outDir: 'dist',
    },
  })
);
