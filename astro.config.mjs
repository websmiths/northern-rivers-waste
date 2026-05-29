import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Site + base are env-driven so the same code works locally (root), on a
// GitHub Pages project subpath, and on a future custom domain (root).
//   - Local dev / custom domain: SITE defaults to the placeholder domain, base '/'.
//   - GitHub Pages: the deploy workflow sets PUBLIC_SITE_URL + PUBLIC_BASE_PATH.
export const SITE = process.env.PUBLIC_SITE_URL || 'https://northern-rivers-waste.org';
const BASE = process.env.PUBLIC_BASE_PATH || '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
