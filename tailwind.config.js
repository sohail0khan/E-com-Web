/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        accent:"#179957",
        accentDark:"#184D47"
      },
      container:{
        center:true,
        padding:"15px",
      },
    },
  },
  plugins: [],
}