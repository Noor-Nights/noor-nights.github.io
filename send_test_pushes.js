#!/usr/bin/env node
/**
 * Noor Nights — OneSignal Test Push Sender
 * Sends 5 test push notifications, one every 2 minutes.
 * 
 * Usage:
 *   node send_test_pushes.js
 */

const fs = require('fs');
const path = require('path');

// Safely load the secret from a local .env file (so it's never committed to GitHub)
const envPath = path.resolve(__dirname, '.env');
if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8').split('\n');
    envConfig.forEach(line => {
        const parts = line.split('=');
        if (parts.length >= 2) process.env[parts[0].trim()] = parts.slice(1).join('=').trim();
    });
}

const APP_ID = '520970e9-567b-4556-8022-3093a50b765f';
const REST_API_KEY = process.env.ONESIGNAL_REST_API_KEY || '';

const duas = [
    'اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ العَفْوَ فَاعْفُ عَنِّي',
    'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    'اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَعَافِنّي وَارْزُقْنِي',
    'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ',
    'رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ، إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ'
];

const messages = [
    '🤲 Pour your heart out in Dua right now.',
    '🌙 Standing in Noor Nights — a moment to connect with Allah.',
    '✨ These are the blessed nights. Make your dua count.',
    '🎁 Every dua you make may uplift someone who reads it.',
    '🌟 Laylat al-Qadr may be tonight. Stand and make dua.'
];

async function sendPush(index) {
    const body = {
        app_id: APP_ID,
        included_segments: ['All'],
        headings: { en: `🌙 Noor Nights — Test #${index + 1}` },
        contents: { en: `${messages[index]}\n\n"${duas[index]}"` },
        url: 'https://noor-nights.github.io',
        chrome_web_icon: 'https://noor-nights.github.io/assets/icons/icon-192.png',
        firefox_icon: 'https://noor-nights.github.io/assets/icons/icon-192.png',
    };

    const res = await fetch('https://onesignal.com/api/v1/notifications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Key ${REST_API_KEY}`
        },
        body: JSON.stringify(body)
    });

    const data = await res.json();
    if (data.id) {
        console.log(`✅ Push #${index + 1} sent! Notification ID: ${data.id}`);
    } else {
        console.error(`❌ Push #${index + 1} failed:`, JSON.stringify(data));
    }
}

async function runTestPushes() {
    if (!REST_API_KEY) {
        console.error('❌ Please add your OneSignal REST API Key to a .env file first!');
        console.error('   1. Create a file named .env in this folder');
        console.error('   2. Add this line: ONESIGNAL_REST_API_KEY=your_key_here');
        console.error('   (Go to: OneSignal Dashboard → Settings → Keys & IDs → REST API Key)');
        process.exit(1);
    }

    console.log('🚀 Starting 20 test push notifications (one every 1 minute)...\n');
    console.log('   This script will run for the next 20 minutes.');

    for (let i = 0; i < 20; i++) {
        await sendPush(i % 5); // Loops through the 5 messages
        if (i < 19) {
            console.log(`[${new Date().toLocaleTimeString()}] ⏳ Waiting 1 minute before next push...\n`);
            // 1 minute = 60 * 1000 ms
            await new Promise(resolve => setTimeout(resolve, 60 * 1000));
        }
    }

    console.log('\n✨ All 20 test notifications sent!');
}

runTestPushes();
