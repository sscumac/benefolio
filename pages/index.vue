<template>
  <div
    class="flex-grow flex flex-col relative pt-10 sm:pt-0"
    @wheel="horizontalScroll($event, true)"
  >
    <img
      :src="bgImage"
      class="fixed sm:absolute opacity-50 left-0 top-0 w-full h-screen sm:h-auto object-none sm:object-fill"
    />
    <div
      v-if="projectData"
      id="slideContainer"
      class="flex-grow sm:overflow-x-scroll flex flex-col justify-center"
    >
      <div
        id="slider"
        class="flex flex-col sm:flex-row sm:transform -translate-x-16 md:translate-x-0"
      >
        <div
          v-for="project in projectData"
          :key="project.name"
          class="flex flex-col mx-24 mb-4 h-3/4 2xl:h-full py-20 slide"
          :class="randomFlexPosition()"
        >
          <nuxt-link
            class="relative 2xl:w-80"
            :to="`/projects/${project.urlName}`"
          >
            <img
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
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-white text-center"
              style="width: 120%"
            >
              {{ project.name }}
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Utils from '../utils/utils'
import projectData from '~/static/projectsData.json'
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
        Utils.horizontalScroll(event, bounceEffect)
      }
    },
    rotateImg() {
      return Utils.rotateImg()
    },
    randomFlexPosition() {
      Utils.randomFlexPosition()
    },
  },
}
</script>
<style scoped>
#slider {
  width: 100vw;
}
.slide {
  min-width: 300px;
}
@media (min-width: 640px) {
  #slider {
    width: 250em;
    /*height: 66vh;*/
  }
  .text-box {
    width: 40em;
    margin-right: 5em;
  }
}
</style>
