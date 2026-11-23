// One full-page screenshot per demo page: the landing pages, plus every component, effect and
// utility page the index pages link to. A new module page has no baseline yet and fails until
// its baseline is accepted: `npm run build && scripts/visual.sh --update-snapshots`.
import { expect, test } from '@playwright/test';

import type { Page } from '@playwright/test';

const LANDING = ['', 'docs', 'docs/theming', 'components', 'effects', 'utilities', 'icons'];
const INDEXES = ['components', 'effects', 'utilities'];

// Routes are relative to the demo's base URL (playwright.config.ts): `components/buttons`.
async function open(page: Page, route: string) {
  await page.goto(`./${route}`);
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => document.fonts.ready);
}

function snapshotName(route: string) {
  return `${route.replaceAll('/', '--') || 'home'}.png`;
}

async function screenshot(page: Page, route: string) {
  await open(page, route);
  await expect(page).toHaveScreenshot(snapshotName(route), { fullPage: true });
}

for (const route of LANDING) {
  test(`page /${route}`, async ({ page }) => {
    await screenshot(page, route);
  });
}

// A gallery tile has a fixed height and clips its preview: an example that does not fit is cut
// off mid-word. A module whose first example is too big gets a `thumbnail` in its docs data.
for (const width of [390, 1280]) {
  test(`gallery previews fit their tiles at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 800 });
    for (const route of ['', ...INDEXES]) {
      await open(page, route);
      const clipped = await page
        .locator('.site-tile__preview')
        .evaluateAll((previews) =>
          previews
            .filter((p) => p.scrollWidth > p.clientWidth || p.scrollHeight > p.clientHeight)
            .map((p) => p.closest('li')?.querySelector('.site-tile__title')?.textContent ?? '?')
        );
      expect(clipped, `clipped previews on /${route}`).toEqual([]);
    }
  });
}

for (const index of INDEXES) {
  test(`every ${index} page`, async ({ page }) => {
    test.setTimeout(10 * 60_000); // one test, many full-page screenshots
    await open(page, index);
    const base = new URL(page.url()).pathname.replace(new RegExp(`${index}/?$`), '');
    const paths = await page
      .locator(`main a[href*="/${index}/"]`)
      .evaluateAll((links) =>
        links.map((link) => new URL((link as HTMLAnchorElement).href).pathname)
      );
    const routes = [...new Set(paths.map((path) => path.replace(base, '')))].sort();
    expect(routes.length, `/${index} links to no ${index} pages`).toBeGreaterThan(0);

    for (const route of routes) {
      await test.step(route, async () => {
        await screenshot(page, route);
        // Docs data marks inline code with backticks; one that reaches the page was not parsed.
        const stray = await page
          .locator('table code')
          .evaluateAll((codes) =>
            codes.map((code) => code.textContent ?? '').filter((text) => text.includes('`'))
          );
        expect(stray, `unparsed backticks in tables on /${route}`).toEqual([]);
      });
    }
  });
}
