module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        favorit: ["ABCFavorit", "sans-serif"],
        favoritBook: ["ABCFavorit Book", "sans-serif"],
      },
      colors: {
        "white-200": "#FCFCFC",
        "white-300": "#F4F4F4",
        "indigo-300": "#D1CAFF",
        "indigo-400": "#A394FF",
        "indigo-500": "#7F6BFC",
        "indigo-600": "#4F46E5",
        "indigo-700": "#3922C7",
        "indigo-800": "#1A0789",
        "green-300": "#C2F2E7",
        "green-400": "#8CE3CE",
        "green-500": "#3DCCAA",
        "green-600": "#1EB792",
        "green-700": "#0F886B",
        "green-800": "#095A47",
        "dark-wood-300": "#DDDDDD",
        "dark-wood-400": "#CFD0CF",
        "dark-wood-500": "#ACAFAE",
        "dark-wood-600": "#828784",
        "dark-wood-700": "#595C5A",
        "dark-wood-800": "#2F3130",
        "red-300": "#FFC3B6",
        "red-400": "#FD9179",
        "red-500": "#EF6344",
        "red-600": "#D04020",
        "red-700": "#AA2B10",
        "red-800": "#741D0A",
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.75rem", // 12px
        base: "0.875rem", // 14px
        md: "1rem", // 16px
        lg: "1rem", // 16px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "2.75rem", // 44px
      },
      fontWeight: {
        book: 333,
        medium: 571,
        bold: 500,
      },
      lineHeight: {
        4: "1.3em",
        5: "1.1em",
        6: "1.2em",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
