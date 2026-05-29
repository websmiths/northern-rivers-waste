/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        paper: 'var(--paper)',
        basalt: 'var(--basalt)',
        ochre: 'var(--ochre)',
        'ochre-text': 'var(--ochre-text)',
        'ochre-bright': 'var(--ochre-bright)',
        moss: 'var(--moss)',
        water: 'var(--water)',
        alert: 'var(--alert)',
        rule: 'var(--rule)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '40rem', // ~640px reading measure
      },
    },
  },
  plugins: [],
};
