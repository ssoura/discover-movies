module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}