import { test, expect } from '@playwright/test';
test('page preserves navigation, assets, and mobile layout', async ({ page }) => {
  await page.goto(process.env.CALM_TEST_PATH || '/');
  await expect(page.locator('#hero-title')).toContainText('mood enhancer');
  await expect(page.locator('.calm-logo')).toBeVisible();
  expect(await page.locator('.calm-logo').evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
});
test('coach profile saves preferences', async ({ page }) => {
  await page.goto(process.env.CALM_TEST_PATH || '/');
  await page.locator('#edit-coach').click();
  await page.locator('#coach-style').selectOption('quiet');
  await page.getByRole('button', { name: 'Save my profile' }).click();
  await expect(page.locator('#coach-reason')).toContainText('no spoken guidance');
  await expect(page.locator('#coach-profile')).toBeHidden();
});
