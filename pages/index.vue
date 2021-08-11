<template>
  <div class="container">
    <p class="m-10 font-minion">Hallo! Schön, dass du da bist!</p>
    <div class="grid grid-cols-2">
      <div>
        <PictureElement
          path="DRAWINGS05-Highrise of Homes 1_0.jpg"
          width="200px"
        />
      </div>
      <div><PictureElement path="GA_Schuppen.JPG" width="200px" /></div>
      <div><PictureElement path="image-202105160812.jpeg" width="200px" /></div>
      <div><PictureElement path="IMG_20181227_130937.jpg" width="200px" /></div>
      <div><PictureElement path="IMG_20190113_123125.jpg" width="200px" /></div>
      <div><PictureElement path="IMG_20190113_141422.jpg" width="200px" /></div>
    </div>
  </div>
</template>
<script>
import PictureElement from '../components/PictureElement'
export default {
  components: { PictureElement },
  mounted() {
    console.log(this.$route.name)
  },
}
</script>
