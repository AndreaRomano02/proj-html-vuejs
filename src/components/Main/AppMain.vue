<script>
import CarouselSection from './Section/CarouselSection.vue'
import { anime } from '@/data'
export default {
  components: { CarouselSection, },
  data() {
    return {
      anime
    }
  }
}
</script>

<template>
  <main>
    <section>
      <CarouselSection :anime="anime" />
    </section>
  </main>
</template>

<style></style>
