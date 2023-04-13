/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#7cffda",

          "secondary": "#f248d5",

          "accent": "#e59eff",

          "neutral": "#37293D",

          "base-100": "#2E4266",

          "info": "#3CA5E7",

          "success": "#73E2A2",

          "warning": "#F3CB39",

          "error": "#DD3162",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}