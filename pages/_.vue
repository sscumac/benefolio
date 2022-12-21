<template>
  <div
    class="flex-grow flex flex-col relative pt-48 sm:pt-0"
    @wheel="horizontalScroll($event, true)"
  >
    <img
      :src="bgImage"
      class="
        opacity-50
        fixed
        sm:absolute
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
      id="slideContainer"
      class="flex-grow sm:overflow-x-scroll flex flex-col justify-center"
    >
      <div
        id="slider"
        class="
          overflow-hidden
          md:overflow-visible
          flex flex-col
          my-10
          sm:flex-row
          justify-start
          transform
          p-4
          sm:p-10
        "
      >
        <!--                          main picture-->
        <div class="mb-10 sm:m-20 min-w-max" :style="rotateImg()">
          <img
            v-if="project.mainImg"
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

        <!--        text-->
        <div class="sm:p-10 bg-white text-box info-text overflow-y-scroll">
          <h1 class="font-bold mb-4 capitalize">{{ projectData.name }}</h1>
          <div class="font-bold mb-4">{{ projectData.intro }}</div>
          <p v-if="projectData && projectData.text" v-html="projectData.text" />
          <div class="flex mt-10">
            <div v-if="projectData.credits !== ''" class="font-bold mr-2">
              <!--              Credits-->
            </div>
            <p v-html="projectData.credits" />
          </div>
        </div>
        <!--        Pictures-->
        <div
          v-for="(image, index) in projectData.images"
          :key="index"
          class="
            md:min-w-max
            flex flex-col
            justify-center
            md:mx-16
            mb-4
            h-3/4
            2xl:h-full
            py-20
            sm:py-0
            slide
          "
        >
          <img
            v-if="image"
            :src="
              require(`~/assets/img/projects/${projectData.shortName}/${image}`)
            "
            alt="image.name"
            class="mb-2 md:max-w-none project-pic w-auto"
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
import projectData from '~/static/projectsData1712.json'
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
<style>
.info-text p {
  padding: 1px 4px;
}
#slider {
  width: 100vw;
}
.text-link {
  font-weight: bold;
  color: #ec2b8b;
}

@media (min-width: 640px) {
  .project-pic {
    max-height: 66vh;
    height: inherit;
  }

  #slider {
    width: 300em;
    /*height: 66vh;*/
  }
  .text-box {
    height: fit-content;
    /*width: 90vw;*/
    max-height: 75vh;
    max-width: 100vw;
    min-width: 90vw;
    margin-right: 5em;
  }
}
</style>
