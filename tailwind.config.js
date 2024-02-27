/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}","./*.{html,js}"],
  theme: {
    extend: {
      color: {
        primary: '#14b8a6'
      }
    },
  },
  plugins: [],
}

