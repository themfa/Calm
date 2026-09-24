import { test, expect } from '@playwright/test';
test('public Jane prototype loads and starts inside the page', async ({ page }) => {
  test.setTimeout(45000);
  await page.goto(process.env.CALM_TEST_PATH || '/');
  const iframe = page.locator('.jane-live iframe');
  await iframe.scrollIntoViewIfNeeded();
  const jane = page.frameLocator('.jane-live iframe');
  const continueButton = jane.getByRole('button', { name: 'Continue', exact: true });
  const loginButton = jane.getByRole('button', { name: 'Login', exact: true });
  await expect(continueButton).toBeVisible({ timeout: 30000 });
  await expect(loginButton).toBeVisible();
  // Native click reaches React even when the Three.js canvas intercepts pointer
  // events, and unlike force-click it does not skip scrolling the short mobile viewport.
  await continueButton.evaluate((node) => {
    node.scrollIntoView({ block: 'center', inline: 'nearest' });
    if (node instanceof HTMLElement) node.click();
  });
  await expect(loginButton).toBeHidden({ timeout: 10000 });
});
