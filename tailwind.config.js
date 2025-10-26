// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Correto, sem as cores aqui
    },
  },
  plugins: [
    // GARANTA QUE ESTE ARRAY ESTÁ VAZIO
    // A linha "require("tailwindcss-animate")" NÃO deve estar aqui
  ],
}