<script>
export default {
  props: { genre: Object },
  computed: {
    src() {
      const url = new URL(`../../../assets/img/${this.genre.src}`, import.meta.url);
      return url.href
    },
  },
}
</script>

<template>
  <div class="layout">
    <img :src="src" :alt="genre.genre">
    <p class="genre-name m-0">
      {{ genre.genre }}
    <p class="m-0">{{ genre.count }} POSTS</p>
    </p>

    <div class="overlay">
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

.layout {
  position: relative;
  width: 300px;

  &:hover .genre-name p,
  &:hover .overlay {
    display: flex;
  }

}

img {
  filter: brightness(0.6);
}

.genre-name {
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  font-size: 1.6rem;
  text-align: center;

  & p {
    font-size: 1rem;
    display: none;
  }

}

.overlay {
  position: absolute;
  background-color: rgba($primary, $alpha: 0.6);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  display: none;

  & div {
    position: absolute;
    height: 150px;
    width: 200px;
    border: 2px solid white;
    z-index: 1;
  }
}
</style>