/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
      },
    },
    colors: {
      'base-bg': '#1F1D2B',
      'form-bg': '#2D303E',
      'form-border': '#393C49',
      'btn-orange': '#EA7C69',
      'white': '#fff',
    },
  },
  plugins: [],
};
