<template>
  <div>
    <!--  top-->
    <div
      class="
        bg-light-blue
        items-center
        w-screen
        flex
        text-normal-black
        p-3
        tags
      "
    >
      <a class="class" href="mailto:mail@studio.eu">mail@studio.eu</a>
      <nuxt-link to="/impressum">Impressum</nuxt-link>
      <nuxt-link to="/datenschutz">Datenschutz</nuxt-link>
    </div>
    <!--    bottom-->
    <div
      class="
        bg-normal-black
        items-center
        w-screen
        flex
        justify-center
        text-white
        p-3
        tags
      "
    >
      <p>
        Der Inhalt dieser Website ist über Creative Commons (BY-NC-ND 3.0 DE)
        lizensiert sofern es nicht anders deklariert ist.
      </p>
    </div>
  </div>
</template>

<style>
.tags * {
  padding: 0 10px;
}
</style>
