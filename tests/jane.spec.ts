import { test, expect } from '@playwright/test';
test('public Jane prototype loads and starts inside the page', async ({ page }) => {
  await page.goto(process.env.CALM_TEST_PATH || '/');
  const iframe = page.locator('.jane-live iframe');
  await iframe.scrollIntoViewIfNeeded();
  const jane = page.frameLocator('.jane-live iframe');
  await expect(jane.getByRole('button', { name: 'Continue', exact: true })).toBeVisible({ timeout: 30000 });
  await expect(jane.getByRole('button', { name: 'Login', exact: true })).toBeVisible();
  await jane.getByRole('button', { name: 'Continue', exact: true }).click();
  await expect(jane.getByRole('button', { name: 'Login', exact: true })).toBeHidden();
});
