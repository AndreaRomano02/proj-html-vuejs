<script>
import CarouselSection from './Section/CarouselSection.vue'
import HeaderSection from './Section/HeaderSection.vue'
import YoutubeSection from './Section/YoutubeSection.vue'
import AnimeCard from '../General/AnimeCard.vue'
import AppBanner from '../General/AppBanner.vue'
import ArrowLeft from '../General/ArrowLeft.vue'
import ArrowRight from '../General/ArrowRight.vue'
import { anime } from '@/data'
import { videoList } from '@/data'
export default {
  components: {
    CarouselSection,
    AnimeCard,
    HeaderSection,
    AppBanner,
    ArrowLeft,
    ArrowRight,
    YoutubeSection
  },
  data() {
    return {
      anime,
      videoList
    }
  }
}
</script>

<template>
  <main>

    <!-- Carousel -->
    <section id="carousel">
      <CarouselSection :anime="anime" />
    </section>

    <!-- Anime Section -->
    <section id="anime-card">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <AnimeCard :item="anime[0]" :is-over="true" :left="false" :icon="true" />
            <AnimeCard :item="anime[1]" :is-over="true" :left="false" :icon="true" />
          </div>
          <div class="col-6">
            <AnimeCard :item="anime[5]" :is-over="true" :left="false" :icon="true" />
          </div>
          <div class="col-3">
            <AnimeCard :item="anime[3]" :is-over="true" :left="false" :icon="true" />
            <AnimeCard :item="anime[4]" :is-over="true" :left="false" :icon="true" />
          </div>
        </div>
      </div>
    </section>

    <!-- Lifestyle & Stories -->
    <section id="lifestyle-section">
      <div class="container">
        <!-- Header of Section -->
        <HeaderSection :items="['All', 'lifestyle', 'stories']">
          Lifestyle & Stories
        </HeaderSection>

        <div class="row mt-4">
          <div class="col-7">
            <AnimeCard :item="anime[8]" :left="true" :isOver="true" :singleGenre="true" :icon="true" />
          </div>
          <div class="col-5">
            <div v-for="item in anime.slice(0, 3)" :key="item.title">
              <AnimeCard class="anime-card" :item="item" :left="true" :icon="true" :singleGenre="true"
                :asideText="true" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Banner -->
    <section id="banner">
      <AppBanner class="container" bannerSrc="page-banner-1.webp" />
    </section>

    <!-- Featured Post -->
    <section id="posts">
      <div class="container">
        <HeaderSection>
          <template v-slot:title>Featured post</template>
          <template v-slot:right>
            <ArrowLeft />
            <ArrowRight />
          </template>
        </HeaderSection>
        <div class="row mt-3">
          <div class="col anime-post" v-for="item in anime.slice(0, 3)">
            <AnimeCard :item="item" />
            <div class="description-card">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorum optio
                utconsequatur provident debitis...</p>
              <button class="btn">Read More</button>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- YouTube Trailer -->
    <section id="youtube">
      <YoutubeSection :list="videoList" />
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

section {
  margin: 2.5rem 0;
}

// ---------------------------------------
#lifestyle-section {
  .col-5>div:first-child div {
    border: none;
    padding-top: 0;
  }

  .anime-card {
    padding: 1rem 0;
    border-top: 1px solid black;

  }
}

// ---------------------------------------

// ---------------------------------------
#banner {
  text-align: center;
  padding: 3rem 0;
  background-color: $lightGray;
}

// ---------------------------------------

// ---------------------------------------
#posts {

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

// ---------------------------------------
</style>
