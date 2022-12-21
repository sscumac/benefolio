<template>
  <div
    class="flex-grow flex flex-col relative pt-48 sm:pt-0"
    @wheel="horizontalScroll($event, true)"
  >
    <img
      :src="bgImage"
      class="
        fixed
        sm:absolute
        opacity-50
        left-0
        top-0
        w-full
        h-screen
        xl:h-auto
        object-none
        sm:object-fill
      "
    />
    <div
      v-if="projectData"
      id="slideContainer"
      class="
        flex-grow
        md:pt-20
        sm:overflow-x-scroll
        flex flex-col
        justify-center
      "
    >
      <div
        id="slider"
        class="
          flex flex-col
          sm:flex-row sm:transform
          -translate-x-16
          md:translate-x-0
        "
      >
        <div
          v-for="project in projectData"
          :key="project.name"
          :class="randomFlexPosition()"
          class="flex flex-col mx-14 md:mx-24 mb-4 h-3/4 2xl:h-full py-20 slide"
        >
          <nuxt-link
            class="relative 2xl:w-80 transform"
            :to="`/projects/${project.urlName}`"
          >
            <img
              v-if="project.mainImg"
              :src="
                require(`~/assets/img/projects/${project.shortName}/${project.mainImg}`)
              "
              :alt="project.name"
              loading="lazy"
              width="800"
              height="800"
              class="mb-2"
              :style="rotateImg()"
            />
            <!--            Title on picture -->
            <div
              class="
                absolute
                top-1/2
                left-1/2
                transform
                -translate-x-1/2
                bg-white
                font-bold
                text-center
              "
              style="width: 120%"
            >
              {{ project.name }}
            </div>
          </nuxt-link>
        </div>
        <div class="mb-4 h-3/4 2xl:h-full py-20 slide" />
      </div>
    </div>
  </div>
</template>
<script>
import utils from '../utils/utils'
import projectData from '~/static/projectsData1712.json'
import bgImage from '~/assets/img/grid-graph-paper-background.jpeg'

export default {
  data() {
    return {
      projectData,
      bgImage,
    }
  },
  methods: {
    horizontalScroll(event, bounceEffect) {
      if (window.screen.width > 500) {
        utils.horizontalScroll(event, bounceEffect)
      }
    },
    rotateImg() {
      return utils.rotateImg()
    },
    randomFlexPosition() {
      return utils.randomFlexPosition()
    },
  },
}
</script>
<style scoped>
#slider {
  width: 100vw;
}

@media (min-width: 640px) {
  .slide {
    min-width: 300px;
  }
  .text-box {
    width: 40em;
    margin-right: 5em;
  }
}
</style>
