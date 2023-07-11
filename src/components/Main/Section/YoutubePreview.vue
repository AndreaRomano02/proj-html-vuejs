
<script>
export default {
  props: {
    item: Object,
    index: Number,
  },
  computed: {
    imageSrc() {
      const url = new URL(`../../../assets/img/${this.item.imageSrc}`, import.meta.url);
      return url.href
    },
  },
}
</script>

<template>
  <div class="preview-card px-2">
    <p class="number">{{ index }}</p>
    <figure>
      <img :src="imageSrc" :alt="item.title">
    </figure>
    <div class="description">
      <p>{{ item.title }}</p>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

.preview-card {
  display: flex;
  border-bottom: 1px solid black;
  padding-top: 1rem;
  align-items: center;
  cursor: pointer;

  &:hover .number {
    background-color: $primary;
  }

  &:hover .description {
    color: $primary;
  }
}

.number {
  background-color: $secondary;
  padding: 5px 7px;
  margin-right: 10px;
  color: white;
  border-radius: 5px;
}

.description {
  font-size: 0.9rem;
  margin-left: 10px;
}

img {
  height: 100px;
  max-width: 150px;
}
</style>
