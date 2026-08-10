/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-warm': '#F8F9F3',
        'white-ui': '#FFFFFF',
        'border-light': '#E1E5D3',
        'text-muted': '#68705A',
        'brand-lime': '#BDC033',
        'olive-green': '#65721F',
        'deep-olive': '#3F481A',
        'soft-lime': '#EEF2C9',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
