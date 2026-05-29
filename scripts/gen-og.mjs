// One-time / on-demand generator for per-page Open Graph images.
// Renders a branded 1200×630 SVG per route and rasterises to PNG with sharp.
// Run with: node scripts/gen-og.mjs
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const OUT = new URL('../public/og/', import.meta.url);

const COLORS = {
  basalt: '#2d2520',
  paper: '#f6f1e7',
  ochre: '#b8531a',
  rule: '#d9cfbf',
};

const pages = [
  { slug: 'index', eyebrow: 'Northern Rivers Waste', title: 'Before we dig the hole, we should ask the right question.' },
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
  const lines = wrap(title, 26);
  const fontSize = lines.length > 3 ? 58 : 68;
  const lineH = fontSize * 1.12;
  const startY = 300 - ((lines.length - 1) * lineH) / 2;
  const tspans = lines
    .map(
      (l, i) =>
        `<text x="90" y="${startY + i * lineH}" font-family="Georgia, 'Times New Roman', serif" font-size="${fontSize}" font-weight="700" fill="${COLORS.paper}">${esc(l)}</text>`
    )
    .join('\n    ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="${COLORS.basalt}"/>
    <rect x="0" y="0" width="1200" height="10" fill="${COLORS.ochre}"/>
    <text x="90" y="140" font-family="'Courier New', monospace" font-size="26" letter-spacing="4" fill="${COLORS.ochre}">${esc(eyebrow.toUpperCase())}</text>
    <rect x="90" y="168" width="120" height="3" fill="${COLORS.rule}"/>
    ${tspans}
    <text x="90" y="560" font-family="'Courier New', monospace" font-size="24" fill="${COLORS.paper}" opacity="0.7">northern-rivers-waste.org</text>
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
