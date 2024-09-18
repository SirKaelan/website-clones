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
      maxWidth: {
        "4.5xl": "928px",
      },
      fontSize: {
        "2.5xl": ["28px", { lineHeight: "30px" }],
        "3.5xl": ["32px", { lineHeight: "32px" }],
        "4.5xl": ["38px", { lineHeight: "39.9px" }],
        "5.5xl": ["54px", { lineHeight: "54px" }],
      },
    },

    // To add smaller breakpoints i need to
    // override the entire "screens" key
    // that can be done with "defaultTheme" object
    screens: {
      xs: "480px",
      ...default_theme.screens,
      "xl-2": "1312px",
    },
  },
  plugins: [],
};
