#!/usr/bin/env node
// Fetches today's daily verse from AlQuran Cloud, writes src/js/daily-verse.json,
// then sends an FCM push notification to the daily-reminders topic.
// Run by .github/workflows/daily-verse.yml at 18:00 Cairo (15:00 UTC) daily.
//
// Verse selection: deterministic rotation through all 6236 ayahs using day-of-year
// as seed — every user sees the same verse on the same calendar day.

'use strict';

const fs   = require('fs');
const path = require('path');

const OUT_PATH     = path.resolve(__dirname, '../src/js/daily-verse.json');
const TOTAL_AYAHS  = 6236;
const MAX_ATTEMPTS = 3;
const BASE_DELAY   = 2000; // ms — doubles on each retry (2s, 4s)

const PROJECT_ID          = process.env.FIREBASE_PROJECT_ID;
const SERVICE_ACCOUNT_JSON = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;

function dayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    return Math.floor((date - start) / 86400000);
}

async function fetchWithRetry(url, attempts = MAX_ATTEMPTS) {
    for (let i = 1; i <= attempts; i++) {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return await res.json();
        } catch (err) {
            console.warn(`Attempt ${i}/${attempts} failed: ${err.message}`);
            if (i < attempts) {
                const delay = BASE_DELAY * Math.pow(2, i - 1);
                console.log(`Retrying in ${delay}ms...`);
                await new Promise(r => setTimeout(r, delay));
            }
        }
    }
    return null;
}

// ── FCM push (reuses same OAuth2 + HTTP v1 pattern as automated_hourly_push.js) ──

async function getAccessToken(serviceAccount) {
    const { GoogleAuth } = require('google-auth-library');
    const auth = new GoogleAuth({
        credentials: serviceAccount,
        scopes: ['https://www.googleapis.com/auth/firebase.messaging'],
    });
    const client = await auth.getClient();
    const { token } = await client.getAccessToken();
    return token;
}

async function sendVersePush(verse) {
    if (!PROJECT_ID || !SERVICE_ACCOUNT_JSON) {
        console.warn('⚠️  FCM env vars not set — skipping push notification.');
        return;
    }

    let serviceAccount;
    try {
        serviceAccount = JSON.parse(SERVICE_ACCOUNT_JSON);
    } catch {
        console.warn('⚠️  FIREBASE_SERVICE_ACCOUNT_JSON is not valid JSON — skipping push.');
        return;
    }

    const title    = `📖 آية اليوم — ${verse.surah_ar}`;
    const tafsirExcerpt = verse.tafsir ? '\n\n' + verse.tafsir.slice(0, 120) + (verse.tafsir.length > 120 ? '…' : '') : '';
    const body     = verse.ar + tafsirExcerpt;
    const collapseId = `daily-verse-${verse.date}`;

    try {
        const accessToken = await getAccessToken(serviceAccount);
        const payload = {
            message: {
                topic: 'daily-reminders',
                notification: { title, body },
                webpush: {
                    notification: {
                        icon:    'https://noor-nights.github.io/assets/icons/icon-512.png',
                        badge:   'https://noor-nights.github.io/assets/icons/icon-96-mono.png',
                        tag:     collapseId,
                        silent:  false,
                        vibrate: [200, 100, 200],
                    },
                    fcm_options: { link: 'https://noor-nights.github.io' },
                },
            },
        };

        const res = await fetch(
            `https://fcm.googleapis.com/v1/projects/${PROJECT_ID}/messages:send`,
            {
                method:  'POST',
                headers: {
                    'Content-Type':  'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify(payload),
            }
        );

        if (!res.ok) {
            const text = await res.text();
            throw new Error(`FCM HTTP ${res.status}: ${text}`);
        }

        const data = await res.json();
        console.log(`✅ Push sent! Message: ${data.name}`);
    } catch (err) {
        // Non-fatal — verse JSON is already written; don't block the deploy
        console.warn(`⚠️  Push notification failed: ${err.message}`);
    }
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
    const now      = new Date();
    const dateStr  = now.toISOString().slice(0, 10);
    const ayahNum  = (dayOfYear(now) % TOTAL_AYAHS) + 1;
    const url = `https://api.alquran.cloud/v1/ayah/${ayahNum}/editions/quran-simple,en.sahih,ar.muyassar`;

    console.log(`Fetching ayah #${ayahNum} for ${dateStr}...`);
    const data = await fetchWithRetry(url);

    if (!data || data.code !== 200 || !Array.isArray(data.data) || data.data.length < 2) {
        console.error('API fetch failed after all retries — keeping previous daily-verse.json unchanged.');
        process.exit(0);
    }

    const arEdition     = data.data[0];
    const enEdition     = data.data[1];
    const tafsirEdition = data.data[2]; // ar.muyassar — may be absent on older ayahs

    const verse = {
        date:     dateStr,
        ayah:     ayahNum,
        ar:       arEdition.text,
        en:       enEdition.text,
        tafsir:   tafsirEdition?.text || '',
        surah_ar: arEdition.surah.name,
        surah_en: arEdition.surah.englishName,
        ref:      `${arEdition.surah.number}:${arEdition.numberInSurah}`,
    };

    fs.writeFileSync(OUT_PATH, JSON.stringify(verse, null, 2) + '\n');
    console.log(`✅ daily-verse.json updated: ${verse.ref} — ${verse.surah_en}`);

    await sendVersePush(verse);
}

main().catch(err => {
    console.error('Unhandled error:', err.message);
    process.exit(0); // exit 0 so API/push failures never block the deploy pipeline
});
