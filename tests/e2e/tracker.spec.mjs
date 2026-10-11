import { test, expect, gotoApp, switchTab, FIXED_NOW } from './fixtures.mjs';

const STORAGE_KEY = 'noor_tracker_daily';

test('marking a prayer done updates progress, state and survives reload', async ({ page }) => {
    await gotoApp(page);
    await switchTab(page, 'tracker');

    // renderSection() rebuilds the DOM on every change, so always re-query via locators
    const fajr = page.locator('#tab-tracker label[data-wt-field="prayer_fajr"]').first();
    const fajrCb = fajr.locator('input.wt-prayer-cb');
    const points = page.locator('#tab-tracker .wt-ring-pts').first();
    await expect(fajrCb).not.toBeChecked();
    await expect(points).toHaveText('0');

    await fajr.click();
    await expect(fajrCb).toBeChecked();
    await expect(points).toHaveText('3'); // each fard prayer = 3 pts
    const saved = await page.evaluate((k) => JSON.parse(localStorage.getItem(k)), STORAGE_KEY);
    const dayKey = FIXED_NOW.toLocaleDateString('en-CA', { timeZone: 'Africa/Cairo' }); // YYYY-MM-DD
    expect(saved.days[dayKey].prayers.fajr).toBe(true);

    await page.reload();
    await switchTab(page, 'tracker');
    await expect(fajrCb).toBeChecked();
    await expect(points).toHaveText('3');
});
