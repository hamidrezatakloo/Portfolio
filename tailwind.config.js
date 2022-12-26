/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        calibre: ["calibre", "sans-serif"],
        passion: ['"Passion One"'],
      },
    },
  },
  plugins: [],
};
