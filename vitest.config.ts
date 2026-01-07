import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setup.ts'],
    include: ['packages/*/src/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['packages/*/src/**/*.ts'],
      exclude: ['**/*.test.ts', '**/*.d.ts'],
    },
  },
  define: {
    'import.meta.env.MODE': JSON.stringify('test'),
  },
  resolve: {
    alias: {
      '@material-wc/core': '/packages/core/src/index.ts',
      '@material-wc/buttons': '/packages/buttons/src/index.ts',
    },
  },
});
