/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'open-menu': {
            '0%': {transform: 'translateX(100px)'},
            '100%': {transform: 'translateX(0px)'},
        },
        'content-fade': {
            '0%': {opacity: 0},
            '100%': {opacity: 1},
        },
      },
      animation: {
        'open-menu': 'open-menu 0.25s ease-in-out',
        'content-fade': 'content-fade 0.30s ease-in-out',
      }
    },
  },
  plugins: [],
}

