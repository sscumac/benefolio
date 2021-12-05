<template>
  <div class="flex-grow flex flex-col" @wheel="horizontalScroll">
    <div
      id="slideContainer"
      class="flex-grow overflow-x-scroll flex flex-col justify-center"
    >
      <div id="slider" class="flex">
        <div
          v-for="image in images"
          :key="image.name"
          class="flex flex-col mx-6 mb-4"
          :class="randomFlexPosition()"
        >
          <nuxt-link class="mr-60 2xl:w-80" :to="`/portfolio/${image.name}`">
            <img
              :src="require(`~/assets/img/${image.file}`)"
              alt="image.name"
              loading="lazy"
              width="600"
              height="400"
              class="mb-2"
              :style="rotateImg()"
            />
          </nuxt-link>
          <div class="font-bold my-2">{{ image.name }}</div>
          <div class="">{{ image.excerpt }}</div>
          <div class="mt-1">Jahr: {{ image.year }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import PictureElement from '../components/PictureElement'
export default {
  // components: { PictureElement },
  data() {
    return {
      images: [
        {
          file: 'vimeo_metrozones.png',
          name: 'mapping-performance&performativity',
          excerpt:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          year: 2012,
        },
        {
          file: 'IMG_20190113_141422.jpg',
          name: 'San-Rocco',
          excerpt:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          year: 2012,
        },
        {
          file: 'IMG_20190113_123125.jpg',
          name: 'schuppen',
          excerpt: 'Umbau eines ehemaligen Hühnerstalls und Geräteschuppen',
          year: 2012,
        },
        {
          file: 'IMG_20181227_130937.jpg',
          name: 'grenzen-ziehen',
          excerpt:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          year: 2012,
        },
        {
          file: 'image-202105160812.jpeg',
          name: 'trauma-rassismus',
          excerpt:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          year: 2012,
        },
        {
          file: 'GA_Schuppen.JPG',
          name: 'schuppen',
          excerpt:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          year: 2012,
        },
        {
          file: 'the_european_dream.png',
          name: 'European-Dream',
          excerpt:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          year: 2012,
        },
        {
          file: 'DRAWINGS05-Highrise of Homes 1_0.jpg',
          name: 'Highrise-of-Homes-2.0',
          excerpt:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
          year: 2012,
        },
      ],
    }
  },
  methods: {
    horizontalScroll(event) {
      const delta = Math.max(-1, Math.min(1, event.wheelDelta))
      document.getElementById('slideContainer').scrollLeft -= delta * 50
    },
    rotateImg() {
      let index = Math.round(Math.floor(Math.random() * 30))
      index = index < 16 ? (index / 2) * -1 : index / 2
      return `transform: rotate(${index}deg)`
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
  },
}
</script>
<style>
#slider {
  width: 250em;
}
.img-wrapper {
  height: fit-content;
}
body {
  overflow-y: hidden;
}
</style>
