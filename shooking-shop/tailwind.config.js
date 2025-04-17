/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '480': {'max': '480px'},
      }
    },
  },
  plugins: [],
}

