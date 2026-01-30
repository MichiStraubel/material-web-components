import { defineConfig, mergeConfig } from 'vite';
import baseConfig from '../../vite.config.base';

export default mergeConfig(
  baseConfig,
  defineConfig({
    build: {
      lib: {
        entry: {
          index: 'src/index.ts',
          'app-layout/app-layout': 'src/app-layout/app-layout.ts',
          'nav-item/nav-item': 'src/nav-item/nav-item.ts',
        },
      },
      outDir: 'dist',
    },
  })
);
