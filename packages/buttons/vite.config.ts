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
        },
      },
      outDir: 'dist',
    },
  })
);
