/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {animation: {
      'fade-in': 'fadeIn 1s ease-out',
    },
    container: {
      screens: {
        sm: '600px',
        md: '728px',
      },
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
  },
},
  plugins: [],
}

