/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      "mob": "0",
      "pc": "1000px"
    },
    colors: {
      "main-bg":"#151515",
      "permium-green": "#1cb561",
      "menu-hover": "#f9ad03"
    },
    extend: {},
  },
  plugins: [],
};
