import { test, expect } from '@playwright/test';
test('page preserves navigation, assets, and mobile layout', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#hero-title')).toContainText('mood enhancer');
  await expect(page.locator('.calm-logo')).toBeVisible();
  expect(await page.locator('.calm-logo').evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
});
test('handoff and coach profile work with the keyboard', async ({ page }) => {
  await page.goto('/');
  const handoff = page.locator('#handoff-button');
  await handoff.focus(); await page.keyboard.press('Enter');
  await expect(handoff).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#handoff-result')).toBeVisible();
  await page.keyboard.press('Enter');
  await expect(page.locator('#handoff-result')).toBeHidden();
  await page.locator('#edit-coach').click();
  await page.locator('#coach-style').selectOption('quiet');
  await page.getByRole('button', { name: 'Save my profile' }).click();
  await expect(page.locator('#coach-reason')).toContainText('no spoken guidance');
  await expect(page.locator('#coach-profile')).toBeHidden();
});
