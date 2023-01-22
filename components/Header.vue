<template>
  <div class="max-w-screen fixed z-10 sm:static tracking-wide">
    <!--  top-->
    <div
      class="
        border-t-2 border-normal-black
        bg-white
        items-center
        w-screen
        flex
        justify-between
        text-normal-black
        py-2
        pl-2
        pr-6
      "
    >
      <div class="flex-grow">
        <nuxt-link
          class="
            sm:ml-3 sm:whitespace-nowrap
            font-bold
            uppercase
            text-base
            md:text-xl
            lg:text-2xl
            xl:text-3xl
          "
          to="/"
          >Benedikt Stoll</nuxt-link
        >
      </div>
      <div>
        <!--        tabs-->
        <div
          class="
            whitespace-nowrap
            flex flex-col
            ml-4
            lg:flex-row
            text-xs
            sm:text-base
            lg:text-xl
            xl:text-2xl
          "
        >
          <div
            v-for="(tab, index) in tabs"
            :key="index"
            class="justify-end flex items-center mr-2"
            :class="firstTab(index)"
          >
            <p v-text="tab" />
          </div>
        </div>
      </div>
    </div>
    <!--    bottom-->
    <div
      class="
        border-2 border-r-0 border-l-0 border-normal-black
        items-center
        w-screen
        flex
        justify-end
        text-white
        px-8
        py-2
        tags
        font-bold
        text-xl
        lg:text-2xl
        xl:text-3xl
      "
      :class="headerBottomColor"
    >
      <div>
        <nuxt-link class="tag" to="/info">Info</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import utils from '../utils/utils'
export default {
  data() {
    return {
      tabs: [
        '• Künstlerische Interventionen',
        '• Künstlerische Interventionen',
        '• Spekulative Forschung',
        '• Partizipative Gestaltung',
      ],
    }
  },
  computed: {
    headerBottomColor() {
      return this.$route.path === '/' ? 'bg-kingblue' : 'bg-goldenred'
    },
  },
  methods: {
    frameColor(route) {
      return utils.frameColor(route)
    },
    firstTab(index) {
      if (index === 0) {
        return 'sm:hidden'
      }
      if (index === 1) {
        return 'hidden sm:block'
      }
    },
  },
}
</script>
