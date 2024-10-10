/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        roboto: ["var(--font-roboto)"],
        ubuntu: ["var(--font-ubuntu)"],
      },
      colors: {
        cs50: "#fff3ed",
        cs100: "#ffe2d4",
        cs200: "#ffc2a8",
        cs300: "#ff9770",
        cs400: "#ff6037",
        cs500: "#FF441F",
        cs600: "#f01d06",
        cs700: "#c71007",
        cs800: "#9e0f0e",
        cs900: "#7f110f",
        cs950: "#450507",
      },
    },
  },
  plugins: [],
};
