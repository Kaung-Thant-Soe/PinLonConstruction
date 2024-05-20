/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#214366",
        neutralWhite: "#FFFFFF",
        secondary: "#DDE1EA",
        chip: " #F27143",
      },
      fontFamily: {
        header: "Josefin Sans, sans-serif",
        body: "Jost, sans-serif",
      },
    },
  },
  plugins: [],
  darkMode:'class'
};
