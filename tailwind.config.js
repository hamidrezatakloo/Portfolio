/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        calibre: ["calibre", "sans-serif"],
        passion: ['"Passion One"'],
      },
      colors: {
        primary: "#ccd6f6",
        secondary: "#8892b0",
        light: "rgba(6, 18, 70,.5)",
      },
      keyframes: {
        slide: {
          "0%": { left: "-60px" },
          "100%": { left: "140%" },
        },
      },
      animation: {
        slide: "slide 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
