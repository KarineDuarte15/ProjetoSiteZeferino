// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Garante que o Tailwind leia seus arquivos
  ],
  theme: {
    extend: {
      colors: {
        // Definindo a paleta de cores "Luxo Clássico"
        brand: {
          primary: '#6b0504', // Vinho/Bordô
          secondary: '#c8a97e', // Bege/Dourado
          light: '#fdfaf6',     // Fundo Bege Claro
          dark: '#2b2b2b',      // Texto Preto Suave
        }
      }
    },
  },
  plugins: [],
}