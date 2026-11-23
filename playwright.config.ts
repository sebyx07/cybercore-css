// Visual regression of the demo site (built from the real framework CSS).
//
// Baselines are rendered in the official Playwright image so CI and every machine get the same
// pixels: always run through scripts/visual.sh, never a bare `playwright test` on the host.
//
//   npm run build && scripts/visual.sh                      compare against the baselines
//   npm run build && scripts/visual.sh --update-snapshots   accept the new rendering
import { defineConfig, devices } from '@playwright/test';

const PORT = 4319;

export default defineConfig({
  testDir: './tests/visual',
  snapshotPathTemplate: '{testDir}/__snapshots__/{testFilePath}/{arg}{ext}',
  fullyParallel: true,
  forbidOnly: !!process.env['CI'],
  retries: 0,
  reporter: process.env['CI'] ? [['github'], ['html', { open: 'never' }]] : 'list',
  updateSnapshots: 'none',
  use: {
    baseURL: `http://localhost:${PORT}/cybercore-css/`,
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
    colorScheme: 'dark',
    reducedMotion: 'reduce',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 } },
    },
  ],
  webServer: {
    command: `npx vite preview --config demo/vite.config.ts --port ${PORT} --strictPort`,
    url: `http://localhost:${PORT}/cybercore-css/`,
    reuseExistingServer: false,
    timeout: 60_000,
  },
  timeout: 60_000,
  expect: {
    timeout: 30_000,
    toHaveScreenshot: {
      animations: 'disabled',
      caret: 'hide',
      scale: 'css',
      maxDiffPixelRatio: 0.001,
    },
  },
});
