module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          base: 'var(--color-bg-base)',
          invert: 'var(--color-bg-invert)'
        }
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)'
        }
      }
    },
    fontFamily: {
      avenir: ['Avenir']
    }
  },
  plugins: [
    ({ addVariant }) => {
      addVariant('children', '& > *')
    }
  ]
}
