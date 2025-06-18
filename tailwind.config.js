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
      colors: {
        'accent-red': '#FF7CA3',
        'accent-blue': '#EA6969',
        'accent-green': '#50D1AA',
        'accent-orange': '#FFB572',
        'accent-purple': '#9290FE',
        'base-bg': '#FAFAFA',
        'base-dark-bg-1': '#252836',
        'base-dark-bg-2': '#1F1D2B',
        'base-dark-line': '#393C49',
        'base-form-bg': '#2D303E',
        'primary': '#EA7C69',
        'secondary': '#9288E0',
        'text-lighter': '#E0E6E9',
        'text-gray': '#889898',
        'text-light': '#ABBBC2',
        'linear-gradient-start': '#EA7C69',
        'linear-gradient-start': '#EA6969',
      },
    },
  },
  plugins: [],
};
