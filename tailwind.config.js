/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      screens: {
        xxs: "365px",
        xs: "540px",
      },
      fontSize: {
        "7.5xl": "85px",
      },
      colors: {
        darkLine: "rgba(20, 20, 20, 1)",
        darkLine2: "rgba(20, 20, 20, 0.5)",
        lightGray: "rgba(229, 229, 229, 1)",
        metallicWhite: "rgba(230, 223, 223, 0.911)",
      },
      backgroundImage: {
        "metallic-gradient":
          "linear-gradient(135deg, rgba(250, 253, 253, 0.98) 0%, rgba(255, 255, 255, 0.98) 50%, rgba(240, 253, 223, 0.98) 100%)",
      },
    },
  },
  plugins: [],
};

