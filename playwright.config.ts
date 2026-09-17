import { defineConfig, devices } from '@playwright/test';
const existingServer = process.env.CALM_TEST_BASE_URL;
export default defineConfig({
  testDir: './tests',
  use: { baseURL: existingServer || 'http://127.0.0.1:3199', trace: 'retain-on-failure' },
  webServer: existingServer ? undefined : { command: 'npm run dev -- --hostname 127.0.0.1 --port 3199', url: 'http://127.0.0.1:3199', reuseExistingServer: !process.env.CI },
  projects: [{ name: 'desktop', use: { ...devices['Desktop Chrome'] } }, { name: 'mobile', use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium' } }],
});
