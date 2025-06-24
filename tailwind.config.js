/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Prompt', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'float-1': 'float 15s infinite linear',
        'float-2': 'float 18s infinite linear -5s',
        'float-3': 'float 12s infinite linear -10s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(20px, 20px)' },
          '50%': { transform: 'translate(0, 40px)' },
          '75%': { transform: 'translate(-20px, 20px)' },
        }
      }
    },
  },
  plugins: [],
}