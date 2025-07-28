/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <== indispensable pour le mode sombre avec next-themes
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
