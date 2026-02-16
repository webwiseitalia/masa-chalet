/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        masa: {
          black: '#1a1a1a',
          dark: '#2a2a2a',
          cream: '#f5f0e8',
          gold: '#c9a96e',
          'gold-light': '#d4b87a',
          green: '#4a6741',
          'green-light': '#8aac7e',
          'green-dark': '#2d3f28',
          brown: '#6b4f3a',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Lato', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
