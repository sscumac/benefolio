module.exports = {
  purge: {
    // content: ['./utils/utils.js', './components/**/*.vue', './pages/**/*.vue'],
    safelist: ['bg-medium-green'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1/20': '5%',
        '7px': '9px',
        '1/10': '10%',
        '1/6': '16.66%',
        '1/5': '20%',
        '1/3': '33.33%',
        '2/5': '40%',
        '9/20': '45%',
        '1/2': '50%',
        '2/3': '66.66%',
        '1/4': '25%',
        '3/4': '75%',
        '4/5': '80%',
        '9/10': '90%',
        full: '100%',
      },
      gridTemplateColumns: {
        '200-auto-fit': 'repeat(auto-fit, minmax(200px, 220px))',
        '200-auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
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
        '2-col': '400px',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
}
