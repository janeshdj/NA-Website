/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neithal: {
          green: {
            950: '#06352A',
            900: '#0A3F32',
            800: '#124D3D',
            700: '#1B614E',
            50:  '#F0F7F4',
          },
          gold: {
            500: '#C9A227',
            400: '#D8B94E',
            300: '#E8CF72',
            100: '#FDF7E2',
          },
          cream: {
            50:  '#FCFAF4',
            100: '#F6F1E5',
            200: '#EEE6D5',
            300: '#E2D5BE',
          },
          black: '#11110F',
          text:  '#22231F',
          muted: '#68685F',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(17, 17, 15, 0.05)',
        'card': '0 10px 30px -5px rgba(6, 53, 42, 0.08)',
        'elevated': '0 20px 40px -10px rgba(6, 53, 42, 0.12)',
      },
      borderRadius: {
        'card': '16px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
