import { test, expect, gotoApp, switchTab } from './fixtures.mjs';

const TABS = ['duas', 'dhikr', 'tracker', 'more', 'home'];

test('bottom nav switches between every tab', async ({ page }) => {
    await gotoApp(page);
    for (const name of TABS) {
        await switchTab(page, name);
        await expect(page.locator('.tab-content.active')).toHaveCount(1);
        await expect(page.locator('.nav-item.active')).toHaveAttribute('data-tab', name);
    }
});

test('remembers the last active tab across reloads', async ({ page }) => {
    await gotoApp(page);
    await switchTab(page, 'dhikr');
    expect(await page.evaluate(() => localStorage.getItem('noor_active_tab'))).toBe('dhikr');
    await page.reload();
    await expect(page.locator('#tab-dhikr')).toHaveClass(/active/);
});
