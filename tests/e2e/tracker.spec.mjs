import { test, expect, gotoApp, switchTab } from './fixtures.mjs';

import { FIXED_NOW } from './fixtures.mjs';

const STORAGE_KEY = 'noor_tracker_daily';

test('marking a prayer done updates state and survives reload', async ({ page }) => {
    await gotoApp(page);
    await switchTab(page, 'tracker');

    const fajr = page.locator('#tab-tracker label[data-wt-field="prayer_fajr"]').first();
    const fajrCb = fajr.locator('input.wt-prayer-cb');
    await expect(fajrCb).not.toBeChecked();

    await fajr.click();
    // renderSection() rebuilds the DOM, so re-query after the click
    await expect(page.locator('#tab-tracker label[data-wt-field="prayer_fajr"] input').first()).toBeChecked();
    const saved = await page.evaluate((k) => JSON.parse(localStorage.getItem(k)), STORAGE_KEY);
    const dayKey = FIXED_NOW.toLocaleDateString('en-CA', { timeZone: 'Africa/Cairo' }); // YYYY-MM-DD
    expect(saved.days[dayKey].prayers.fajr).toBe(true);

    await page.reload();
    await switchTab(page, 'tracker');
    await expect(page.locator('#tab-tracker label[data-wt-field="prayer_fajr"] input').first()).toBeChecked();
});
