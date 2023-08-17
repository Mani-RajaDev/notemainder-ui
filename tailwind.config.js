/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{html,js}'],
  theme: {
    extend: {
      darkMode: 'class',
      fontFamily: {
        "primary": "var(--font-primary)",
        "secondary": "var(--font-secondary)",
      },
      animation: {
        "typing": "typing 3.5s steps(40, end), blink-caret .75s step-end infinite"
      },
      backgroundImage: {
        'note-list': "url('../images/notelist-background.jpg')",
        'grid-pattern': "url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e')"
      },
      keyframes: {
        typing: {
          "0%": {width: "0px"},
          "100%": {width: "100%"},
        },
        "blink-caret": {
          "from, to": {"border-color": "transparent"},
          "50%": {"border-color": "rgb(139,92,246)"}
        }
      }
    },
  },
  plugins: [],
}
