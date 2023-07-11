<script>
import AppGenre from './AppGenre.vue';
export default {
  components: { AppGenre },
  props: {
    anime: Array,
    genresArray: Array,
  },
  mounted() {
    this.genresArray.forEach(genre => {
      this.anime.forEach(obj => {
        if (obj.genres.includes(genre.genre)) genre.count++;
      })
    })
  },
}
</script>

<template>
  <div>
    <AppGenre v-for="genre in genresArray" :genre="genre" />
  </div>
</template>

<style scoped>
div {
  display: flex;
  gap: 10px;
}
</style>
