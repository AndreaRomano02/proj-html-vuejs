<script>
export default {
  props: {
    anime: Array,
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  mounted() {
    setInterval(this.goNext, 4000)
  },
  created() {
    this.changeSrc();
  },
  methods: {
    changeSrc() {
      return this.anime.map(element => {
        const url = new URL(`../../../assets/img/${element.src}`, import.meta.url);
        element.src = url.href
        return element
      })
    },
    goNext() {
      if (this.currentIndex == this.anime.length - 4) this.currentIndex = 0
      else this.currentIndex++
    },
    goPrev() {
      if (this.currentIndex == 0) this.currentIndex = this.anime.length - 4
      else this.currentIndex--
    },
    show(i) {
      return this.currentIndex == i || this.currentIndex + 1 == i || this.currentIndex + 2 == i || this.currentIndex + 3 == i
    }
  },
}
</script>

<template>
  <div id="main-carousel">
    <span @click="goPrev"><font-awesome-icon :icon="['fas', 'chevron-left']" class="fa-3x m-4" /></span>
    <div v-for="(item, i) in anime" :key="item.title" class="card" :class="{ 'active': show(i) }">
      <img :src="item.src" :alt="item.title">
    </div>
    <span @click="goNext"><font-awesome-icon :icon="['fas', 'chevron-right']" class="fa-3x m-4" /></span>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

#main-carousel {
  height: 450px;
  background-color: $lightGray;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  span {
    cursor: pointer;
  }
}

.card {
  display: none;

  &.active {
    display: block;
  }
}
</style>
