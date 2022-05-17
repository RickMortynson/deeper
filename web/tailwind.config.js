module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          base: 'var(--color-bg-base)',
          invert: 'var(--color-bg-invert)',
          input: 'var(--color-bg-input)',
          accent: 'var(--color-bg-accent)'
        }
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          invert: 'var(--color-text-invert)'
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
