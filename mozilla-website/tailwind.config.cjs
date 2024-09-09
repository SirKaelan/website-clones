const default_theme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...default_theme.fontFamily.sans],
        heading: ["Zilla Slab", ...default_theme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
