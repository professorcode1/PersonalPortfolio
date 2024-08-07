/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,jsx,html,js,ts}"],
  theme: {
    extend: {},
  },
  variants: {
    width: ['responsive'],
    // or simply
    extend: {
      width: ['responsive'],
    },
  },

  plugins: [],
}

