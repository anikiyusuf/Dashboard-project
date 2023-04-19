/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    color:{
      deep:{
        500:' #45269C',
         900:'#1D1042'
      } ,
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
    }

  },
  plugins: [],
}

