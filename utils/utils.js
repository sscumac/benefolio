export default {
  frameColor(route) {
    return route.includes('portfolio')
      ? 'bg-bright-yellow'
      : route === 'Info'
      ? 'bg-medium-green'
      : route === 'Impressum' || route === 'Datenschutz'
      ? 'bg-darkish-pink'
      : 'bg-light-blue'
  },
  rotate(event, objects) {
    objects.forEach(function (item, index) {
      console.log(window.getComputedStyle(item).getPropertyValue('transform'))
      if (index % 2 === 0) {
        item.style.transform = `rotate(${window.pageYOffset / 99}deg)`
      } else {
        item.style.transform = `rotate(-${window.pageYOffset / 99}deg)`
      }
    })
  },
}
