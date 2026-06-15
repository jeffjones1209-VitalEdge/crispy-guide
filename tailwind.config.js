/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefbf5',
          100: '#d5f6e6',
          200: '#adecd0',
          300: '#77ddb1',
          400: '#3dc78e',
          500: '#19a873',
          600: '#0d8b5e',
          700: '#0c6f4d',
          800: '#0d583f',
          900: '#0b4934',
          950: '#05281e',
        },
        ocean: {
          50: '#eff8ff',
          100: '#dbeffe',
          200: '#bfe2fe',
          300: '#93d0fd',
          400: '#60b5fa',
          500: '#3b96f5',
          600: '#2679ea',
          700: '#1e65d7',
          800: '#1f52ae',
          900: '#1f4689',
          950: '#172b54',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}