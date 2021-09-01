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
        sm: { min: '476px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
        md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
        lg: { min: '1200px' }, // Desktop smallest.
        xl: { min: '1159px' }, // Desktop wide.
        xxl: { min: '1359px' } // Desktop widescreen.
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
