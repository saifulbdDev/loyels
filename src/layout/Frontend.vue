<template>
  <main class="main-app">
    <Header/>
    <router-view :key="$route.path"></router-view>
    <Footer/>
  </main>
</template>

<script>
import Header from "@/layout/frontend/Header";
import Footer from "@/layout/frontend/Footer";

export default {
  name: "Frontend",
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.main-app{
  background-color: #f2f3f8;
}
</style>
