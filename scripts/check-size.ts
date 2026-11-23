// Size budget for the CDN bundle: fails when the gzipped dist/cybercore.min.css grows past
// BUDGET_GZIP_BYTES. Run after `npm run build:css`.
//
//   npm run check:size
//
// Raising the budget is a deliberate, reviewed change to this file: say in the pull request
// what the extra bytes buy.
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { brotliCompressSync, constants, gzipSync } from 'node:zlib';

const BUDGET_GZIP_BYTES = 30 * 1024;
const file = resolve(import.meta.dirname, '../dist/cybercore.min.css');

if (!existsSync(file)) {
  console.error(`✗ ${file} is missing. Build it first: npm run build:css`);
  process.exit(1);
}

const css = readFileSync(file);
const gzip = gzipSync(css, { level: 9 }).length;
const brotli = brotliCompressSync(css, {
  params: { [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MAX_QUALITY },
}).length;
const kb = (bytes: number) => `${(bytes / 1024).toFixed(1)} KB`;

console.log(
  `dist/cybercore.min.css: ${kb(css.length)} raw, ${kb(gzip)} gzip, ${kb(brotli)} brotli ` +
    `(gzip budget ${kb(BUDGET_GZIP_BYTES)}, ${Math.round((gzip / BUDGET_GZIP_BYTES) * 100)}% used)`
);

if (gzip > BUDGET_GZIP_BYTES) {
  console.error(
    `✗ gzip size ${kb(gzip)} is over the ${kb(BUDGET_GZIP_BYTES)} budget by ${kb(gzip - BUDGET_GZIP_BYTES)}. ` +
      'Remove what the bytes are not worth, or raise BUDGET_GZIP_BYTES in scripts/check-size.ts ' +
      'and justify it in the pull request.'
  );
  process.exit(1);
}
