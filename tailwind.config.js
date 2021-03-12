const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontFamily: {
      body: ["Miriam Libre"],
      mono: ["Fira Mono", ...defaultTheme.fontFamily.mono],
      sans: ["Fira Sans", ...defaultTheme.fontFamily.sans],
    },
    listStyleType: {
      square: "square",
      decimal: "decimal",
    },
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
