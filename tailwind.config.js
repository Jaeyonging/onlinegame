/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'button-rgba': "rgba(88, 173, 33, 1)",
        "title-rgba": "rgba(255, 146, 64, 1)",
        "mainpagebutton-rgba": "rgba(88, 173, 33, 1)",
        "footer-rgba": "rgba(255, 255, 255, 0.4)",
      },
      screens: {
        sm: { min: "0px", max: "640px" },
        md: { min: "641px", max: "767px" },
        lg: { min: "768px", max: "1024px" },
      },
    },
  },
  plugins: [],
}

