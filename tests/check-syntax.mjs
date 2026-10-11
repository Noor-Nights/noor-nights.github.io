// Cross-platform JS syntax check (`npm run check`) — runs `node --check` on
// every hand-written script. Vendor bundles are skipped.
import { execFileSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const jsFilesIn = (dir) => readdirSync(dir, { recursive: true })
    .filter((f) => f.endsWith('.js') && !f.split(/[\\/]/).includes('vendor'))
    .map((f) => join(dir, f));

const files = ['sw.js', 'OneSignalSDKWorker.js', ...jsFilesIn('src/js'), ...jsFilesIn('scripts')];

let failed = 0;
for (const file of files) {
    try {
        execFileSync(process.execPath, ['--check', file], { stdio: 'pipe' });
    } catch (err) {
        failed++;
        console.error(`✗ ${file}\n${err.stderr}`);
    }
}
console.log(`${files.length - failed}/${files.length} files OK`);
process.exit(failed ? 1 : 0);
