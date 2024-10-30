/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00A6ED',
        'secondary': '#023047',
        'dark': '#F3F3F3',
        'favorite': '#FB8500',
      },
      fontFamily: {
        'primary': ["Montserrat", "sans-serif"],
        'secondary': ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

