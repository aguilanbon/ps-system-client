/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#161E54',
        'secondary': '#E8CBC0',
        'dark': '#100720',
        'bg': '#EFFFFD',
        'hoverprimary': '#928DAB',
        'hoversecondary': '#D7DDE8'
      }
    },
  },
  plugins: [],
}