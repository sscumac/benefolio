<template>
  <div class="container max-w-screen-2xl mx-auto">
    <p class="my-10 font-minion lg:text-2xl">Hallo! Schön, dass du da bist!</p>

    <!--    gallery-->
    <div class="flex flex-wrap gap-10">
      <div
        v-for="(image, index) in images"
        :key="index"
        ref="grid-item"
        class="grid-item"
      >
        <nuxt-link :to="`/portfolio/${image.name}`">
          <PictureElement :path="image.file" width="100%" height="100%" />
          <div class="mt-2 w-full flex justify-center">
            {{ image.name }}
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
// import PictureElement from '../components/PictureElement'
import PictureElement from '../components/PictureElement'
import utils from '../utils/utils'

export default {
  components: { PictureElement },
  data() {
    return {
      images: [
        {
          file: 'vimeo_metrozones.png',
          name: 'mapping-performance&performativity',
        },
        {
          file: 'IMG_20190113_141422.jpg',
          name: 'San-Rocco',
        },
        {
          file: 'IMG_20190113_123125.jpg',
          name: 'schuppen',
        },
        {
          file: 'IMG_20181227_130937.jpg',
          name: 'grenzen-ziehen',
        },
        {
          file: 'image-202105160812.jpeg',
          name: 'trauma-rassismus',
        },
        {
          file: 'GA_Schuppen.JPG',
          name: 'schuppen',
        },
        {
          file: 'the_european_dream.png',
          name: 'schuppen',
        },
        {
          file: 'DRAWINGS05-Highrise of Homes 1_0.jpg',
          name: 'Highrise-of-Homes-2.0',
        },
      ],
    }
  },
  // components: { PictureElement },
  mounted() {
    console.log(this.$route.name)
    document.addEventListener('scroll', this.rotate)
  },
  methods: {
    rotate(event) {
      utils.rotate(event, this.$refs['grid-item'])
    },
  },
}
</script>
<style>
/*.gallery {*/
/*  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));*/
/*  align-items: center;*/
/*  grid-auto-flow: dense;*/
/*}*/

/*.gallery > .grid-item:nth-child(4n) {*/
/*  !*grid-column: span 2;*!*/
/*  grid-row: span 2;*/
/*}*/

/*.gallery > .grid-item:nth-child(3n) {*/
/*  transform: rotate(348deg);*/
/*}*/
.grid-item:nth-child(3n) {
  transform: rotate(348deg);
}

.grid-item {
  max-width: 20%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

.grid-item > picture {
  object-fit: scale-down;
  max-width: 100%;
}
</style>
