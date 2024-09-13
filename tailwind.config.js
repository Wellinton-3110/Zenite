/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "2135px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1779px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1600px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "1450px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "500px" },
      // => @media (max-width: 639px) { ... }

      tall: { raw: "(max-height: 800px)" },
      // => @media (min-height: 800px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
