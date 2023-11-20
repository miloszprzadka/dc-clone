/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {},
    backgroundPosition: {
      'bottom-4': 'center bottom 1rem',
      'left-bottom': 'left bottom ',
      'left-top': 'left top',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      'top-4': 'center top 1rem',
    },
    screens: {
      '3xl': {'max': '2560px'},
      // => @media (max-width: 1535px) { ... }

      '2xl': {'max': '1920px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1366px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1280px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'xsm': {'min': '50px'},
      // => @media (min-width: 639px) { ... }

      'minlg': {'min': '1280px'},
      // => @media (max-width: 1023px) { ... }

      'minbg': {'min': '1025px'},
      // => @media (max-width: 1023px) { ... }

      'maxbg': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }
    }
  },
  plugins: [ 
    require('tailwindcss-animated'),
    require('taos/plugin')
  ],
  
}