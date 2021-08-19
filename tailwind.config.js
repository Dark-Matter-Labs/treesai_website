const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#10B981",
        green2: "#047857",
        green3: "#065F46",
        green4: "#059669",
        green1: "#A7F3D0",
        blue: "#226791",
        dark: "#6B7280",
        gray: "#F9FAFB",
        light: "#D4D4D4",
        extraLight: "#F2F2F2",
        white: "#FFFFFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
