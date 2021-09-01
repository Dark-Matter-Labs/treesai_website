const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        grotesk: ['"Founders Grotesk Bold"', "sans-serif"],
      },
      screens: {
        sm: "497px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#10B981",
        green2: "#047857",
        green3: "#065F46",
        green4: "#059669",
        green1: "#A7F3D0",
        blue: "#06B6D4",
        dark: "#6B7280",
        gray: "#F9FAFB",
        gray2: "#9CA3AF",
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
