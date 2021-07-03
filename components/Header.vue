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
      <nuxt-link to="/">Benedikt Stoll</nuxt-link>
      <div class="tags flex w-7/12 justify-between">
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
        justify-end
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
  padding: 0 10px;
}
</style>
