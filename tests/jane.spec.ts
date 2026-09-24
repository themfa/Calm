import { test, expect } from '@playwright/test';
test('public Jane prototype loads and starts inside the page', async ({ page }) => {
  test.setTimeout(45000);
  await page.goto(process.env.CALM_TEST_PATH || '/');
  const iframe = page.locator('.jane-live iframe');
  await iframe.scrollIntoViewIfNeeded();
  const jane = page.frameLocator('.jane-live iframe');
  const continueButton = jane.getByRole('button', { name: 'Continue', exact: true });
  await expect(continueButton).toBeVisible({ timeout: 30000 });
  await expect(jane.getByRole('button', { name: 'Login', exact: true })).toBeVisible();
  await continueButton.click({ force: true });
  await expect(jane.getByRole('button', { name: 'Login', exact: true })).toBeHidden();
});
