/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        midnight: '#0f172a',
        frost: '#f8fafc',
      },
      boxShadow: {
        soft: '0 24px 60px -32px rgba(15, 23, 42, 0.45)',
      },
    },
  },
  plugins: [],
}
