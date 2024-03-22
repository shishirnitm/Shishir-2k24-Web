const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      primaryRed: "#E03932",
      primaryBlue: "#186B80",
      white: "#FFFFFF",
    },
    fontFamily: {
      bukhari: ["Bukhari", "sans-serif"],
      bernier: ["Bernier", "sans-serif"],
      antonio: ["Antonio", "sans-serif"],
      blogger: ["BloggerSans", "sans"],
      bloggerBold: ["BloggerBold", "sans"],
      montserrat:["Montserrat", "sans"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-110%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(110%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
