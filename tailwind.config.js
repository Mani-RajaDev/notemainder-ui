/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        "primary": "var(--font-primary)",
        "secondary": "var(--font-secondary)",
      },
      animation: {
        "typing": "typing 3.5s steps(40, end), blink-caret .75s step-end infinite"
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
