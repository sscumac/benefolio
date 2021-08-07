module.exports = {
  purge: {
    // safelist: ['bg-medium-green'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        minion: ['Minion Pro', 'regular'],
      },
      colors: {
        'normal-black': '#222222',
        'light-blue': '#017EB3',
        'soft-blue': '#ecf8fd',
        'bright-yellow': '#FFF200',
        'medium-green': '#42AE48',
        'darkish-pink': '#EC2B8B',
      },
      screens: {
        xs: '391px',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
}
