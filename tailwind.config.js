/** @type {import('tailwindcss').Config} */
// Updated config for Vercel deployment compatibility
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#ffffff',
        accent: '#ff0000',
      },
      fontSize: {
        // Fibonacci sequence (scaled for web): 12, 13, 16, 20, 24, 28, 32, 40
        'xs': '0.75rem',    // 12px
        'sm': '0.8125rem',  // 13px
        'base': '1rem',     // 16px
        'lg': '1.25rem',    // 20px
        'xl': '1.5rem',     // 24px
        '2xl': '1.75rem',   // 28px
        '3xl': '2rem',      // 32px
        '4xl': '2.5rem',    // 40px
      },
      lineHeight: {
        tight: '1.1',
        normal: '1.5',
        relaxed: '1.75',
      },
    },
  },
  plugins: [],
}

