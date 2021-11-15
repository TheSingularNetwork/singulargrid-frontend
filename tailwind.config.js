const defaultTheme = require("tailwindcss/defaultTheme");
const allColors = require("tailwindcss/colors");

const defaultColors = defaultTheme.colors;

module.exports = {
  mode: "jit",
  purge: ["pages/**/*", "components/**/*"],
  theme: {
    colors: {
      ...defaultColors,
      gray: allColors.trueGray,
    },
    extend: {},
  },
  plugins: [],
};
