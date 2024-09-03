/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "540px",
      },
      fontSize: {
        "7.5xl": "85px",
      },
      colors: {
        darkLine: "rgba(20, 20, 20, 1)",
        darkLine2: "rgba(20, 20, 20, 0.5)",
      },
    },
  },
  plugins: [],
};

