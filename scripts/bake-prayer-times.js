#!/usr/bin/env node
// Fetches Cairo prayer times from aladhan.com for the current + next month.
// Writes two outputs:
//   stdout            → src/js/cairo-times.js  (JS var, consumed by the browser bundle)
//   src/js/cairo-times.json → plain JSON, consumed by automated_hourly_push.js
//
// Usage (in deploy.yml):
//   node scripts/bake-prayer-times.js > src/js/cairo-times.js

'use strict';

const https = require('https');
const fs    = require('fs');
const path  = require('path');

const LAT    = '30.0444';
const LNG    = '31.2357';
const METHOD = '5'; // Egyptian General Authority of Survey

function fetchMonth(year, month) {
    const url = `https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${LAT}&longitude=${LNG}&method=${METHOD}`;
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let raw = '';
            res.on('data', chunk => { raw += chunk; });
            res.on('end', () => {
                try {
                    const json = JSON.parse(raw);
                    if (json.code !== 200) { reject(new Error(`API code ${json.code}`)); return; }
                    const times = {};
                    for (const day of json.data) {
                        const [d, m, y] = day.date.gregorian.date.split('-');
                        const key = `${y}-${m}-${d}`;
                        times[key] = {
                            fajr:    day.timings.Fajr.split(' ')[0],
                            dhuhr:   day.timings.Dhuhr.split(' ')[0],
                            asr:     day.timings.Asr.split(' ')[0],
                            maghrib: day.timings.Maghrib.split(' ')[0],
                            isha:    day.timings.Isha.split(' ')[0],
                        };
                    }
                    resolve(times);
                } catch (e) { reject(e); }
            });
        }).on('error', reject);
    });
}

async function main() {
    const now   = new Date();
    const thisY = now.getFullYear();
    const thisM = now.getMonth() + 1;
    const nextY = thisM === 12 ? thisY + 1 : thisY;
    const nextM = thisM === 12 ? 1 : thisM + 1;

    const all = {};
    for (const [y, m] of [[thisY, thisM], [nextY, nextM]]) {
        try {
            console.error(`Fetching Cairo times for ${y}/${String(m).padStart(2,'0')}...`);
            Object.assign(all, await fetchMonth(y, m));
            console.error(`  OK — ${Object.keys(all).length} days total`);
        } catch (e) {
            console.error(`  WARN: failed to fetch ${y}/${m}: ${e.message}`);
        }
    }

    if (Object.keys(all).length === 0) {
        console.error('ERROR: No prayer times fetched. Aborting.');
        process.exit(1);
    }

    const generated = new Date().toISOString();

    // 1. Write plain JSON for automated_hourly_push.js (no var wrapper, no minification)
    const jsonPath = path.resolve(__dirname, '../src/js/cairo-times.json');
    fs.writeFileSync(jsonPath, JSON.stringify(all, null, 2) + '\n');
    console.error(`Wrote ${jsonPath} (${Object.keys(all).length} days)`);

    // 2. Write JS module to stdout → redirected to src/js/cairo-times.js by deploy.yml
    process.stdout.write(
        `// Auto-generated at deploy time — do not edit manually.\n` +
        `// Source: aladhan.com method=${METHOD}, Cairo lat=${LAT} lon=${LNG}\n` +
        `// Generated: ${generated}\n` +
        `// eslint-disable-next-line no-unused-vars\n` +
        `var CAIRO_BAKED_TIMES = ${JSON.stringify(all, null, 2)};\n`
    );
}

main().catch(e => { console.error(e); process.exit(1); });
