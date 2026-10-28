/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: '#D3202A', dark: '#A8161E' }, ink: '#15171B' },
      fontFamily: { sans: ['Archivo', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'] },
    },
  },
  plugins: [],
}
