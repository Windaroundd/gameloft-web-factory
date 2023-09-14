/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
        RobotoCondensed: "Roboto Condensed",
      },
      colors: {
        lightBlue: "#A8D6FD",
        mainBlue: "#2699FB",
        lighterBlue: "#D8EDFF",
        lightestBlue: "#EBF5FF",
      },
    },
  },
  plugins: [],
};
