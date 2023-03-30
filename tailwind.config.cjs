/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {}
      }
    },
    screens: {
      sm: '768px',
      md: '992px',
      lg: '1200px'
    }
  },
  plugins: [],
  important: true
}
