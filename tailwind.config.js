/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        bgColor: 'hsl(330, 65%, 50%)',
        white: 'hsl(0, 0%, 100%)',
        bgWhite: 'hsl(0, 0%, 92%)',
        darkBlue: 'hsl(233, 26%, 24%)'
      }
    },
  },
  plugins: [],
}
