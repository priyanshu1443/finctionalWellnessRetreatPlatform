/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundOne: '#1b3252',
        backgroundOneDisabled: '#1b325279',
        backgroundThree: '#efefef',
        backgroundTwo: '#e0d9cf',
        text1: '#f3f4f6',
        text2: '#1b1a19',
        text3: '#302e2c',
        border: '#d7dadf'
      }
    },
  },
  plugins: [],
}

