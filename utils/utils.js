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
  horizontalScroll(event, bounceEffect) {
    const slider = document.getElementById('slideContainer')
    const delta = Math.max(-1, Math.min(1, event.wheelDelta)) // direction
    const speed = Math.abs(event.wheelDelta)
    const bounce = -(speed / 40) * delta
    if (bounceEffect && !(slider.scrollLeft < 1)) {
      slider.animate(
        [
          { transform: `translateX(${bounce}px)` },
          { transform: 'translateX(0px)' },
        ],
        { duration: 500, easing: 'ease-out' }
      )
    }

    slider.scrollLeft -= delta * (speed / 8)
  },
  randomFlexPosition() {
    let pos = ''
    const index = Math.floor(Math.random() * 3)
    switch (index) {
      case 0:
        pos = 'justify-start'
        break
      case 1:
        pos = 'justify-center'
        break
      case 2:
        pos = 'justify-end'
        break
    }
    return pos
  },
  rotateImg() {
    let index = Math.round(Math.floor(Math.random() * 30))
    index = index < 16 ? (index / 2) * -1 : index / 2
    return `transform: rotate(${index}deg)`
  },
}
