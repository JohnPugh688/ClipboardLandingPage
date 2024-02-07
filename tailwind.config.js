/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightBlue: '#6173FF',
        darkGrayishBlue: '#4C545D',
        GrayishBlue: '#9FABB2',
        StrongCyan: '#26BAA4',
      },
      fontFamily: {
        BaiJamjuree: ['Bai Jamjuree'],
      },

      backgroundImage:{
        'mobile-bg': "url(/bg-header-mobile.png)",
      },
    }
  },
  plugins: [],
}

