/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        'ink-soft': 'var(--ink-soft)',
        paper: 'var(--paper)',
        card: 'var(--card)',
        brand: 'var(--brand)',
        'brand-bright': 'var(--brand-bright)',
        accent: 'var(--accent)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        'line-dark': 'var(--line-dark)',
        water: 'var(--water)',
        alert: 'var(--alert)',
        // Legacy keys aliased to the new palette during migration.
        basalt: 'var(--ink)',
        ochre: 'var(--accent)',
        'ochre-text': 'var(--brand)',
        'ochre-bright': 'var(--brand-bright)',
        moss: 'var(--brand)',
        rule: 'var(--line)',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: 'var(--shadow)',
        'card-lg': 'var(--shadow-lg)',
      },
      borderRadius: {
        card: 'var(--radius)',
      },
      maxWidth: {
        prose: '40rem', // ~640px reading measure
      },
    },
  },
  plugins: [],
};
