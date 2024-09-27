/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary : '#ee141f',
        'primary-80' : '#ff5454',
        'dark-footer' : '#333333'
      }
    },
  },
  plugins: [],
}