import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        my_bg_image:
          "url('https://www.nataliejweddings.com/wp-content/uploads/2020/06/HannahOllie-Wedding-1054-scaled.jpg')",
      },
      colors: {
        "main-light": "rgb(253,245,238)",
        "soft-bl:": "rgb(170,204,241)",
        primary: "rgb(235, 84, 198)",
        secondary: "#000",
      },
      fontFamily: {
        slabo: ["Slabo 27px", "serif"],
        logo: ["Lobster Two", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    fontSize: {
      xsm: "12px",
      sm: "16px",
      reg: "20px",
      lg: "24px",
      xl: "26px",
      "2xl": "28px",
      "3xl": "30px",
      "4xl": "32px",
      "5xl": "34px",
      "6xl": "36px",
      "7xl": "38px",
      "8xl": "40px",
      "9xl": "42px",
      "10xl": "44px",
      "11xl": "46px",
      "12xl": "48px",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
