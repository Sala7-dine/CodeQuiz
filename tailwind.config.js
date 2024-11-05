/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {

      opacity: {
        '98': '0.99',
       } , 

       backgroundImage: {
        'shape': "url('/images/shapes.svg')",
      } , 

      borderRadius: {
        'reduis': '20px'
      }
    },
  },
  plugins: [],
}

