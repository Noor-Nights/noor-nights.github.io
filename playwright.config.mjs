import { defineConfig, devices } from '@playwright/test';

const PORT = 4173;

export default defineConfig({
    testDir: './tests/e2e',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 2 : undefined,
    reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : [['list'], ['html', { open: 'never' }]],
    use: {
        baseURL: `http://localhost:${PORT}`,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        // The app registers a push service worker; keep it out of tests so
        // network interception stays reliable.
        serviceWorkers: 'block',
        timezoneId: 'Africa/Cairo',
    },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        { name: 'mobile', use: { ...devices['Pixel 7'] } },
    ],
    webServer: {
        command: `node tests/serve.mjs`,
        url: `http://localhost:${PORT}`,
        env: { PORT: String(PORT) },
        reuseExistingServer: !process.env.CI,
    },
});
