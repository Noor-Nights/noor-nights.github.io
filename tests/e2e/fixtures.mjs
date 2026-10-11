import { test as base, expect } from '@playwright/test';

// A fixed evening inside Dhul Hijjah 1447 (Cairo time) so date-driven UI
// (countdown, tracker day, prayer states) renders deterministically.
export const FIXED_NOW = new Date('2026-05-25T21:30:00+03:00');

/**
 * Shared fixture:
 *  - blocks every non-localhost request (Supabase, Firebase, GoatCounter,
 *    prayer-time APIs, CDNs) so the suite is offline-safe and deterministic
 *  - pins the clock to FIXED_NOW
 *  - collects uncaught page errors so specs can assert on them
 *  - `onboarded` option (default true) skips the first-run overlay
 */
export const test = base.extend({
    onboarded: [true, { option: true }],
    lang: ['en', { option: true }],
    pageErrors: async ({}, use) => { await use([]); },
    page: async ({ page, onboarded, lang, pageErrors }, use) => {
        await page.route((url) => url.hostname !== 'localhost', (route) => route.abort());
        await page.clock.setFixedTime(FIXED_NOW);
        page.on('pageerror', (err) => pageErrors.push(err));
        await page.addInitScript(({ onboarded, lang }) => {
            // Seed once per test; later reloads must keep what the app saved.
            if (sessionStorage.getItem('__seeded')) return;
            sessionStorage.setItem('__seeded', '1');
            localStorage.clear();
            if (onboarded) localStorage.setItem('noor-onboarded', '1');
            if (lang) localStorage.setItem('noor-lang', lang);
        }, { onboarded, lang });
        await use(page);
    },
});

export { expect };

export async function gotoApp(page) {
    await page.goto('/');
    // Phase-2 init (tasbeeh, tracker, badges) runs in a setTimeout after first paint.
    await expect(page.locator('#tasbeeh-grid .tb-row, #tasbeeh-grid .tasbeeh-display').first()).toBeAttached();
}

export async function switchTab(page, name) {
    await page.locator(`.bottom-nav .nav-item[data-tab="${name}"], .nav-item[data-tab="${name}"]`).first().click();
    await expect(page.locator(`#tab-${name}`)).toHaveClass(/active/);
}
