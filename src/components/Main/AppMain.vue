<script>
import CarouselSection from './Section/CarouselSection.vue'
import AnimeCard from '../General/AnimeCard.vue'
import { anime } from '@/data'
export default {
  components: { CarouselSection, AnimeCard },
  data() {
    return {
      anime
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

  </main>
</template>

<style scoped>
#anime-card {
  display: flex;
}

.small {
  height: 300px;
  width: 300px;
}

.large {
  height: 500px;
  width: 500px;
}
</style>
