module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        lsm: { max: '640px' },
        xs: { max: '500px' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
