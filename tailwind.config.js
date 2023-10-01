/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EAD2AC", 
        secondary: "#DF928E", 
        accent: "#C58882", 
        background: "#D1DEDE", 
        textColor: "#1D201F", 
      },
    },
  },
  plugins: [require("daisyui")],
}

