import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { cybercoreMeta } from './vite/cybercore-meta.ts';
import { docsData } from './vite/docs-data.ts';

const demoRoot = import.meta.dirname;
const repoRoot = resolve(demoRoot, '..');

export default defineConfig({
  plugins: [react(), cybercoreMeta(repoRoot), ...docsData(demoRoot, repoRoot)],
  root: demoRoot,
  base: '/cybercore-css/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(demoRoot, './src'),
    },
  },
});
