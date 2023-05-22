/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1320px',
    },
    colors: {
      black: '#231F20',
      white: ' #FFFFFF',
      beige: "#FDF7F2",
      red: '#EB4E44',
      gray: {
        50: "#F1EFED",
        100: '#E3E3E3',
        200: '#B2B0AD',
        250: '#7F7F7F',
        300: '#777574',
        350: '#C1C1C1'
      },


    },
    fontFamily: {
      sans: ['Libre Franklin', 'sans-serif'],
      serif: ['Oceanic', 'serif'],
    },
    fontSize: {
      xs: ['0.875rem', '20px'],
      sm: ['1rem', '24px'],
      base: ['1.25rem', '30px'],
      md: ['1.5rem', '32px'],
      lg: ['2rem', '40px'],
      xl: ['2.5rem', '50px'],
    },
    container: {
      center: true,
      padding: '1rem',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),

    require('@tailwindcss/aspect-ratio'),
  ],
}