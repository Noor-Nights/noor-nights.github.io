import { test, expect, gotoApp } from './fixtures.mjs';

test.describe('smoke', () => {
    test('loads the home tab with no uncaught or console errors', async ({ page, pageErrors, consoleErrors }) => {
        await gotoApp(page);
        await expect(page).toHaveTitle(/Noor Nights/i);
        await expect(page.locator('#tab-home')).toHaveClass(/active/);
        await expect(page.locator('.nav-item[data-tab="home"]')).toHaveClass(/active/);
        expect(pageErrors.map((e) => e.message)).toEqual([]);
        expect(consoleErrors).toEqual([]);
    });

    test('serves a valid web app manifest', async ({ request }) => {
        const res = await request.get('/manifest.json');
        expect(res.ok()).toBeTruthy();
        const manifest = await res.json();
        expect(manifest.name).toBeTruthy();
        expect(manifest.start_url).toBeTruthy();
        expect(Array.isArray(manifest.icons) && manifest.icons.length).toBeTruthy();
    });
});
