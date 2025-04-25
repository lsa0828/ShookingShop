/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '480': {'max': '480px'},
        '160': {'max': '160px'},
        '130': {'max': '130px'},
      }
    },
  },
  plugins: [],
}

