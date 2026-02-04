/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      colors: {
        primary: '#022c22', // emerald-950
        secondary: '#4E7C64',
        beige: '#fafaf9', // stone-50
        gold: '#C9A44C',
        'soft-gold': '#fde68a', // amber-200
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'fog-move': 'fog-move 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fog-move': {
          '0%': { transform: 'translateX(0) opacity(0.8)' },
          '100%': { transform: 'translateX(-50%) opacity(0.8)' },
        }
      }
    },
  },
  plugins: [],
};
