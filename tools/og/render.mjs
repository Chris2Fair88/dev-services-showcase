// Renders tools/og/og-template.html to public/og-image.png.
// Step 1: headless Chrome screenshots the template at 1200x630.
// Step 2: ffmpeg re-encodes to a 256-colour PNG and strips metadata, which keeps the
//         file under the 300 KB target. Chrome's raw output is about 440 KB.
// Usage: npm run og:render
// Set CHROME_PATH or FFMPEG_PATH to use binaries outside the default locations.
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, statSync, unlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const template = path.join(here, 'og-template.html');
const out = path.join(root, 'public', 'og-image.png');
const raw = path.join(tmpdir(), 'og-image-raw.png');

const find = (list) => list.filter(Boolean).find(p => existsSync(p));

const chrome = find([
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
]);
if (!chrome) {
  console.error('Chrome not found. Set CHROME_PATH to your Chrome binary.');
  process.exit(1);
}

const ffmpeg = find([
  process.env.FFMPEG_PATH,
  'ffmpeg',
]) ?? (spawnSync('ffmpeg', ['-version']).status === 0 ? 'ffmpeg' : null);
if (!ffmpeg) {
  console.error('ffmpeg not found. Install it or set FFMPEG_PATH.');
  process.exit(1);
}

const shot = spawnSync(
  chrome,
  [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    `--screenshot=${raw}`,
    pathToFileURL(template).href,
  ],
  { stdio: 'inherit' },
);
if (shot.status !== 0) {
  console.error('Chrome exited with status', shot.status);
  process.exit(shot.status ?? 1);
}

const encode = spawnSync(
  ffmpeg,
  [
    '-v', 'error', '-y',
    '-i', raw,
    '-filter_complex', '[0:v]split[a][b];[a]palettegen=max_colors=256:stats_mode=full[p];[b][p]paletteuse=dither=bayer:bayer_scale=3',
    '-map_metadata', '-1',
    '-frames:v', '1',
    out,
  ],
  { stdio: 'inherit' },
);
unlinkSync(raw);
if (encode.status !== 0) {
  console.error('ffmpeg exited with status', encode.status);
  process.exit(encode.status ?? 1);
}

// ffmpeg keeps a pHYs (pixel density) chunk. Drop it and any text or EXIF chunks.
// Removing whole chunks leaves the remaining chunk CRCs valid, so no re-encode is needed.
const METADATA_CHUNKS = new Set(['pHYs', 'tEXt', 'zTXt', 'iTXt', 'tIME', 'eXIf']);
const png = readFileSync(out);
const kept = [png.subarray(0, 8)];
for (let p = 8; p < png.length; ) {
  const len = png.readUInt32BE(p);
  const type = png.toString('ascii', p + 4, p + 8);
  const end = p + 12 + len;
  if (!METADATA_CHUNKS.has(type)) kept.push(png.subarray(p, end));
  p = end;
}
writeFileSync(out, Buffer.concat(kept));

const bytes = statSync(out).size;
console.log(`Wrote ${out} (${bytes} bytes)`);
if (bytes > 300_000) {
  console.error('Warning: over the 300 KB target.');
  process.exit(1);
}
