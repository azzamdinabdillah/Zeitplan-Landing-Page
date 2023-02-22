/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        patua: ["Patua One", "cursive"],
      },
      colors: {
        primary: "#FE5E44",
        "dark-text": "#0E144A",
      },
      keyframes: {
        openNav: {
          "0%": { height: "12vh" },
          "100%": { height: "60vh" },
        },
        closeNav: {
          "0%": { height: "60vh" },
          "100%": { height: "12vh" },
        },
      },
      animation: {
        "anim-navbar": "openNav 0.3s ease-in-out",
        "anim-navbar-close": "closeNav 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
