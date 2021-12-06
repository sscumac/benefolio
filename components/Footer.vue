<template>
  <div class="absolute bottom-0">
    <!--  top-->
    <div
      class="
        items-center
        w-screen
        flex
        xs:flex-row
        text-normal-black
        py-1
        footer-tags
      "
      :class="frameColor($route.name)"
    >
      <div>
        <a class="tag" href="mailto:mail@studio.eu">mail@studio.eu</a>
        <nuxt-link class="tag" to="/impressum">Impressum</nuxt-link>
        <nuxt-link class="tag" to="/datenschutz">Datenschutz</nuxt-link>
      </div>
    </div>
    <!--    bottom-->
    <div
      class="
        text-xs
        bg-normal-black
        items-center
        w-screen
        flex
        justify-center
        text-white
        py-1
        text-center
        md:text-base
      "
    >
      <p>
        Der Inhalt dieser Website ist über Creative Commons (BY-NC-ND 3.0 DE)
        lizensiert sofern es nicht anders deklariert ist.
      </p>
    </div>
  </div>
</template>
<script>
import utils from '../utils/utils'
export default {
  methods: {
    frameColor(route) {
      return utils.frameColor(route)
    },
  },
}
</script>
<style>
.footer-tags * {
  margin: 0 16px;
}
</style>
