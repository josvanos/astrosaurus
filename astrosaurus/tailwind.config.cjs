/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: "#3D769A",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};
