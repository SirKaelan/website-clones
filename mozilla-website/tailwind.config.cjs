const default_theme = require("tailwindcss/defaultTheme");
const breakpointList = ["xs", "xl-2", ...Object.keys(default_theme.screens)];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      // Matches all font sizes
      pattern: /text-(\d+(\.\d+)?xl|xs|sm|base|lg|xl)/,
      variants: breakpointList,
    },
    {
      // Matches text positions
      pattern: /text-(left|center|right)/,
      variants: breakpointList,
    },
    // This one is useless, but i am leaving it in case
    // i remove the explicit string with the breakpoint
    // and tailwind class value
    {
      // Matches all "order" class values
      pattern: /^(-)?order-([1-9]|1[0-2]|first|last|none)$/,
      variants: breakpointList,
    },
  ],
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
        "7.5xl": "1440px",
      },
      fontSize: {
        "2.5xl": ["28px", { lineHeight: "30px" }],
        "3.5xl": ["32px", { lineHeight: "32px" }],
        "4.5xl": ["38px", { lineHeight: "39.9px" }],
        "5.5xl": ["54px", { lineHeight: "54px" }],
      },
      boxShadow: {
        "nav-dropdown-1":
          "0 16px 24px 2px rgba(29,17,51,.04),0 6px 32px 4px rgba(9,32,77,.12),0 8px 12px -5px rgba(29,17,51,.12)",
        "nav-dropdown-2":
          "0 0 1px 1px rgba(29,17,51,.04),0 0 3px 2px rgba(9,32,77,.12),0 0 2px -3px rgba(29,17,51,.12)",
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
