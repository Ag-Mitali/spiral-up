/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        background: '#000000',
        foreground: '#ffffff',
        accent: '#e53e3e',
        lime: '#C8FF00',
      },

      // ─── Fibonacci Type Scale ─────────────────────────────────────────────
      // Fibonacci: 8 · 13 · 21 · 34 · 55 · 89
      // Each size is the sum of the two before it.
      //
      //  fib-label   →  13px   section labels, captions, brand names
      //  fib-body-sm →  16px   secondary body, card descriptions      (practical mid-step)
      //  fib-body    →  21px   primary body copy
      //  fib-h3      →  34px   card / sub-section headings
      //  fib-h2      →  55px   section headings (desktop)
      //  fib-h1      →  89px   hero / page headings (desktop)
      //
      fontSize: {
        'fib-label':   ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.09em' }], // 13px
        'fib-body-sm': ['1rem',      { lineHeight: '1.65' }],                          // 16px
        'fib-body':    ['1.3125rem', { lineHeight: '1.7'  }],                          // 21px
        'fib-h3':      ['2.125rem',  { lineHeight: '1.25' }],                          // 34px
        'fib-h2':      ['3.4375rem', { lineHeight: '1.1'  }],                          // 55px
        'fib-h1':      ['5.5625rem', { lineHeight: '1.0'  }],                          // 89px
      },
    },
  },
  plugins: [],
}
