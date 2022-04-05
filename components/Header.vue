<template>
  <div class="max-w-screen fixed z-10 sm:static">
    <!--  top-->
    <div
      class="bg-normal-black items-center w-screen flex justify-between text-white py-2 px-2"
    >
      <div class="flex-grow">
        <nuxt-link class="tag ml-3 whitespace-nowrap" to="/"
          >Benedikt Stoll</nuxt-link
        >
      </div>

      <div
        class="pl-4 flex flex-col sm:flex-row sm:items-center text-xs md:text-base"
      >
        <p class="xs:mx-2">Kunst im öffentlichen Raum</p>
        <p class="xs:mx-2">Spekulative Forschung</p>
      </div>
    </div>
    <!--    bottom-->
    <div
      class="text-normal-black items-center w-screen flex justify-end text-white px-2 py-2 tags"
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
      <div v-if="$route.name !== 'kontakt'">
        <nuxt-link class="tag" to="/kontakt">Kontakt</nuxt-link>
      </div>
      <div>
        <nuxt-link class="tag" to="/info">Info</nuxt-link>
        <nuxt-link class="tag" to="/comingsoon">ENG</nuxt-link>
      </div>
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
.tag {
  margin: 0 12px;
}
</style>
