import { test, expect, gotoApp, switchTab } from './fixtures.mjs';

test('toggles English ↔ Arabic from settings and persists it', async ({ page }) => {
    await gotoApp(page);
    const html = page.locator('html');
    await expect(html).toHaveAttribute('dir', 'ltr');

    await switchTab(page, 'more');
    await page.locator('#settings-lang-btn').click();
    await expect(html).toHaveAttribute('dir', 'rtl');
    await expect(html).toHaveAttribute('lang', 'ar');
    // Nav labels are translated via data-i18n
    await expect(page.locator('.nav-item[data-tab="home"]')).not.toContainText('Home');

    await page.reload();
    await expect(html).toHaveAttribute('dir', 'rtl');

    await switchTab(page, 'more');
    await page.locator('#settings-lang-btn').click();
    await expect(html).toHaveAttribute('dir', 'ltr');
    expect(await page.evaluate(() => localStorage.getItem('noor-lang'))).toBe('en');
});
