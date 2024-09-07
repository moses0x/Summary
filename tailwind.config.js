/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0870A7',
        'box-color': '#F5F5F5',
      }
    },
    
  },
  plugins: [],
}