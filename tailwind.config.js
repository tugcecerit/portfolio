/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F6F5F8",
        secondary: "#999999",
        tertiary: "#363738",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #363738",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/img/HeroBg.jpg')",
      },
      width: {
        '50': '50vw'
      },
      height: {
        '50': '50vh'
      }
    },
  },
  plugins: [],
}

