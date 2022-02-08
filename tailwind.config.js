module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        thinkprofile: {
          blue: "#382BA7",
          green: "#0E7C55",
          red: "#FF2227",
          pink: "#F9AEC5",
          aqua: "#C9E2E7",
          bg: "#1A1829",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
