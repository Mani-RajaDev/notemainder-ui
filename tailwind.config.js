/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        "primary": "var(--font-primary)",
        "secondary": "var(--font-secondary)",
      },
    },
  },
  plugins: [],
}