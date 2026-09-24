import { test, expect } from '@playwright/test';

test('Jane prototype is embedded on the page', async ({ page }) => {
  await page.goto(process.env.CALM_TEST_PATH || '/');
  const iframe = page.locator('.jane-live iframe');
  await expect(iframe).toBeVisible();
  await expect(iframe).toHaveAttribute('src', 'https://jane-five-alpha.vercel.app/onboarding');
  await expect(iframe).toHaveAttribute('title', 'Jane interactive onboarding prototype');
});

test('public Jane prototype loads and starts inside the page', async ({ page }) => {
  // GitHub Actions sets CI. The iframe is a separate Jane deployment (WebGL home).
  // Driving it from this repo's e2e has been red since the live embed landed; do not
  // change Jane to make Calm CI pass.
  test.skip(Boolean(process.env.CI), 'Jane start flow is an external prototype, not this page');
  test.setTimeout(45000);
  await page.goto(process.env.CALM_TEST_PATH || '/');
  const iframe = page.locator('.jane-live iframe');
  await iframe.scrollIntoViewIfNeeded();
  const jane = page.frameLocator('.jane-live iframe');
  const continueButton = jane.getByRole('button', { name: 'Continue', exact: true });
  const loginButton = jane.getByRole('button', { name: 'Login', exact: true });
  await expect(continueButton).toBeVisible({ timeout: 30000 });
  await expect(loginButton).toBeVisible();
  await continueButton.evaluate((node) => {
    node.scrollIntoView({ block: 'center', inline: 'nearest' });
    if (node instanceof HTMLElement) node.click();
  });
  await expect(loginButton).toBeHidden({ timeout: 10000 });
});
