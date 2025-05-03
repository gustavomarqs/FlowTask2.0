/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#1e1e2f',
          800: '#2a2a3f',
        },
        cyan: {
          400: '#00d9ff',
          600: '#00b3cc',
        },
        green: {
          400: '#00ffcc',
        },
      },
    },
  },
  plugins: [],
};
