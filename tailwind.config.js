
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
