<script>
import AnimeCard from '@/components/general/AnimeCard.vue'
import ArrowLeft from '@/components/General/ArrowLeft.vue';
import ArrowRight from '@/components/General/ArrowRight.vue';
export default {
  components: { AnimeCard, ArrowLeft, ArrowRight },
  props: {
    anime: Array,
    otherStyle: Boolean,
  },
  data() {
    return {
      currentIndex: 0,
      autoPlay: null,
    }
  },
  mounted() {
    this.startInterval()
  },
  methods: {
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
    },
    secondShow(i) {
      return this.currentIndex == i || this.currentIndex + 1 == i || this.currentIndex + 2 == i
    },
    startInterval() {
      this.autoPlay = setInterval(this.goNext, 4000)
    },
    stopInterval() {
      clearInterval(this.autoPlay)
    },
  },
}
</script>

<template>
  <div v-if="!otherStyle" id="main-carousel">
    <ArrowLeft @click="goPrev" class="arrow left" />
    <AnimeCard v-for="(item, i) in anime" :key="item.title" :item="item" :left="false" class="card"
      @mouseenter="stopInterval" @mouseleave="startInterval" :class="{ 'active': show(i) }" />
    <ArrowRight @click="goNext" class="arrow right" />
  </div>

  <div v-if="otherStyle" id="second-carousel" class="row mt-3">
    <div class="col anime-post card" v-for="(item, i) in anime" :class="{ active: secondShow(i) }">
      <AnimeCard :item="item" @mouseenter="stopInterval" @mouseleave="startInterval" />
      <div class="description-card">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorum optio
          utconsequatur provident debitis...</p>
        <button class="btn">Read More</button>
      </div>
    </div>
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
}

#second-carousel {
  .description-card {
    background-color: $lightGray;
    padding-top: 70px;
    text-align: center;

    button {
      background-color: $primary;
      color: white;
      font-weight: bold;
      border-radius: 15px;
      width: 40%;

      &:hover {
        background-color: $secondary;
      }
    }
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
