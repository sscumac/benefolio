<template>
  <div class="flex-grow flex flex-col" @wheel="horizontalScroll">
    <p class="my-10 ml-10 font-minion lg:text-2xl">
      Hallo! Schön, dass du da bist!
    </p>
    <div id="slideContainer" class="flex-grow overflow-x-scroll mt-40">
      <div id="slider" class="flex">
        <div v-for="image in images" :key="image.name" class="mx-32">
          <nuxt-link :to="`/portfolio/${image.name}`">
            <PictureElement :path="image.file" alt="" width="200" />
          </nuxt-link>
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
          name: 'European-Dream',
        },
        {
          file: 'DRAWINGS05-Highrise of Homes 1_0.jpg',
          name: 'Highrise-of-Homes-2.0',
        },
      ],
    }
  },
  methods: {
    horizontalScroll(event) {
      const delta = Math.max(-1, Math.min(1, event.wheelDelta))
      document.getElementById('slideContainer').scrollLeft -= delta * 30
    },
  },
}
</script>
<style>
#slideContainer {
  height: 150%;
}
#slider {
  width: 250em;
}
/*body {*/
/*  overflow: hidden;*/
/*}*/
</style>
