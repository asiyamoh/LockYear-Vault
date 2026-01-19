/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        'bg-primary': '#000000',
        'bg-secondary': '#0a0a0a',

        // Container/Card colors (dark blue-grey tones)
        'container-dark': '#1a1d26',
        'container-mid': '#232730',
        'container-light': '#2d3139',
        'container-hover': '#34373f',

        // Green accent colors (emerald/teal tones)
        'green-primary': '#10b981',
        'green-hover': '#059669',
        'green-active': '#047857',
        'green-muted': '#064e3b',
        'green-light': '#34d399',

        // Text colors
        'text-primary': '#ffffff',
        'text-secondary': '#9ca3af',
        'text-muted': '#6b7280',
        'text-accent': '#10b981',

        // Border colors
        'border-dark': '#374151',
        'border-light': '#4b5563',
        'border-accent': '#10b981',

        // Status colors
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6',
      },
      boxShadow: {
        // Glow effects for icons and interactive elements
        'glow-green-sm': '0 0 10px rgba(16, 185, 129, 0.2)',
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.3)',
        'glow-green-lg': '0 0 40px rgba(16, 185, 129, 0.4)',
        'glow-green-xl': '0 0 60px rgba(16, 185, 129, 0.5)',

        // Card shadows
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'card-lg':
          '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        'card-xl':
          '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      spacing: {
        // Custom spacing for consistent card padding and gaps
        card: '1.5rem', // 24px - internal card padding
        'card-lg': '2rem', // 32px - larger card padding
      },
      fontSize: {
        // Custom font sizes for headings and text
        display: ['2rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        heading: ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        subheading: ['1.125rem', { lineHeight: '1.75rem', fontWeight: '500' }],
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      transitionDuration: {
        400: '400ms',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
