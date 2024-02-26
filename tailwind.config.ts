import { type Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    colors: {
      white: 'var(--color-white)',
      black: 'var(--color-black)',
      transparent: 'transparent',
      gray: {
        50: 'var(--color-gray-050)',
        100: 'var(--color-gray-100)',
        200: 'var(--color-gray-200)',
        300: 'var(--color-gray-300)',
        400: 'var(--color-gray-400)',
        500: 'var(--color-gray-500)',
        600: 'var(--color-gray-600)',
        700: 'var(--color-gray-700)',
        800: 'var(--color-gray-800)',
        900: 'var(--color-gray-900)',
      },
      red: {
        50: 'var(--color-red-050)',
        100: 'var(--color-red-100)',
        200: 'var(--color-red-200)',
        300: 'var(--color-red-300)',
        400: 'var(--color-red-400)',
        500: 'var(--color-red-500)',
        600: 'var(--color-red-600)',
        700: 'var(--color-red-700)',
        800: 'var(--color-red-800)',
        900: 'var(--color-red-900)',
      },
      orange: {
        50: 'var(--color-orange-050)',
        100: 'var(--color-orange-100)',
        200: 'var(--color-orange-200)',
        300: 'var(--color-orange-300)',
        400: 'var(--color-orange-400)',
        500: 'var(--color-orange-500)',
        600: 'var(--color-orange-600)',
        700: 'var(--color-orange-700)',
        800: 'var(--color-orange-800)',
        900: 'var(--color-orange-900)',
      },
      yellow: {
        50: 'var(--color-yellow-050)',
        100: 'var(--color-yellow-100)',
        200: 'var(--color-yellow-200)',
        300: 'var(--color-yellow-300)',
        400: 'var(--color-yellow-400)',
        500: 'var(--color-yellow-500)',
        600: 'var(--color-yellow-600)',
        700: 'var(--color-yellow-700)',
        800: 'var(--color-yellow-800)',
        900: 'var(--color-yellow-900)',
      },
      green: {
        50: 'var(--color-green-050)',
        100: 'var(--color-green-100)',
        200: 'var(--color-green-200)',
        300: 'var(--color-green-300)',
        400: 'var(--color-green-400)',
        500: 'var(--color-green-500)',
        600: 'var(--color-green-600)',
        700: 'var(--color-green-700)',
        800: 'var(--color-green-800)',
        900: 'var(--color-green-900)',
      },
      blue: {
        50: 'var(--color-blue-050)',
        100: 'var(--color-blue-100)',
        200: 'var(--color-blue-200)',
        300: 'var(--color-blue-300)',
        400: 'var(--color-blue-400)',
        500: 'var(--color-blue-500)',
        600: 'var(--color-blue-600)',
        700: 'var(--color-blue-700)',
        800: 'var(--color-blue-800)',
        900: 'var(--color-blue-900)',
      },
      purple: {
        50: 'var(--color-purple-050)',
        100: 'var(--color-purple-100)',
        200: 'var(--color-purple-200)',
        300: 'var(--color-purple-300)',
        400: 'var(--color-purple-400)',
        500: 'var(--color-purple-500)',
        600: 'var(--color-purple-600)',
        700: 'var(--color-purple-700)',
        800: 'var(--color-purple-800)',
        900: 'var(--color-purple-900)',
      },
    },
    extend: {
      fontFamily: {
        sans: ['--font-sans', ...fontFamily.sans],
      },
      fontSize: {
        base: ['16px', '24px'],
        xl: ['20px', '24px'],
        '2xl': ['24px', '28px'],
        '3xl': ['28px', '32px'],
        '4xl': ['40px', '44px'],
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        'primary-inverse': 'var(--bg-primary-inverse)',
        secondary: 'var(--bg-secondary)',
        'secondary-inverse': 'var(--bg-secondary-inverse)',
        green: 'var(--bg-green)',
        'green-light': 'var(--bg-green-light)',
        'yellow-light': 'var(--bg-yellow-light)',
      },
      backgroundImage: {
        'circle-grid': "url('/images/background.webp')",
        'circle-grid-dark': "url('/images/background.webp')",
      },
      borderColor: {
        DEFAULT: 'var(--border-primary)',
        secondary: 'var(--border-secondary)',
        green: 'var(--border-green)',
        'green-light': 'var(--border-green-light)',
        'yellow-light': 'var(--border-yellow-light)',
      },
      divideColor: {
        primary: 'var(--border-primary)',
        secondary: 'var(--border-secondary)',
      },
      borderRadius: {
        none: '0',
        xs: '2px',
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '10px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0px 1px 2px rgba(0, 0, 0, 0.05)',
        lg: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        'primary-inverse': 'var(--text-primary-inverse)',
        secondary: 'var(--text-secondary)',
        'secondary-inverse': 'var(--text-secondary-inverse)',
        blue: 'var(--text-blue)',
        green: 'var(--text-green)',
        orange: 'var(--text-orange)',
        red: 'var(--text-red)',
        'red-disabled': 'var(--text-red-disabled)',
        'red-light': 'var(--color-red-500)',
        purple: 'var(--text-purple)',
        'purple-light': 'var(--color-purple-400)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(.25,1.6,.5,.8)',
      },
      letterSpacing: {
        tight: '-.01em',
      },
      ringWidth: {
        6: '6px',
      },
      height: {
        button: '34px',
      },
      width: {
        'icon-button': '34px',
      },
      zIndex: {
        '-1': '-1',
      },
      keyframes: {
        'scale-in-content': {
          '0%': { transform: 'rotateX(-30deg) scale(0.9)', opacity: '0' },
          '100%': { transform: 'rotateX(0deg) scale(1)', opacity: '1' },
        },
        'scale-out-content': {
          '0%': { transform: 'rotateX(0deg) scale(1)', opacity: '1' },
          '100%': { transform: 'rotateX(-10deg) scale(0.95)', opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'scale-in-content': 'scale-in-content 0.2s ease',
        'scale-out-content': 'scale-out-content 0.2s ease',
        'fade-in': 'fade-in 0.2s ease',
        'fade-out': 'fade-out 0.2s ease',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--text-primary)',
            '--tw-prose-headings': 'var(--text-primary)',
            '--tw-prose-links': 'var(--text-blue)',
            '--tw-prose-bold': 'var(--text-primary)',
            '--tw-prose-counters': 'var(--text-primary)',
            '--tw-prose-bullets': 'var(--text-primary)',
            '--tw-prose-hr': 'var(--border-primary)',
            '--tw-prose-quotes': 'var(--text-primary)',
            '--tw-prose-quote-borders': 'var(--border-secondary)',
            '--tw-prose-code': 'var(--text-primary)',
            '--tw-prose-th-borders': 'var(--border-secondary)',
            '--tw-prose-td-borders': 'var(--border-primary)',
            p: {
              lineHeight: '24px',
              marginBottom: '1em',
            },
            a: {
              textDecoration: 'none',
              fontWeight: 'default',
            },
            img: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            h1: {
              fontWeight: '600',
              fontSize: '28px',
              lineHeight: '32px',
            },
            h2: {
              fontWeight: '600',
              fontSize: '24px',
              lineHeight: '28px',
              marginTop: '1em',
            },
            h3: {
              fontSize: '20px',
              lineHeight: '24px',
            },
            h4: {
              fontSize: '16px',
              lineHeight: '24px',
            },
            h5: {
              fontSize: '16px',
              lineHeight: '24px',
            },
            h6: {
              fontSize: '16px',
              lineHeight: '24px',
            },
            li: {
              lineHeight: '24px',
              marginTop: '0.25em',
              marginBottom: '0.25em',
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-radix'),
  ],
} satisfies Config
