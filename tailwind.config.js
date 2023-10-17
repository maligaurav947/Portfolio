/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#09090b",
        darkText: "#ffffff",
      },
    },
    fontFamily: {
      main: ["ADLaM Display", "sans-serif"],
      primary: ["Noto Sans", "sans-serif"],
      secondary: ["Roboto", "sans-serif"],
    },
  },
  daisyui: {
    themes: true,
    darkTheme: "luxury",
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },
  plugins: [require("daisyui")],
};
