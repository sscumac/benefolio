<template>
  <div class="container max-w-screen-2xl mx-auto">
    <p class="my-10 font-minion lg:text-2xl">Hallo! Schön, dass du da bist!</p>

    <!--    gallery-->
    <div class="gallery grid gap-40 xl:gap-80">
      <div class="grid-item">
        <PictureElement
          path="DRAWINGS05-Highrise of Homes 1_0.jpg"
          width="100%"
          height="100%"
        />
      </div>
      <div class="grid-item">
        <nuxt-link to="/projects/europeandream">
          <PictureElement
            path="the_european_dream.png"
            width="100%"
            height="100%"
          />
          <div class="mt-2 w-full flex justify-center">
            {THE EUROPEAN DREAM}
          </div>
        </nuxt-link>
      </div>

      <div class="grid-item">
        <PictureElement path="GA_Schuppen.JPG" width="100%" height="100%" />
      </div>
      <div class="grid-item">
        <PictureElement
          path="image-202105160812.jpeg"
          width="100%"
          height="100%"
        />
      </div>
      <div class="grid-item">
        <PictureElement
          path="IMG_20181227_130937.jpg"
          width="100%"
          height="100%"
        />
      </div>
      <div class="grid-item">
        <PictureElement
          path="IMG_20190113_123125.jpg"
          width="100%"
          height="100%"
        />
      </div>
      <div class="grid-item">
        <PictureElement
          path="IMG_20190113_141422.jpg"
          width="100%"
          height="100%"
        />
      </div>
      <div class="grid-item">
        <PictureElement
          path="vimeo_metrozones.png"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  </div>
</template>
<script>
// import PictureElement from '../components/PictureElement'
import PictureElement from '../components/PictureElement'
export default {
  components: { PictureElement },
  // components: { PictureElement },
  mounted() {
    console.log(this.$route.name)
  },
}
</script>
<style>
.gallery {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-items: center;
  grid-auto-flow: dense;
}

.gallery > .grid-item:nth-child(4n) {
  /*grid-column: span 2;*/
  grid-row: span 2;
}

.grid-item > picture {
  object-fit: scale-down;
  max-width: 100%;
}
</style>
