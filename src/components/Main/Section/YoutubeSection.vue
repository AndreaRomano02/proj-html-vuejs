<script>
import YoutubePreview from './YoutubePreview.vue';
export default {
  components: { YoutubePreview },
  props: {
    list: Array,
  }
}
</script>

<template>
  <div class="youtube container">
    <div class="row h-100">
      <div class="col-8 left p-0">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/U6wS1wOCcBk"></iframe>
      </div>
      <div class="col-4 p-0 right">
        <header>
          <div>
            <font-awesome-icon icon="fa-solid fa-play" class="fa-2x ms-4" />
          </div>
          <div class="ms-3 mt-3">
            <h4>Video Playlist</h4>
            <p class="fa-xs">1/ {{ list.length }}</p>
          </div>
        </header>
        <div v-for="(item, i) in list" :key="i">
          <YoutubePreview :item="item" :index="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

header {
  height: 80px;
  background-color: $secondary;
  position: sticky;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;

  color: white;

}

.youtube {
  height: 70vh;
}

.left {
  height: 100%;
}

.right {
  height: 100%;
  overflow: auto;
}
</style>
