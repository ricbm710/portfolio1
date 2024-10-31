/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkmossgreen: "#606c38ff",
        pakistangreen: "#283618ff",
        cornsilk: "#fefae0ff",
        earthyellow: "#dda15eff",
        tigerseye: "#bc6c25ff",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
