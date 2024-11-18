/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        'soft-blue' : '#3c5ff0',
        'soft-blue-bg' : '#eff2ff',
        'soft-green' : '#90c78f',
        'soft-green-bg' : '#f5fff5',
        'soft-purpple' : '#a173ec',
        'soft-purpple-bg' : '#f6f0ff',
        'soft-orange' : '#fe6d42',
        'soft-orange-bg' : '#fff2ee',
        'soft-red' : '#ff2d2d',
        'soft-white' : '#f4f4f4',
      }
    },
  },
  plugins: [],
}

