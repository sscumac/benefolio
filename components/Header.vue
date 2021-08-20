<template>
  <div>
    <!--  top-->
    <div
      class="
        bg-normal-black
        items-center
        w-screen
        flex
        justify-between
        text-white
        p-3
      "
    >
      <div class="flex-grow"><nuxt-link to="/">Benedikt Stoll</nuxt-link></div>

      <div
        class="
          tags
          pl-4
          flex flex-col
          sm:flex-row sm:items-center
          text-xs
          md:text-base
        "
      >
        <p>Kritische Raumproduktion</p>
        <p>Spekulative Forschung</p>
        <p>Performativer Urbanismus</p>
      </div>
    </div>
    <!--    bottom-->
    <div
      class="
        text-normal-black
        items-center
        w-screen
        flex
        justify-end
        text-white
        p-3
        tags
      "
      :class="
        $route.name === 'portfolio' || $route.name.includes('portfolio')
          ? 'bg-bright-yellow'
          : $route.name === 'Info'
          ? 'bg-medium-green'
          : $route.name === 'Impressum' || $route.name === 'Datenschutz'
          ? 'bg-darkish-pink'
          : 'bg-light-blue'
      "
    >
      <div v-if="$route.name != 'portfolio'">
        <nuxt-link class="tags" to="/portfolio">Portfolio</nuxt-link>
      </div>
      <nuxt-link class="tags" to="/info">Info</nuxt-link>
      <nuxt-link class="tags" to="/comingsoon">ENG</nuxt-link>
    </div>
  </div>
</template>

<style>
.tags * {
  padding: 4px 12px;
}
</style>
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
