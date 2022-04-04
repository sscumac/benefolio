<template>
  <div
    class="flex-grow flex flex-col"
    :style="{
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
    @wheel="horizontalScroll($event, true)"
  >
    <!--    <pre>{{ projectData }}</pre>-->
    <div
      id="slideContainer"
      class="flex-grow sm:overflow-x-scroll flex flex-col justify-center"
    >
      <div
        id="slider"
        class="overflow-hidden md:overflow-visible flex flex-col my-10 sm:flex-row justify-start transform p-10"
      >
        <!--                          main picture-->
        <div class="mb-10 sm:m-20 min-w-max" :style="rotateImg()">
          <img
            :src="
              require(`~/assets/img/projects/${projectData.shortName}/${projectData.mainImg}`)
            "
            :alt="projectData.name"
            loading="lazy"
            class="mb-2"
            height="300"
            width="300"
            :style="rotateImg()"
          />
        </div>
        <!--                  text -->
        <div class="p-10 bg-white text-box">
          <h1 class="font-bold mb-4 capitalize">{{ projectData.name }}</h1>
          <div class="font-bold mb-4">{{ projectData.intro }}</div>
          <div class="">{{ projectData.text }}</div>
          <div class="flex mt-10">
            <div class="font-bold mr-2">Credits</div>
            <div>{{ `${projectData.credits}` }}</div>
          </div>
          <div class="flex mt-10">
            <div class="font-bold mr-2">Jahr</div>
            <div>{{ `${projectData.year}` }}</div>
          </div>
        </div>
        <!--        Pictures-->
        <div
          v-for="(image, index) in projectData.images"
          :key="index"
          class="min-w-max flex flex-col mx-16 xs:mx-20 mb-4 h-3/4 2xl:h-full py-20 sm:py-0 slide"
          :class="randomFlexPosition()"
        >
          <img
            :src="
              require(`~/assets/img/projects/${projectData.shortName}/${image}`)
            "
            alt="image.name"
            loading="lazy"
            class="mb-2 max-w-xs md:max-w-none"
            height="600"
            width="600"
            :style="rotateImg()"
          />
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
      project: this.$route.params.pathMatch,
      bgImage,
    }
  },
  computed: {
    projectData() {
      return projectData.find(
        (project) => `projects/${project.urlName}` === this.project
      )
    },
  },
  methods: {
    horizontalScroll(event, bounceEffect) {
      if (window.screen.width > 500) {
        Utils.horizontalScroll(event, bounceEffect)
      }
    },
    randomFlexPosition() {
      Utils.randomFlexPosition()
    },
    rotateImg() {
      return Utils.rotateImg()
    },
  },
}
</script>
<style scoped>
#slider {
  width: 100vw;
}
@media (min-width: 640px) {
  #slider {
    width: 300em;
    /*height: 66vh;*/
  }
  .text-box {
    max-height: 75vh;
    min-width: 40%;
    margin-right: 5em;
  }
}
</style>
