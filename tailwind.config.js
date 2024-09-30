/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#000000',
        primary: '#D5A401',
        textGray: 'rgba(129, 128, 128, 1)',
        textBlack: 'rgba(44, 43, 43, 1)',
        bgGray: 'rgba(251, 251, 251, 1)',
        border: "rgba(186, 185, 185, 1)"
      },
    },
  },
  plugins: [],
}