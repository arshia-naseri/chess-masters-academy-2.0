/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "false",
  theme: {
    extend: {
      colors: {
        primary: "hsl(0, 0%, 98%)",
        border: "rgba(250,250,250,.4)",
      },
    },
  },
  plugins: [],
};
