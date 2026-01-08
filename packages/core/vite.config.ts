import { defineConfig, mergeConfig } from 'vite';
import baseConfig from '../../vite.config.base';

export default mergeConfig(
  baseConfig,
  defineConfig({
    build: {
      lib: {
        entry: {
          index: 'src/index.ts',
          'styles/index': 'src/styles/index.ts',
          'tokens/index': 'src/tokens/index.ts',
          'icon/icon': 'src/icon/icon.ts',
        },
      },
      outDir: 'dist',
    },
  })
);
