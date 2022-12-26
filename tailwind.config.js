/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        calibre: ["calibre", "sans-serif"],
        passion: ['"Passion One"'],
        colors: {
          primary: "#ccd6f6",
          secondary: "#8892b0",
        },
      },
    },
  },
  plugins: [],
};
