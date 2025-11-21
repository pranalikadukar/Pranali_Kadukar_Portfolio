/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C58D63",
        secondary: "#333333",
      },
    },
  },
  plugins: [],
};
