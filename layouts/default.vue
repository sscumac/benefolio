<template>
  <div class="relative flex flex-col h-screen">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '../components/Header'
// import Footer from '../components/Footer'
export default {
  components: { Header },
}
</script>
