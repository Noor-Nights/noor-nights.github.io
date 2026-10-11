import { test, expect } from './fixtures.mjs';

test.describe('first-run onboarding', () => {
    test.use({ onboarded: false, lang: null });

    test('shows on first visit and persists the chosen language', async ({ page }) => {
        await page.goto('/');
        const modal = page.locator('#onboarding-modal');
        await expect(modal).toHaveClass(/ob-visible/);

        await modal.locator('.ob-lang-btn[data-lang="ar"]').click();
        await expect(modal).toBeHidden();
        await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
        await expect(page.locator('html')).toHaveAttribute('lang', 'ar');

        await page.reload();
        await expect(page.locator('#onboarding-modal.ob-visible')).toHaveCount(0);
        await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    });

    test('is skipped once already onboarded', async ({ page }) => {
        await page.goto('/');
        await page.locator('.ob-lang-btn[data-lang="en"]').click();
        await page.reload();
        await expect(page.locator('#onboarding-modal.ob-visible')).toHaveCount(0);
        await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');
    });
});
