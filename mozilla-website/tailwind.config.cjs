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
      backgroundImage: {
        "quote-gradient":
          "linear-gradient(90deg,#e8e7f2,#e5e9f5,#e2ebf7,#deedf8,#dbeff8,#daf0f7,#daf2f5,#daf3f3,#dcf4f1,#dff5ef,#e2f5ee,#e5f6ec)",
      },
    },
  },
  plugins: [],
};
