/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#782add",
        neutral: {
          5: "#fbfafa",
          10: "#f4f4f4",
        },
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
