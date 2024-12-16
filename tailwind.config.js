/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      keyframes: {
        zoomInOut: {
          "0% , 100%": {
            scale: "100%",
          },
          "50%": {
            scale: "110%",
          },
        },
      },
      animation: {
        zoomInOut: "zoomInOut 1s ease-in-out infinite",
      },
      fontFamily: {
        Manrope: ["Manrope", ...defaultTheme.fontFamily.sans],
        Jost: ["Jost", ...defaultTheme.fontFamily.sans],
        Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
