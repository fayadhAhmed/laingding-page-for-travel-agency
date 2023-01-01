/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '55': '55%',
      },
      colors: {
        // primary: '#FF6363',
        primary: {
          500: '#F2692F',
          600: '#DB4D23',
        },
        secondary: {
          500: '#27A7F7',
          600: '#1C82D4',
        },
        susses: "#86BE33"
      },
      padding: {
        '10%': '10%',
        '5%': '5%',
      }
    },
  },
  plugins: [],
}
