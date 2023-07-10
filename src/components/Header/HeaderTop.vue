<script>
import SocialIcon from '../General/SocialIcon.vue';
import { anime } from '@/data'

export default {
  components: { SocialIcon },
  data() {
    return {
      anime
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

        <!-- ------------------------------------------------------------ -->
        <!-- Ho Hardcodato intanto solo il primo risolutato poi farò il carosello automatico -->
        <!-- ------------------------------------------------------------ -->
        <div class="carousel">
          <img :src="smallPictureElement[0].srcSmall" :alt="smallPictureElement[0].title">
          <span>{{ smallPictureElement[0].time }}</span>
          <span>{{ smallPictureElement[0].title }}</span>
        </div>
        <div class="carousel-comands">
          <span><font-awesome-icon :icon="['fas', 'chevron-left']" /></span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
      </div>
      <div class="icon"></div>
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
  }
}

.news {
  display: flex;
  align-items: center;
  height: 100%;
  flex-basis: 75%;

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
  }

  .carousel-comands {
    span {
      cursor: pointer;
      display: inline-block;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border-radius: 50%;

      &:hover {
        background-color: $secondary;
      }
    }

  }
}
</style>
