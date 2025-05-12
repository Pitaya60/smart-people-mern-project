/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3057FF',
        'secondary' : "#0D0842",
        'blackBG': '#F3F3F3',
        'Favorite': '#FF5841'
      }, 
      fontFamily: {
        'primary' : ["Roboto", "sans-serif"],
        'secondary' : ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

