/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#06141b',
        secondary: '#11212d',
        tertiary: '#253745',
        quaternary: '#4a5c6a',
        quinary: '#9ba8ab',
        senary: '#ccd0df',
      },
    },
  },
  plugins: [],
};
