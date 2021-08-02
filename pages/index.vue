<template>
  <div class="container">
    <p class="m-10">Hallo! Schön, dass du da bist!</p>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$route.name)
  },
}
</script>
