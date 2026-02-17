const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Be Vietnam Pro", "Inter", "system-ui", "sans"],
      monospace: ["DM Mono", "monospace"],
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      orange: colors.orange,
      purple: colors.purple,
      pink: colors.pink,
      violet: colors.violet,
    },
    extend: {
      colors: {
        bg: "#0d0a1a",
        "fun-gray-light": "#c4b5fd",
        "fun-gray": "#8b7fba",
        "fun-gray-medium": "#6b6394",
        "fun-gray-darker": "#2d2647",
        "fun-gray-dark": "#1e1740",
        "fun-gray-darkest": "#130f2b",
        "fun-pink": "#a855f7",
        "fun-pink-darker": "#1a0f30",
        "fun-pink-darkest": "#120a24",
        "fun-pink-dark": "#2d1f5e",
        "fun-pink-light": "#c084fc",
      },
      rotate: {
        '360': '360deg'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'fadeInAndBounce': 'fadeIn 3s ease-out',
      },
      willChange: {
        'projectCard': 'border-color, opacity, transform',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
