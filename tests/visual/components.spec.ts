import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the demo page
    await page.goto('/');
    // Wait for fonts to load
    await page.waitForLoadState('networkidle');
    // Small delay to ensure CSS animations have settled
    await page.waitForTimeout(500);
  });

  test('homepage renders correctly', async ({ page }) => {
    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
    });
  });

  test.describe('Buttons', () => {
    test('button component page renders correctly', async ({ page }) => {
      await page.goto('/components/buttons');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot('buttons-page.png', {
        fullPage: true,
      });
    });

    test('button hover states', async ({ page }) => {
      await page.goto('/components/buttons');
      await page.waitForLoadState('networkidle');

      const button = page.locator('.cyber-btn').first();
      await button.hover();
      await page.waitForTimeout(300); // Wait for hover transition

      await expect(button).toHaveScreenshot('button-hover.png');
    });
  });

  test.describe('Cards', () => {
    test('card component page renders correctly', async ({ page }) => {
      await page.goto('/components/cards');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot('cards-page.png', {
        fullPage: true,
      });
    });
  });

  test.describe('Forms', () => {
    test('input component page renders correctly', async ({ page }) => {
      await page.goto('/components/inputs');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot('inputs-page.png', {
        fullPage: true,
      });
    });

    test('input focus state', async ({ page }) => {
      await page.goto('/components/inputs');
      await page.waitForLoadState('networkidle');

      const input = page.locator('.cyber-input').first();
      await input.focus();
      await page.waitForTimeout(300);

      await expect(input).toHaveScreenshot('input-focus.png');
    });
  });

  test.describe('Alerts', () => {
    test('alert component page renders correctly', async ({ page }) => {
      await page.goto('/components/alerts');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot('alerts-page.png', {
        fullPage: true,
      });
    });
  });

  test.describe('Effects', () => {
    test('glitch effect page renders correctly', async ({ page }) => {
      await page.goto('/effects/glitch');
      await page.waitForLoadState('networkidle');
      // Glitch effects have animations, so use higher threshold
      await expect(page).toHaveScreenshot('glitch-page.png', {
        fullPage: true,
        maxDiffPixels: 500,
      });
    });

    test('neon effects page renders correctly', async ({ page }) => {
      await page.goto('/effects/neon');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot('neon-page.png', {
        fullPage: true,
      });
    });
  });

  test.describe('Dark Theme', () => {
    test('maintains dark theme across components', async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Check that dark background is applied
      const body = page.locator('body');
      const backgroundColor = await body.evaluate((el) => getComputedStyle(el).backgroundColor);

      // The background should be a dark color (cyber-void)
      expect(backgroundColor).toMatch(/rgb\(\d{1,2},\s*\d{1,2},\s*\d{1,2}\)/);
    });
  });

  test.describe('Responsive Design', () => {
    test('mobile viewport renders correctly', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot('homepage-mobile.png', {
        fullPage: true,
      });
    });

    test('tablet viewport renders correctly', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot('homepage-tablet.png', {
        fullPage: true,
      });
    });
  });

  test.describe('Accessibility', () => {
    test('reduced motion is respected', async ({ page }) => {
      // Emulate reduced motion preference
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Verify transitions are disabled
      const body = page.locator('body');
      const transitionFast = await body.evaluate(() =>
        getComputedStyle(document.documentElement).getPropertyValue('--transition-fast')
      );

      // With reduced motion, transitions should be 0ms
      expect(transitionFast.trim()).toBe('0ms');
    });
  });
});
