# Northern Rivers Waste

An independent, evidence-based information site examining the proposal to build a
50-year regional landfill at Blakebrook Quarry, in the Lismore LGA. It is an
analytical resource, not a petition platform.

Built with [Astro](https://astro.build) + Tailwind CSS. Near-zero client JS,
self-hosted fonts, hand-built SVG data visualisations.

## Pages

| Route | Purpose |
|---|---|
| `/` | Magazine-style overview |
| `/proposal` | What is actually being proposed (fair, factual) |
| `/critique` | What's accurate, what's spin, what's missing |
| `/alternatives` | Three alternative approaches |
| `/centralised-vs-local` | The waste-model / hierarchy argument |
| `/numbers` | Five hand-built data visualisations |
| `/sources` | Reference list + methodology note |
| `/about` | Editorial standards + corrections policy |

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm run preview  # serve the build locally
```

## Regenerating Open Graph images

Per-page social-share images live in `public/og/` and are generated from
`scripts/gen-og.mjs`:

```bash
node scripts/gen-og.mjs
```

Edit the `pages` array in that script to change titles/eyebrows.

## Editing content

Page copy lives in `src/pages/*.astro`. Shared values (site name, contact
email, author, nav links) live in `src/site.ts`. Design tokens (colours,
fonts, reading measure) live in `src/styles/global.css` and
`tailwind.config.mjs`.

## Content placeholders to fill in

These are marked `TODO` and do not block deployment (see spec §14). Search the
codebase for `TODO`:

- **Publisher name / pseudonym** — `src/site.ts` → `author`
- **Corrections + sources email** — `src/site.ts` → `contactEmail`
- **Funding disclosure** — `src/site.ts` → `fundingDisclosure`
- **Real domain** — `src/site.ts` → `domain`, `astro.config.mjs` → `SITE`,
  and `public/robots.txt`
- **Source URLs** — `/sources` and per-page source blocks list publications by
  name with `URL to verify` notes where the exact link is unconfirmed. Replace
  these with verified links rather than leaving the notes in.

## Deployment (Cloudflare Pages)

This repo is set up to deploy as a static site.

1. Push to GitHub (done).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect
   to Git**, select this repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cloudflare auto-deploys on every push to `main`.
5. Add the custom domain under the Pages project once registered, and update
   the placeholders listed above.

Netlify works identically (build `npm run build`, publish `dist`).

## Accessibility & performance

- WCAG 2.2 AA: colour contrast verified (ink 8.8:1, accent ochre variants
  tuned to ≥4.5:1 on their backgrounds), visible focus rings, skip link, SVG
  `<title>`/`<desc>` + text alternatives, `prefers-reduced-motion` respected.
- Lighthouse (local preview, headless): Performance 99, Accessibility 100,
  Best Practices 100, SEO 100.
- Recommend a manual VoiceOver pass on the deployed URL before sign-off
  (spec §8).
