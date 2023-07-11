<script>
import AppBanner from '../General/AppBanner.vue'
export default {
  components: { AppBanner }
}
</script>

<template>
  <div class="jumbotron container">
    <img src="@/assets/img/anime-logo-300x89.webp" alt="Logo">
    <AppBanner bannerSrc="header-banner.webp" alt="Banner" />
  </div>
</template>

<style scoped>
.jumbotron {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 1rem auto;
}

img:first-of-type {
  height: 70px;
}

img {
  border-radius: 10px;
}
</style>
