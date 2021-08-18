<template>
  <div class="container flex justify-center max-w-full">
    <div class="flex flex-col-reverse max-w-screen-xl lg:flex-row">
      <div class="portrait mb-12 lg:mb-8 w-1/2 mx-auto lg:w-auto">
        <PictureElement />
      </div>
      <div class="flex flex-col lg:w-1/2 lg:ml-20">
        <h1 class="font-bold mb-4">Highrise of Homes 2.0</h1>
        <h2 class="font-bold mb-1 mt-4">tbd</h2>
      </div>
    </div>
  </div>
</template>
<style>
.portrait {
  min-width: 250px;
}
</style>
<script>
import PictureElement from '../../components/PictureElement'
export default {
  components: { PictureElement },
}
</script>
