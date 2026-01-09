#!/usr/bin/env node

import { glob } from 'glob';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { parseArgs } from 'util';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '../..');

async function buildCSS() {
  const { values } = parseArgs({
    options: {
      package: { type: 'string', short: 'p' },
      watch: { type: 'boolean', short: 'w', default: false },
      help: { type: 'boolean', short: 'h', default: false },
    },
    allowPositionals: false,
  });

  if (values.help) {
    console.log(`
Usage: build.js [options]

Options:
  -p, --package <name>  Build only a specific package (e.g., buttons, core)
  -w, --watch           Watch mode (not yet implemented)
  -h, --help            Show this help message
`);
    return;
  }

  const pattern = values.package
    ? `packages/${values.package}/src/**/*.src.css`
    : 'packages/*/src/**/*.src.css';

  const sourceFiles = await glob(pattern, { cwd: rootDir });

  if (sourceFiles.length === 0) {
    console.log('No .src.css files found.');
    return;
  }

  console.log(`Building ${sourceFiles.length} CSS file(s)...`);

  const processor = postcss([
    tailwindcss(),
    autoprefixer(),
    cssnano({
      preset: ['default', { discardComments: { removeAll: true } }],
    }),
  ]);

  for (const file of sourceFiles) {
    const inputPath = resolve(rootDir, file);
    const outputPath = inputPath.replace('.src.css', '.css');

    try {
      const css = await readFile(inputPath, 'utf-8');
      const result = await processor.process(css, {
        from: inputPath,
        to: outputPath,
      });

      await mkdir(dirname(outputPath), { recursive: true });
      await writeFile(outputPath, result.css);

      console.log(`  ✓ ${file} → ${file.replace('.src.css', '.css')}`);
    } catch (error) {
      console.error(`  ✗ ${file}: ${error.message}`);
      process.exit(1);
    }
  }

  console.log('CSS build complete!');
}

buildCSS().catch((error) => {
  console.error('CSS build failed:', error);
  process.exit(1);
});
