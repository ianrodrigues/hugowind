const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      'body': ['Mirian Libre'],
      'mono': ['Fira Mono', ...defaultTheme.fontFamily.mono],
      'sans': ['Fira Sans', ...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
