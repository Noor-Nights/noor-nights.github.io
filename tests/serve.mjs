// Minimal zero-dependency static server for the Playwright suite.
// The app has no build step, so we serve the repo root as-is.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const PORT = Number(process.env.PORT || 4173);
const TYPES = {
    '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
    '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
    '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon',
    '.webp': 'image/webp', '.woff2': 'font/woff2', '.webmanifest': 'application/manifest+json',
};

createServer(async (req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let file = normalize(join(ROOT, urlPath));
    if (!file.startsWith(ROOT)) { res.writeHead(403).end(); return; }
    try {
        if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
        const body = await readFile(file);
        res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' });
        res.end(body);
    } catch {
        res.writeHead(404).end('Not found');
    }
}).listen(PORT, () => console.log(`Serving ${ROOT} on http://localhost:${PORT}`));
