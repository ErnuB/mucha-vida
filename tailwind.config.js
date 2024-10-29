/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'bonesly': ['Bonesly Script', 'sans'],
        'figtree': ['Figtree'],
      },
    }
  },
  plugins: []
};