/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Rutas donde se usan clases Tailwind
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
<<<<<<< HEAD
        sans: ["var(--font-poppins)"],
        mono: ["var(--font-roboto-mono)"],
=======
        poppins: ["var(--font-poppins)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        main: "#FF441F",
        second: "#F47458",
        third: "#FFF6F4",
>>>>>>> main
      },
    },
  },
  plugins: [],
}
