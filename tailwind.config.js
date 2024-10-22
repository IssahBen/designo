/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        peach: "hsl(11,73%,66%)",
        black: "hsl(270,3%,11%)",
        white: "hsl(0,0%,100%)",
        lightpeach: "hsl(11,100%,80%)",
        darkgrey: "hsl(264,5%,20%)",
        lightgrey: "hsl(210,17%,95%)",
      },
    },
  },
  plugins: [],
};
