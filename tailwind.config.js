/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        Montserrat:["Montserrat","sans-serif"],   // for main heading 
        Ubuntu:["Ubuntu","sans-serif"],  // for content heading 
        Playwrite:["Playwrite GB S","cursive"],  // for paragraph  
      }
    },
  },
  plugins: [],
}

