/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#70c6d3",

          "secondary": "#fc888c",

          "accent": "#b55924",

          "neutral": "#141A24",

          "base-100": "#EEE0F0",

          "info": "#3871C7",

          "success": "#4DE099",

          "warning": "#FCA140",

          "error": "#E53449",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}