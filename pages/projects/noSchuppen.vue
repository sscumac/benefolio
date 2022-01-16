<template>
  <div
    class="flex-grow flex flex-col"
    style="scroll-behavior: smooth"
    @wheel="horizontalScroll($event, true)"
  >
    <div class="flex flex-col lg:w-1/2 lg:ml-20">
      <h1 class="font-bold mb-4">Schuppen</h1>
      <h2 class="font-bold mb-1 mt-4">tbd</h2>
    </div>
  </div>
</template>
<style></style>
<script>
import Utils from '../../utils/utils'
// import info from '../assets/text/info.txt'
export default {
  data() {
    return {
      // infoText: info,
    }
  },
  methods: {
    horizontalScroll(event, bounceEffect) {
      if (window.screen.width > 500) {
        Utils.horizontalScroll(event, bounceEffect)
      }
    },
  },
}
</script>
