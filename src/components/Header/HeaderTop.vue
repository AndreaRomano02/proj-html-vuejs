<script>
import SocialIcon from '../General/SocialIcon.vue';
import ArrowLeft from '../General/ArrowLeft.vue';
import ArrowRight from '../General/ArrowRight.vue';
import { anime } from '@/data'
import { icons } from '@/data'

export default {
  components: { SocialIcon, ArrowLeft, ArrowRight },
  data() {
    return {
      anime,
      icons
    }
  },
  computed: {
    smallPictureElement() {
      return this.anime.filter(element => {
        if (element.srcSmall) {
          const url = new URL(`../../assets/img/${element.srcSmall}`, import.meta.url);
          element.srcSmall = url.href
          return element
        }
      })
    },
  }
}
</script>

<template>
  <div class="header-top">
    <div class="container">
      <div class="news">
        <h5>news updates</h5>
        <div id="carousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div v-for="(element, i) in smallPictureElement" :key="element.title" class="carousel-item"
              :class="{ 'active': i == 0 }">
              <img :src="element.srcSmall" :alt="element.title">
              <span>{{ element.time }}</span><span>{{ element.title }}</span>
            </div>
          </div>
          <div class="carousel-controls">
            <ArrowLeft data-bs-target="#carousel" data-bs-slide="prev" class="text-white" aria-hidden="true" />
            <ArrowRight data-bs-target="#carousel" data-bs-slide="next" class="text-white" aria-hidden="true" />
          </div>
        </div>

      </div>
      <div class="icons">
        <SocialIcon :icons="icons" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

.header-top {
  height: 40px;
  background-color: $primary;
  color: white;

  &>div {
    display: flex;
    align-items: center;
  }
}

.news {
  display: flex;
  align-items: center;
  height: 100%;
  flex-basis: 85%;

  h5 {
    font-size: 1rem;
    font-weight: bolder;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    margin-bottom: 0;
    text-transform: uppercase;
    background-color: $secondary;
  }


  .carousel {
    display: flex;
    flex-grow: 1;

    img {
      height: 40px;
      width: 40px;
    }

    span {
      margin-left: 10px;
      text-transform: uppercase;
      font-weight: bold;
    }

    .carousel-controls {
      display: flex;
    }
  }

}

.icons {
  flex-grow: 1;
  text-align: end;
}
</style>
