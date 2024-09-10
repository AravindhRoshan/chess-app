/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-tile": "#f0d9b5", // Light tile color
        "dark-tile": "#b58863", // Dark tile color
        highlight: "#a4c639", // Highlight color for legal moves
        check: "#e53935", // Check color
      },
      spacing: {
        "tile-size": "calc(50px)", // Define your tile size here, for example
      },
    },
  },
  plugins: [],
};
