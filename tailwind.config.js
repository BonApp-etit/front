/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        cs50: "#fff3ed",
        cs100: "#ffe2d4",
        cs200: "#ffc2a8",
        cs300: "#ff9770",
        cs400: "#ff6037",
        cs500: "#FF441F",
        cs600: "#f01d06",
        //   third: "#FFF6F4",
        cs700: "#c71007",
        cs800: "#9e0f0e",
        cs900: "#7f110f",
        cs950: "#450507",
      },
    },
  },
  plugins: [],
};
