/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2563EB',
        'primary-dark': '#172554',
        'primary-light': '#DBEAFE',
        'accent': '#38BDF8',
        'accent-violet': '#A78BFA',
        'bg-main': '#F8FAFC',
        'surface': '#FFFFFF',
        'surface-secondary': '#F1F5F9',
        'heading': '#0F172A',
        'body-text': '#475569',
        'text-muted': '#64748B',
        'border-light': '#E2E8F0',
        'success': '#10B981',
        // Legacy key aliases mapped to new palette
        'bg-warm': '#F8FAFC',
        'white-ui': '#FFFFFF',
        'brand-lime': '#2563EB',
        'olive-green': '#1E40AF',
        'deep-olive': '#0F172A',
        'soft-lime': '#DBEAFE',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
