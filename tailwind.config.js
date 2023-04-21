/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: (theme) => ({
      primary: "#34d399",
      secondary: "#8a5cf6",
      danger: "#e3342f",
      background: "#0a192f",
      "bg-light": "#112240",
    }),
    extend: {
      backgroundImage: (theme) => ({
        "bg-header": "url('/img/bg-header.png')",
        hoot: "url('/img/hoot.png')",
      }),
      zIndex: {
        "-10": "-10",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("tailwindcss-line-length")({
      widths: {
        xs: "18em", // 300px at 1rem
        sm: "30em",
        md: "35em", // 560px at 1rem
        lg: "40em",
        xl: "50em", // 800px at 1rem
      },
      variants: ["responsive"],
    }),
  ],
};
