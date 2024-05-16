/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
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
          11: 'linear-gradient(to top left,#536976,#292E49)',
          12: 'linear-gradient(to top left,#f5f7fa,#536976)',
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
      backgroundImage: {
        powder: 'radial-gradient(circle, #181818, #FFFFFA)',
        radial: 'radial-gradient(circle, #173B4F, #1D1F20, #181818)',
        conic: 'conic-gradient(from 180deg at 50% 50%, #181818, #1C475F)',
      },
      screens: {
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}
