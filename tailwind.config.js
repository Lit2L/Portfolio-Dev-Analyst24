/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{ts,tsx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  prefix: '',
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#EDEDED',
          100: '#dadada',
          200: '#b5b5b5',
          300: '#8f8f8f',
          400: '#6a6a6a',
          500: '#454545',
          600: '#373737',
          700: '#292929',
          800: '#1c1c1c',
          850: '#171717',
          900: '#0e0e0e',
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
      backgroundImage: {
        powder: 'radial-gradient(circle, #1D1F20, #f7f7f7)',
        radial: 'radial-gradient(circle, #173B4F, #1D1F20, #181818)',
        conic: 'conic-gradient(from 180deg at 50% 50%, #181818, #1C475F)',
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
