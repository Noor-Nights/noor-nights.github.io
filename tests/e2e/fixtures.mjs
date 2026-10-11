import { test as base, expect } from '@playwright/test';

// A fixed evening inside Dhul Hijjah 1447 (Cairo time) so date-driven UI
// (countdown, tracker day, prayer states) renders deterministically.
export const FIXED_NOW = new Date('2026-05-25T21:30:00+03:00');

/**
 * Shared fixture:
 *  - blocks every non-loopback request (Supabase, Firebase, GoatCounter,
 *    prayer-time APIs, CDNs) so the suite is offline-safe and deterministic
 *  - pins the clock to FIXED_NOW
 *  - collects uncaught page errors and console.error messages so specs can
 *    assert on them (network failures from the blocked hosts are filtered out)
 *  - `onboarded` option (default true) skips the first-run overlay
 */
export const test = base.extend({
    onboarded: [true, { option: true }],
    lang: ['en', { option: true }],
    pageErrors: async ({}, use) => { await use([]); },
    consoleErrors: async ({}, use) => { await use([]); },
    page: async ({ page, onboarded, lang, pageErrors, consoleErrors }, use) => {
        await page.route((url) => url.hostname !== '127.0.0.1', (route) => route.abort());
        // Supabase URL is a deploy-time placeholder (`__SUPABASE_URL__`, see deploy.yml),
        // so locally it resolves same-origin. Stub it as an empty REST response.
        await page.route('**/__SUPABASE_URL__/**', (route) =>
            route.fulfill({ status: 200, contentType: 'application/json', body: '[]' }));
        await page.clock.setFixedTime(FIXED_NOW);
        page.on('pageerror', (err) => pageErrors.push(err));
        page.on('console', (msg) => {
            if (msg.type() !== 'error') return;
            const text = msg.text();
            // Expected noise from the third-party requests we abort above:
            //  - resource-load errors whose source URL is off-loopback
            //  - the app logging its own failed fetch() calls to those hosts
            // Same-origin 404s (e.g. a missing local asset) still fail the test.
            const src = msg.location().url || '';
            const offOrigin = src && !src.startsWith('http://127.0.0.1');
            if (offOrigin && /Failed to load resource|net::ERR_/i.test(text)) return;
            if (/Failed to fetch|NetworkError/i.test(text)) return;
            consoleErrors.push(text);
        });
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
