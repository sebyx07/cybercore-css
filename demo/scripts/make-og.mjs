#!/usr/bin/env node
// Renders demo/public/og.png (1200 x 630) from the /og route of the built site.
// Run after a visual change to the hero panel:
//
//   npm run build:demo && node demo/scripts/make-og.mjs
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { chromium } from '@playwright/test';
import { preview } from 'vite';

const demoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const server = await preview({
  configFile: resolve(demoRoot, 'vite.config.ts'),
  preview: { port: 4179, strictPort: true },
  logLevel: 'error',
});

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  // Animations are frozen so the card is the same on every run.
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('http://localhost:4179/cybercore-css/og', { waitUntil: 'networkidle' });
  await page.waitForFunction('document.fonts.status === "loaded"');
  await page.screenshot({ path: resolve(demoRoot, 'public/og.png') });
  console.log('Wrote demo/public/og.png');
} finally {
  await browser.close();
  await server.close();
}
