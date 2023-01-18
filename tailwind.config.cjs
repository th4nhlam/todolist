/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindConfig: './styles/tailwind.config.js',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // colors:{
    //   teal: '#008080',
    //   black: '#000000',
    //   white: '#FFFFFF'
    // }
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
