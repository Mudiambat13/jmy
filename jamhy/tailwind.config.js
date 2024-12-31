/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#4B83CC',
          DEFAULT: '#1E40AF',
          dark: '#1E3A8A',
        },
        secondary: {
          light: '#9CA3AF',
          DEFAULT: '#6B7280',
          dark: '#4B5563',
        },
      },
      height: {
        'hero': '90vh',
      },
    },
  },
  plugins: [],
}