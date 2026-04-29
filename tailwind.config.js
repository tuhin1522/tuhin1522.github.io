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
        midnight: '#080d1a',
        frost: '#f8fafc',
      },
      boxShadow: {
        soft: '0 24px 60px -32px rgba(15, 23, 42, 0.45)',
        glow: '0 0 40px -8px rgba(99, 102, 241, 0.5)',
        'glow-sm': '0 0 20px -4px rgba(99, 102, 241, 0.35)',
      },
    },
  },
  plugins: [],
}
