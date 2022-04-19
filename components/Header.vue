<template>
  <div
    class="max-w-screen font-bold fixed z-10 sm:static tracking-wide text-base md:text-xl lg:text-2xl xl:text-3xl"
  >
    <!--  top-->
    <div
      class="uppercase border-t-2 border-normal-black bg-white items-center w-screen flex justify-between text-normal-black py-2 pl-2 pr-6"
    >
      <div class="flex-grow">
        <nuxt-link class="sm:ml-3 sm:whitespace-nowrap" to="/"
          >Benedikt Stoll</nuxt-link
        >
      </div>

      <div class="pl-4 flex flex-col sm:flex-row sm:items-center">
        <p class="top-tag">Kunst im öffentlichen Raum</p>
        <p class="top-tag">Spekulative Forschung</p>
      </div>
    </div>
    <!--    bottom-->
    <div
      class="border-2 border-r-0 border-l-0 border-normal-black text-normal-black items-center w-screen flex justify-end text-white px-4 py-2 tags"
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

.top-tag {
  margin-left: 8px;
  text-align: right;
}

@media (min-width: 640px) {
  .top-tag {
    margin-left: 32px;
  }
}
</style>
