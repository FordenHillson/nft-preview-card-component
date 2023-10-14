/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "soft-blue": "hsl(215, 51%, 70%)",
      Cyan: "hsl(178, 100%, 50%)",
      "very-dark-blue-bg": "hsl(217, 54%, 11%)",
      "very-dark-blue-card": "hsl(216, 50%, 16%)",
      "very-dark-blue-line": "hsl(215, 32%, 27%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
};

module.exports = config;
