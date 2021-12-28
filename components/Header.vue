<template>
  <div class="max-w-screen">
    <!--  top-->
    <div
      class="
        bg-normal-black
        items-center
        w-screen
        flex
        justify-between
        text-white
        py-2
        px-2
        lg:py-4
      "
    >
      <div class="flex-grow">
        <nuxt-link class="tag ml-3" to="/">Benedikt Stoll</nuxt-link>
      </div>

      <div
        class="
          labels
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
        px-2
        py-2
        lg:py-4
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
.tag:hover {
  border-bottom: solid 2px;
}
.tag {
  margin: 0 12px;
}
.labels * {
  margin: 0 12px;
}
</style>
