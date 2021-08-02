export default {
  frameColor(route) {
    return route === 'Portfolio'
      ? 'bg-bright-yellow'
      : route === 'Info'
      ? 'bg-medium-green'
      : route === 'Impressum' || route === 'Datenschutz'
      ? 'bg-darkish-pink'
      : 'bg-light-blue'
  },
}
