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

      <div class="tags pl-4 flex flex-col sm:flex-row text-xs md:text-base">
        <p>Kritische Raumproduktion</p>
        <p>Spekulative Forschung</p>
        <p>Performativer Urbanismus</p>
      </div>
    </div>
    <!--    bottom-->
    <div
      class="
        bg-light-blue
        items-center
        w-screen
        flex
        justify-around
        xs:justify-end
        text-white
        p-3
        tags
      "
    >
      <nuxt-link class="tags" to="/portfolio">Portfolio</nuxt-link>
      <nuxt-link class="tags" to="/info">Info</nuxt-link>
      <nuxt-link class="tags" to="/">ENG</nuxt-link>
    </div>
  </div>
</template>

<style>
.tags * {
  padding: 4px 12px;
}

/*@media only screen and (max-width: 640px) {*/
/*  .tags * {*/
/*    max-width: min-content;*/
/*  }*/
/*}*/
</style>
