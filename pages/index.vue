<template>
  <div class="container max-w-screen-2xl mx-auto">
    <p class="m-10 font-minion">Hallo! Schön, dass du da bist!</p>
    <div class="gallery grid gap-40 xl:gap-80">
      <div class="grid-item">
        <PictureElement
          path="DRAWINGS05-Highrise of Homes 1_0.jpg"
          width="100%"
          height="100%"
        />
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
  /*display: grid;*/
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  /*grid-template-rows: repeat(6, 200px);*/
  /*grid-gap: 20rem;*/
  align-items: center;
  grid-auto-flow: dense;
}

.gallery > .grid-item:nth-child(4n) {
  /*grid-column: span 2;*/
  grid-row: span 2;
}

/*.gallery > .grid-item:nth-child(4n) {*/
/*  grid-column: span 3;*/
/*  grid-row: span 1;*/
/*}*/

/*.grid-item {*/
/*  min-width: 150px;*/
/*}*/

.grid-item > picture {
  object-fit: scale-down;
  max-width: 100%;
}

.grid-item {
  object-fit: cover;
}

.gallery .inner {
  height: 100%;
  background-color: aquamarine;
}
</style>
