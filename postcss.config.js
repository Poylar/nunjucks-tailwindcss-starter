const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const tailwindcssNested = require('@tailwindcss/nesting');

module.exports = {
  plugins: [
    'postcss-preset-env',
    tailwindcssNested,
    tailwindcss,
    autoprefixer,
  ],
};