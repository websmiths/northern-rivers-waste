// Central site configuration. Edit placeholders here once values are known.

// Prefix an absolute, site-root path with Astro's configured base path so the
// same code works at the domain root (base '/') and on a GitHub Pages project
// subpath (base '/northern-rivers-waste/'). BASE_URL always ends in a slash.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (path === '/') return base;
  return base.replace(/\/$/, '') + (path.startsWith('/') ? path : `/${path}`);
}

export const SITE = {
  name: 'Northern Rivers Waste',
  // Short wordmark shown in the nav (kept compact on mobile).
  wordmark: 'NR·Waste',
  domain: 'https://northern-rivers-waste.org', // TODO: real domain
  tagline: 'A regional landfill at Blakebrook Quarry — examined on the merits.',
  // Placeholders surfaced in /about and the footer. See spec §14.
  author: 'TODO — publisher name or pseudonym',
  contactEmail: 'TODO@example.org', // corrections + source queries
  fundingDisclosure: 'TODO — funding disclosure (state "none" if applicable)',
};

// Primary nav (right side).
export const PRIMARY_NAV = [
  { href: '/the-post', label: 'The post' },
  { href: '/proposal', label: 'Proposal' },
  { href: '/critique', label: 'Critique' },
  { href: '/alternatives', label: 'Alternatives' },
  { href: '/numbers', label: 'Numbers' },
] as const;

// Full sitemap for the footer.
export const FOOTER_NAV = [
  { href: '/', label: 'Home' },
  { href: '/the-post', label: "The mayor's post" },
  { href: '/proposal', label: 'The proposal' },
  { href: '/critique', label: 'The critique' },
  { href: '/alternatives', label: 'Alternatives' },
  { href: '/centralised-vs-local', label: 'Centralised vs local' },
  { href: '/numbers', label: 'The numbers' },
  { href: '/sources', label: 'Sources' },
  { href: '/about', label: 'About & corrections' },
] as const;
