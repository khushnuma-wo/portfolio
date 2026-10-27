/** @type {import('tailwindcss').Config} */

// Colours come from CSS variables (see src/index.css) so the same classes work in light and dark themes.
const themed = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: themed('white'),
        ink: {
          950: themed('ink-950'),
          900: themed('ink-900'),
          850: themed('ink-850'),
          800: themed('ink-800'),
          700: themed('ink-700'),
          600: themed('ink-600'),
        },
        slate: {
          50: themed('slate-50'),
          100: themed('slate-100'),
          200: themed('slate-200'),
          300: themed('slate-300'),
          400: themed('slate-400'),
          500: themed('slate-500'),
        },
        accent: {
          DEFAULT: themed('accent'),
          strong: themed('accent-strong'),
          soft: themed('accent-soft'),
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
