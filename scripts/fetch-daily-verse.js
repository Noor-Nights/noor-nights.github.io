#!/usr/bin/env node
// Fetches today's daily verse from AlQuran Cloud and writes src/js/daily-verse.json.
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
const BASE_DELAY   = 2000; // ms — doubles on each retry

function dayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff  = date - start;
    return Math.floor(diff / 86400000);
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

async function main() {
    const now      = new Date();
    const dateStr  = now.toISOString().slice(0, 10);
    const ayahNum  = (dayOfYear(now) % TOTAL_AYAHS) + 1;
    const url      = `https://api.alquran.cloud/v1/ayah/${ayahNum}/editions/quran-simple,en.sahih`;

    console.log(`Fetching ayah #${ayahNum} for ${dateStr}...`);
    const data = await fetchWithRetry(url);

    if (!data || data.code !== 200 || !Array.isArray(data.data) || data.data.length < 2) {
        console.error('API fetch failed after all retries — keeping previous daily-verse.json unchanged.');
        process.exit(0);
    }

    const arEdition = data.data[0];
    const enEdition = data.data[1];

    const verse = {
        date:     dateStr,
        ayah:     ayahNum,
        ar:       arEdition.text,
        en:       enEdition.text,
        surah_ar: arEdition.surah.name,
        surah_en: arEdition.surah.englishName,
        ref:      `${arEdition.surah.number}:${arEdition.numberInSurah}`,
    };

    fs.writeFileSync(OUT_PATH, JSON.stringify(verse, null, 2) + '\n');
    console.log(`✅ daily-verse.json updated: ${verse.ref} — ${verse.surah_en}`);
}

main().catch(err => {
    console.error('Unhandled error:', err.message);
    process.exit(0); // exit 0 to avoid failing the workflow and blocking deploys
});
