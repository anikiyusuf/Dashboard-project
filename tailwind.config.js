/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens:{
          '6xl':{'max': '1920px'},
          '5xl':{'max': '1400px'},
          '4xl':{'max': '1280px'}
      },
      color:{
        deep:{
          500:' #45269C',
           900:'#1D1042'
        },
        white:{
          900:'#FFFFFF'
        },
        graydeep:{
          400:'#B8B9BD',
          500:' #FCFBFC',
          600:'#F4F6F8',
          700:'#858A93',
          800:'#F2F4F5'
  
        }
      },
      fontFamily:{
        Inter:['Inter','sans-serif']
      }
      
    },
  },
  plugins: [],
}

