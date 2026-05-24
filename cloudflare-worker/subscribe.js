/**
 * Noor Nights — FCM Topic Subscription Worker
 *
 * Receives a POST { token } from the web app, obtains a short-lived OAuth2
 * Bearer token from the Firebase service account (env.FIREBASE_SERVICE_ACCOUNT_JSON),
 * and subscribes the FCM token to the "daily-reminders" topic via the Firebase
 * IID API.
 *
 * CF Worker secrets required (Settings → Variables → Secrets):
 *   FIREBASE_SERVICE_ACCOUNT_JSON  — full service account JSON key from Firebase Console
 *
 * CORS is pinned to the production origin. Only the web app can call this endpoint.
 */

const ALLOWED_ORIGIN = 'https://noor-nights.github.io';
const IID_API = 'https://iid.googleapis.com/iid/v1';
const FCM_SCOPE = 'https://www.googleapis.com/auth/firebase.messaging';

// ── CORS headers ──────────────────────────────────────────────────────────────
function corsHeaders(origin) {
    // Reflect the origin only when it matches the allowed production domain.
    const allow = origin === ALLOWED_ORIGIN ? ALLOWED_ORIGIN : '';
    return {
        'Access-Control-Allow-Origin': allow,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };
}

// ── OAuth2 token from service account (RFC 7523 / Google JWT bearer flow) ────
async function getAccessToken(serviceAccount) {
    const now = Math.floor(Date.now() / 1000);
    const claim = {
        iss: serviceAccount.client_email,
        scope: FCM_SCOPE,
        aud: 'https://oauth2.googleapis.com/token',
        iat: now,
        exp: now + 3600,
    };

    // Encode JWT header + payload
    const encode = (obj) =>
        btoa(JSON.stringify(obj)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    const header = encode({ alg: 'RS256', typ: 'JWT' });
    const payload = encode(claim);
    const signingInput = `${header}.${payload}`;

    // Import the RSA private key from the service account
    const pemBody = serviceAccount.private_key
        .replace(/-----BEGIN PRIVATE KEY-----/, '')
        .replace(/-----END PRIVATE KEY-----/, '')
        .replace(/\s/g, '');
    const keyBytes = Uint8Array.from(atob(pemBody), (c) => c.charCodeAt(0));
    const key = await crypto.subtle.importKey(
        'pkcs8',
        keyBytes,
        { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
        false,
        ['sign']
    );

    // Sign and assemble the JWT
    const sigBytes = await crypto.subtle.sign(
        'RSASSA-PKCS1-v1_5',
        key,
        new TextEncoder().encode(signingInput)
    );
    const sig = btoa(String.fromCharCode(...new Uint8Array(sigBytes)))
        .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    const jwt = `${signingInput}.${sig}`;

    // Exchange JWT for a Google OAuth2 access token
    const res = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
    });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`OAuth2 token exchange failed (${res.status}): ${text}`);
    }
    const { access_token } = await res.json();
    return access_token;
}

// ── Main handler ──────────────────────────────────────────────────────────────
export default {
    async fetch(request, env) {
        const origin = request.headers.get('Origin') || '';
        const headers = corsHeaders(origin);

        if (request.method === 'OPTIONS') {
            return new Response(null, { status: 204, headers });
        }

        if (request.method !== 'POST') {
            return new Response('Method not allowed', { status: 405, headers });
        }

        let token;
        try {
            ({ token } = await request.json());
        } catch {
            return new Response('Invalid JSON body', { status: 400, headers });
        }
        if (!token || typeof token !== 'string') {
            return new Response('Missing or invalid token field', { status: 400, headers });
        }

        // Support both ES-modules format (env binding) and Service-Worker format
        // (global variable) — the CF dashboard editor deploys in Service-Worker
        // mode even when the source uses `export default`, so env may be empty.
        const saRaw = (env && env.FIREBASE_SERVICE_ACCOUNT_JSON)
            // eslint-disable-next-line no-undef
            || (typeof FIREBASE_SERVICE_ACCOUNT_JSON !== 'undefined' && FIREBASE_SERVICE_ACCOUNT_JSON);
        let serviceAccount;
        try {
            if (!saRaw) throw new Error('not set');
            serviceAccount = JSON.parse(saRaw);
        } catch {
            return new Response('Server misconfiguration', { status: 500, headers });
        }

        let accessToken;
        try {
            accessToken = await getAccessToken(serviceAccount);
        } catch (err) {
            console.error('OAuth2 error:', err.message);
            return new Response('Auth failed', { status: 502, headers });
        }

        // access_token_auth: true is required by the IID API when using an
        // OAuth2 bearer token instead of the legacy FCM server key.
        const iidRes = await fetch(`${IID_API}/${token}/rel/topics/daily-reminders`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'access_token_auth': 'true',
            },
        });

        if (!iidRes.ok) {
            const text = await iidRes.text();
            console.error(`IID subscription failed (${iidRes.status}):`, text);
            return new Response('Subscription failed', { status: 502, headers });
        }

        return new Response('subscribed', { status: 200, headers });
    },
};
