/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'silver-color': '#f5f7fa',
        'primary-color':'#4caf4f',
        'secondary-color': '#263238',
        'text-gray-900': '#18191f',
        'dark-gray-color': '#4d4d4d',
        'brand-primary-color':'#4caf4f',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}