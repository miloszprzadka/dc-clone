/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {},
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
    }
  },
  plugins: [ 
    require('tailwindcss-animated'),
    require('taos/plugin')
  ],
  
}