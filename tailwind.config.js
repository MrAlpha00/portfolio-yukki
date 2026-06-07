/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'void': '#0a0a0f',
        'void-deep': '#0f0a1e',
        'primary': '#7c3aed',
        'secondary': '#06b6d4',
        'text': '#e2e8f0',
        'success': '#4ade80',
        'border': '#1e1b4b',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(124,58,237,0.3)',
        'glow-lg': '0 0 40px rgba(124,58,237,0.4)',
      },
    },
  },
  plugins: [],
}
