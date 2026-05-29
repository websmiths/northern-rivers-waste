// One-time / on-demand generator for per-page Open Graph images.
// Renders a branded 1200×630 SVG per route and rasterises to PNG with sharp.
// Run with: node scripts/gen-og.mjs
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const OUT = new URL('../public/og/', import.meta.url);

const COLORS = {
  ink: '#0e1316',
  ink2: '#16212a',
  edge: '#143240',
  white: '#ffffff',
  brandBright: '#2fcdb4',
  accent: '#ff5d3e',
  lineDark: '#27343d',
  muted: '#93a0a7',
};

// Heavy geometric sans to echo Archivo; librsvg falls back gracefully.
const DISPLAY = "'Archivo', 'Helvetica Neue', 'Arial', sans-serif";
const MONO = "'IBM Plex Mono', 'Courier New', monospace";

const pages = [
  { slug: 'index', eyebrow: 'Northern Rivers Waste', title: 'Before we dig the hole, ask the right question.' },
  { slug: 'default', eyebrow: 'Northern Rivers Waste', title: 'A regional landfill at Blakebrook Quarry, examined on the merits.' },
  { slug: 'proposal', eyebrow: 'The proposal', title: 'What is actually being proposed' },
  { slug: 'critique', eyebrow: 'The critique', title: "What's spin, what's accurate, what's missing" },
  { slug: 'alternatives', eyebrow: 'Alternatives', title: 'Three alternative approaches' },
  { slug: 'centralised-vs-local', eyebrow: 'The model question', title: 'One big hole, many small ones, or a different model entirely' },
  { slug: 'numbers', eyebrow: 'The numbers', title: 'Five figures worth doing carefully' },
  { slug: 'sources', eyebrow: 'Sources', title: 'References and methodology' },
  { slug: 'about', eyebrow: 'About', title: 'Who runs this, and how we work' },
];

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// naive word-wrap into <=maxChars lines
function wrap(text, maxChars) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    if ((line + ' ' + w).trim().length > maxChars) {
      lines.push(line.trim());
      line = w;
    } else {
      line = (line + ' ' + w).trim();
    }
  }
  if (line) lines.push(line.trim());
  return lines;
}

function svg({ eyebrow, title }) {
  const lines = wrap(title, 24);
  const fontSize = lines.length > 3 ? 60 : 72;
  const lineH = fontSize * 1.04;
  const startY = 300 - ((lines.length - 1) * lineH) / 2;
  const tspans = lines
    .map(
      (l, i) =>
        `<text x="90" y="${startY + i * lineH}" font-family="${DISPLAY}" font-size="${fontSize}" font-weight="800" letter-spacing="-1.5" fill="${COLORS.white}">${esc(l)}</text>`
    )
    .join('\n    ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <radialGradient id="bg" cx="80%" cy="-10%" r="150%">
        <stop offset="0%" stop-color="${COLORS.edge}"/>
        <stop offset="38%" stop-color="${COLORS.ink2}"/>
        <stop offset="100%" stop-color="${COLORS.ink}"/>
      </radialGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect x="0" y="0" width="1200" height="8" fill="${COLORS.accent}"/>
    <rect x="90" y="118" width="22" height="22" rx="6" fill="${COLORS.brandBright}"/>
    <text x="126" y="136" font-family="${MONO}" font-size="26" letter-spacing="4" fill="${COLORS.brandBright}">${esc(eyebrow.toUpperCase())}</text>
    ${tspans}
    <rect x="90" y="540" width="56" height="4" rx="2" fill="${COLORS.accent}"/>
    <text x="90" y="585" font-family="${MONO}" font-size="24" fill="${COLORS.muted}">northern-rivers-waste.org</text>
  </svg>`;
}

await mkdir(OUT, { recursive: true });
for (const p of pages) {
  const buf = Buffer.from(svg(p));
  const path = new URL(`${p.slug}.png`, OUT);
  await sharp(buf).png().toFile(path.pathname);
  console.log('wrote', `${p.slug}.png`);
}
console.log('done');
