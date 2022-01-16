<template>
  <div
    class="flex-grow flex flex-col"
    style="scroll-behavior: smooth"
    @wheel="horizontalScroll($event, true)"
  >
    <!--    <pre>{{ projectData }}</pre>-->
    <div
      id="slideContainer"
      class="flex-grow sm:overflow-x-scroll flex flex-col justify-center"
    >
      <div
        id="slider"
        class="flex flex-col my-10 sm:flex-row justify-start transform p-10"
      >
        <!--        main picture-->
        <div class="mb-10 sm:m-20" :style="rotateImg()">
          <img
            :src="
              require(`~/assets/img/${projectData.name}/${projectData.mainImg}`)
            "
            alt="image.name"
            loading="lazy"
            class="mb-2"
            height="300"
            width="300"
            :style="rotateImg()"
          />
        </div>
        <!--        text -->
        <div class="text-box">
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
          class="flex flex-col mx-24 mb-4 h-3/4 2xl:h-full py-20 transform scale-150 sm:scale-100 sm:py-0"
          :class="randomFlexPosition()"
        >
          <img
            :src="require(`~/assets/img/${projectData.name}/${image}`)"
            alt="image.name"
            loading="lazy"
            class="mb-2"
            height="350"
            width="350"
            :style="rotateImg()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Utils from '../../utils/utils'
import projectData from '~/static/projectsData.json'

export default {
  data() {
    return {
      project: this.$route.params.pathMatch,
    }
  },
  computed: {
    projectData() {
      return projectData.find((project) => project.name === this.project)
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
    width: 250em;
    /*height: 66vh;*/
  }
  .text-box {
    width: 40em;
    margin-right: 5em;
  }
}
</style>
