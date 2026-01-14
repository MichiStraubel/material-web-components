import { defineConfig, mergeConfig } from 'vite';
import baseConfig from '../../vite.config.base';

export default mergeConfig(
  baseConfig,
  defineConfig({
    build: {
      lib: {
        entry: {
          index: 'src/index.ts',
          'text-field/text-field': 'src/text-field/text-field.ts',
        },
      },
      outDir: 'dist',
    },
  })
);
