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
        sm: "320px",
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
        blue2: "#3B82f6",
        dark: "#6B7280",
        gray: "#F9FAFB",
        gray2: "#9CA3AF",
        gray3: "#E5E7EB",
        gray4: "#374151",
        gray5: "#4B5563",
        light: "#D4D4D4",
        extraLight: "#F2F2F2",
        white: "#FFFFFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
