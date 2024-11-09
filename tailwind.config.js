/** @type {import('tailwindcss').Config} */
  export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: { /* Adicionando fonte para o footer */
        jost: ['Jost', 'sans-serif'],
        },
      },
    
    },
    plugins: [],
}

