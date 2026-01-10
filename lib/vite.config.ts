import { defineConfig, mergeConfig } from 'vite';
import baseConfig from '../vite.config.base';

export default mergeConfig(
  baseConfig,
  defineConfig({
    build: {
      lib: {
        entry: {
          index: 'src/index.ts',
          buttons: 'src/buttons.ts',
          core: 'src/core.ts',
        },
      },
      outDir: 'dist',
    },
  })
);
