/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: { nav: '1400px' },
      colors: {
        ivory: '#F7F3EC',
        cream: '#EAE1D4',
        walnut: '#49352B',
        espresso: '#2D211C',
        sage: '#89917A',
        gold: '#B69A70',
        ink: '#29231F',
        muted: '#756B63',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { luxe: '0.22em' },
    },
  },
  plugins: [],
}
