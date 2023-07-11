<script>
export default {
  props: {
    item: Object,
    isOver: Boolean,
    left: Boolean,
  },
  data() {
    return {
    }
  }
}
</script>

<template>
  <div>
    <figure>

      <!-- Genres -->
      <p class="genres" :class="{ center: !left }">
        <span v-for="( genre, i ) in  item.genres " :key="i" class="me-3">
          {{ genre }}
        </span>
      </p>

      <!-- Image -->
      <img :src="item.src" :alt="item.title">

      <!-- Descriptions -->
      <figcaption :class="{ 'over-description': isOver, 'center': !left }">
        <p>
          <span class="me-2">
            <font-awesome-icon icon="fa-solid fa-user" />
            {{ item.status }}
          </span>
          <span>
            <font-awesome-icon icon="fa-solid fa-calendar-days" />
            {{ item.date }}
          </span>
        </p>
        <p>{{ item.title }}</p>
      </figcaption>
    </figure>
  </div>
</template>

<style lang="scss" scoped>
figure {
  position: relative;
}

.genres {
  position: absolute;
  z-index: 1;
  top: 20px;
  left: 20px;

  span {
    background-color: white;
    padding: 10px;
    border-radius: 5px;
  }
}

.center {
  left: 50%;
  transform: translateX(-50%);
}

figcaption.over-description {
  position: absolute;
  bottom: 10px;
  z-index: 1;
  color: white;
  font-weight: bold;
  text-align: center;
  width: 100%;
}

p {
  margin: 0;
}

img {
  height: 100%;
  width: 100%;
  filter: brightness(0.6);
}
</style>
