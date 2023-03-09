/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        thikboii: ["THICCCBOI", 'sans-serif',...defaultTheme.fontFamily.sans],
        mabry: ["Mabry Pro", 'sans-serif',...defaultTheme.fontFamily.sans],
        russo: ["Russo One", 'sans-serif',...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        left:"0.3rem 0.3rem 0 0.1rem #000"
      }
    },
  },
  plugins: [],
}