import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary earthy/cream background
        cream: {
          50: '#fffdfb',
          100: '#fffcf7',
          200: '#fef9f0',
        },
        // Deep forest green - primary brand color
        forest: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
          950: '#145824',
        },
        // Text colors
        charcoal: '#2d2d2d',
        darkgreen: '#163316',
        // Accent gold
        gold: {
          400: '#f7d547',
          500: '#f0c417',
          600: '#daa520',
        },
      },
      fontFamily: {
        heading: ['var(--font-barlow)', 'system-ui', 'sans-serif'],
        body: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.4', fontWeight: '600' }],
      },
      borderRadius: {
        'pill': '3.75rem',
      },
      boxShadow: {
        'card': '0 5px 15px rgba(20, 88, 36, 0.08)',
        'card-hover': '0 10px 30px rgba(20, 88, 36, 0.12)',
        'button': '0 4px 14px rgba(20, 88, 36, 0.15)',
      },
    },
  },
  plugins: [],
}
export default config
