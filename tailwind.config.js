/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        portfoliotheme: {
          "base-100": "#ECF0F3",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    //require('tailwindcss-textshadow'),
  ],
}

