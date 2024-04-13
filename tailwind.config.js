/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#7a7d68',
        seconday: '#ee5a4e',
        tertiary: '#012957',
        quaternary: '#e0e5e9',
      },
      fontFamily: {
        Otomanopee: ["oo", "sans-serif"],
        Otomanopee: ["oo", "sans-serif"],
        luck: ["Luckiest Guy", "cursive"],
        ultra: ["Ultra", "serif"],
        merienda: ["Merienda", "cursive"],
        micro: ["Micro 5", "cursive"],
      },
    },
  },
  plugins: [],
};

