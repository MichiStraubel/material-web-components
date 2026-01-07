import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      formats: ['es'],
    },
    rollupOptions: {
      external: ['lit', /^@material-wc\//],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
    target: 'es2022',
    minify: false,
    sourcemap: true,
  },
  plugins: [
    dts({
      include: ['src/**/*.ts'],
      exclude: ['**/*.test.ts'],
      compilerOptions: {
        skipLibCheck: true,
      },
      strictOutput: false,
    }),
  ],
});
