module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          base: 'var(--color-bg-base)',
          invert: 'var(--color-bg-invert)',
          input: 'var(--color-bg-input)',
          accent: 'var(--color-bg-accent)',
          accentDimmed: 'var(--color-bg-accent-dimmed)'
        }
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          invert: 'var(--color-text-invert)'
        }
      },
      borderColor: {
        skin: {
          accent: 'var(--color-border-accent)'
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
