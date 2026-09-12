/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Active le mode sombre via une classe CSS ('dark')
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0D0D1A', // Fond principal demandé
          card: '#161625',
          border: '#232336'
        },
        brand: {
          DEFAULT: '#3B82F6', // Bleu
          accent: '#8B5CF6', // Violet
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Typographie moderne lisible
      },
    },
  },
  plugins: [],
}
