<template>
  <div class="container max-w-screen-2xl mx-auto">
    <div class="grid gap-10 sm:gap-32">
      <div v-for="index in 10" :key="index" class="grid-item">
        <div ref="gallery-item" class="inner h-full w-full">
          {{ index }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import utils from '../../utils/utils'
export default {
  mounted() {
    document.addEventListener('scroll', this.rotate)
  },
  methods: {
    rotate(event) {
      utils.rotate(event, this.$refs['gallery-item'])
    },
  },
}
</script>
<style>
.grid {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(20, 200px);
}

.grid-item {
  width: 100%;
  height: 100%;
}

.inner {
  background-image: url('~/assets/img/DRAWINGS05-Highrise of Homes 1_0.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

/*.grid > .grid-item:nth-child(3n) {*/
/*  grid-column: span 2;*/
/*  grid-row: span 2;*/
/*}*/

/*.grid > .grid-item:nth-child(4n) {*/
/*  transform: rotate(15deg);*/
/*}*/

/*.grid > .grid-item:nth-child(3n) {*/
/*  transform: rotate(-15deg);*/
/*}*/

@media screen and (max-width: 485px) {
  .grid > .grid-item:nth-child(3n) {
    grid-column: span 1;
  }
}

/*.grid > .grid-item:nth-child(8n) > .inner {*/
/*  display: none;*/
/*}*/
/*.grid > .grid-item:nth-child(2n) {*/
/*  transform: rotate(45deg);*/
/*}*/ ;
</style>
