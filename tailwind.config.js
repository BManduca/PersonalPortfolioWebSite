/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  //definindo a classe 'dark' para ativar o dark mode
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}