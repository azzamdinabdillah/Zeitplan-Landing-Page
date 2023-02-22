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
          "0%": { paddingBottom: "8px" },
          "100%": { paddingBottom: "200px" },
        },
        closeNav: {
          "0%": { paddingBottom: "200px" },
          "100%": { paddingBottom: "8px" },
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
