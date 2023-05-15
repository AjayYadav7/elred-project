/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: colors.blue[100], //"#76A9FA", TODO: will remove once updated all places in next commit
          200: colors.blue[200], // "#3F83F8", TODO: will remove once updated all places in next commit
          300: colors.blue[300], //"#1C64F2", TODO: will remove once updated all places in next commit
          400: colors.blue[400],
          500: colors.blue[500],
          600: colors.blue[600],
          700: colors.blue[700],
          800: colors.blue[800],
          900: colors.blue[900],
        },
        secondary: {
          100: colors.white,
        },
        danger: {
          100: colors.red[600],
        },
        success: {
          100: colors.green[600],
        },
        gitProvider: {
          100: "#F05133",
        },
      },
    },
  },
  plugins: [],
};
