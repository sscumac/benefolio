<template>
  <div>
    <!--  top-->
    <div
      class="
        items-center
        w-screen
        flex flex-col
        xs:flex-row
        text-normal-black
        p-3
        footer-tags
      "
      :class="frameColor($route.name)"
    >
      <a class="class" href="mailto:mail@studio.eu">mail@studio.eu</a>
      <nuxt-link to="/impressum">Impressum</nuxt-link>
      <nuxt-link to="/datenschutz">Datenschutz</nuxt-link>
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
        p-3
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
  padding: 4px 16px;
}
</style>
