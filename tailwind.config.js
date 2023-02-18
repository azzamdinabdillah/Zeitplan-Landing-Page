/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        'patua': ['Patua One', 'cursive'],
      },
      colors: {
        'primary': '#FE5E44',
        'dark-text': '#0E144A'
      },
    },
  },
  plugins: [],
}
