/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        DEFAULT: "1840px",
      },
    },
    extend: {
      colors: {
        light: {
          primary: "#435334",
          secondary: "#9EB384",
          tertiary: "#CEDEBD",
          bg: "#FAF1E4",
        },
        dark: {
          primary: "#FFECEF",
          secondary: "#FFCACA",
          tertiary: "#372948",
          bg: "#251B37",
        },
      },
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
  },
  darkMode: "class",
  plugins: [],
};
