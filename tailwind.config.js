/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        play: ['Play', 'sans-serif'],
        title: ['"Sofia Sans Semi Condensed"', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
