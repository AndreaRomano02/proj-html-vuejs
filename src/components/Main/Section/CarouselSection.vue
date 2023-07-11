<script>
import AnimeCard from '@/components/general/AnimeCard.vue'
import ArrowLeft from '@/components/General/ArrowLeft.vue';
import ArrowRight from '@/components/General/ArrowRight.vue';
export default {
  components: { AnimeCard, ArrowLeft, ArrowRight },
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
    <ArrowLeft @click="goPrev" class="arrow left" />
    <AnimeCard v-for="(item, i) in anime" :key="item.title" :item="item" :left="false" class="card"
      :class="{ 'active': show(i) }" />
    <ArrowRight @click="goNext" class="arrow right" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

#main-carousel {
  height: 450px;
  position: relative;
  background-color: $lightGray;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  gap: 10px;
  margin: 0 20px;

  span {
    cursor: pointer;
  }

}

.arrow {
  position: absolute;
  z-index: 2;
  background-color: white;
  color: $primary;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  &:hover {
    background-color: $primary;
    color: white;
  }
}

.card {
  display: none;
  border: none;

  &.active {
    display: block;
  }
}
</style>
