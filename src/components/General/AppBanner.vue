<script>
export default {
  props: {
    bannerSrc: String,
  },
  computed: {
    src() {
      const url = new URL(`../../assets/img/${this.bannerSrc}`, import.meta.url);
      return url.href
    }
  }
}
</script>

<template>
  <img :src="src" alt="Banner">
</template>

<style></style>
