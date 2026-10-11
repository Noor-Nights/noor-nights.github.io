import { test, expect, gotoApp, switchTab } from './fixtures.mjs';

const row = (page, key) => page.locator(`#tasbeeh-grid [data-tb-key="${key}"]`);
const stored = (page) => page.evaluate(() => JSON.parse(localStorage.getItem('noor_tasbeeh') || 'null'));

test.describe('tasbeeh counter', () => {
    test.beforeEach(async ({ page }) => {
        await gotoApp(page);
        await switchTab(page, 'dhikr');
    });

    test('increments a dhikr on tap and persists across reload', async ({ page }) => {
        for (let i = 0; i < 3; i++) await row(page, 'subhanallah').click();
        await expect(row(page, 'subhanallah')).toContainText('3');
        expect((await stored(page)).counts.subhanallah).toBe(3);

        await page.reload();
        await expect(row(page, 'subhanallah')).toContainText('3');
    });

    test('counts each dhikr independently', async ({ page }) => {
        await row(page, 'subhanallah').click();
        await row(page, 'alhamdulillah').click();
        await row(page, 'alhamdulillah').click();
        const { counts } = await stored(page);
        expect(counts.subhanallah).toBe(1);
        expect(counts.alhamdulillah).toBe(2);
    });

    test('reset all clears every count', async ({ page }) => {
        await row(page, 'allahuakbar').click();
        await row(page, 'allahuakbar').click();
        await page.locator('.tasbeeh-reset-btn').click();
        const data = await stored(page);
        expect(Object.values(data.counts).every((n) => n === 0)).toBe(true);
        expect(data.lastReset).toBeTruthy();
        await expect(page.locator('#msg-modal')).toBeVisible();
    });
});
