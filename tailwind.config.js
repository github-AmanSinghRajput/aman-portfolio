/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        colors: {
          primaryText: 'var(--text-color)',
          // Midnight Samurai + your custom brand colors
          backgroundDark: '#0D1117',
          accentBlue: '#4e74a7',
          primaryText: '#F0F6FC',
          ctaRed: '#FF5F6D',
          highlightGreen: '#4ADE80',
        },
      },
    },
    plugins: [],
  }
  