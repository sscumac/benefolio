<template>
  <div class="flex flex-col min-h-screen relative">
    <Header />
    <Nuxt class="flex-grow" />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  components: { Footer, Header },
}
</script>
^
