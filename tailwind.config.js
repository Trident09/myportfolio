/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#000000ff',
        bg: '#07063dff',
        action: '#87ceebff',
        important: '#724be4ff',
        snow: '#e5e5e5ff',
      },
    },
  },
  plugins: [],
};
