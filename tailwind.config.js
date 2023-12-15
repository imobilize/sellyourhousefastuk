const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
      },
      container: {
        padding: '2rem',
      },
      colors: {
        primary: '#09ccbf',
        secondary: '#ff6355',
        neutral: '#ffcb12',
        dark: '#373936',
        darksecondary: '#56445D',
        hoverprimary: '#E45310',
        green: '#56E39F',
        blue: "#0A1045"
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      fontSize: {
        'xs': '0.75rem',     // Extra Small
        'sm': '0.875rem',    // Small
        'base': '1rem',      // Base
        'lg': '1.125rem',    // Large
        'xl': '1rem',     // Extra Large
        '1xl': '1.4285rem',     // 1 Extra Large
        '2xl': '1.25rem',     // 2 Extra Large
        'special' : '1.50rem',
        '3xl': '1.875rem',   // 3 Extra Large
        '4xl': '2.25rem',    // 4 Extra Large
        '5xl': '3rem',       // 5 Extra Large
        '6xl': '4rem',       // 6 Extra Large
        'display-1' : '11rem',
        'display-2' : '7.5rem'
      },
    },
  },
  variants: {
    extend: {
      width: ['responsive'],
    },
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
};
