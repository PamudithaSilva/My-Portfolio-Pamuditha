/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#080c14',
          surface: '#0f172a',
          card: 'rgba(17, 27, 46, 0.7)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        brand: {
          blue: '#3b82f6',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          emerald: '#10b981',
          indigo: '#6366f1',
        },
        base: '#080c14',
        surface: '#0f172a',
        accent: '#3b82f6',
        accent2: '#06b6d4',
        accent3: '#8b5cf6',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.25)',
        'glow-blue': '0 0 30px -5px rgba(59, 130, 246, 0.25)',
        'glow-violet': '0 0 30px -5px rgba(139, 92, 246, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-hover': '0 12px 40px 0 rgba(6, 182, 212, 0.15)',
      },
      animation: {
        'gradient-move': 'gradientMove 10s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        shimmer: 'shimmer 2.5s infinite',
      },
      keyframes: {
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
