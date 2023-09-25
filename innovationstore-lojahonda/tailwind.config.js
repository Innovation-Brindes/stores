/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#58BC03",
        secondary: "#F5F5F5",
        white: "#FFFFFF",
        black: "#000000",
        "header-green": "#E7F3CA",
        "header-red": "#C66D2021",
        green: {
          50: "#E7F3CA",
          100: "#D0E797",
          500: "#95C620",
          900: "#475E11",
        },
        gray: {
          50: "#F5F5F5",
          100: "#CFCFCF",
          200: "#A4A3A3",
          300: "#919191",
          400: "#616162",
          500: "#414042",
          800: "#5A6148",
        },
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        akrobat: ["Akrobat", "sans-serif"],
      },

      backgroundImage: {
        //compre-ganhe-pattern to top #fff, #69B2C5, #017D9D
        "compre-ganhe-pattern": "linear-gradient(180deg, #cecece 5%, #d5d5d5 86%, #ddd 100%);",
      },
    },
  },
  plugins: [],
}
