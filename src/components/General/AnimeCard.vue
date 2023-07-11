<script>
export default {
  props: {
    item: Object,
    isOver: Boolean,
    left: Boolean,
    icon: Boolean,
    singleGenre: Boolean,
    asideText: Boolean,
  },
}
</script>

<template>
  <div>
    <figure :class="{ 'aside-figure': asideText }">
      <!-- Genres -->
      <p class="genres" :class="{ center: !left }">
        <span v-if="singleGenre">{{ item.genres[0] }}</span>
        <span v-else v-for="( genre, i ) in  item.genres " :key="i">
          <span>{{ genre }}</span>

        </span>
      </p>

      <!-- Image -->
      <img :src="item.src" :alt="item.title">

      <!-- Descriptions -->
      <figcaption :class="{ 'over-description': isOver, 'aside-text': asideText, 'center': !left }">

        <!-- Description with icons -->
        <p>
          <span class="me-2" v-if="icon">
            <font-awesome-icon icon="fa-solid fa-user" />
            {{ item.status }}
          </span>
          <span v-if="icon">
            <font-awesome-icon icon="fa-solid fa-calendar-days" />
            {{ item.date }}
          </span>
        </p>

        <!-- TITLE -->
        <p>{{ item.title }}</p>

        <!-- Description without icons -->
        <span v-if="!icon" class="fw-normal">
          {{ item.date }}
        </span>
      </figcaption>
    </figure>
  </div>
</template>

<style lang="scss" scoped>
// General CSS of fiure
figure {
  position: relative;
  font-weight: bold;

  // CSS of aside text chose
  &.aside-figure {
    display: flex;
    align-items: center;
    margin: 0;

    img {
      width: 200px;
    }
  }
}

.genres {
  position: absolute;
  z-index: 1;
  top: 20px;
  left: 20px;

  span {
    background-color: white;
    padding: 7px;
    border-radius: 5px;
    margin-right: 7px;

    &:last-of-type {
      margin-right: 0;
    }
  }
}

// CSS for center choise
.center {
  left: 0;
  width: 100%;
  text-align: center;
}


// General CSS of desctiption
figcaption {
  position: absolute;
  text-align: center;
  left: 20px;
  margin-top: 10px;

  // CSS of description over image
  &.over-description {
    bottom: 20px;
    z-index: 1;
    color: white;
    font-weight: bold;
  }


  // CSS of description for Aside text
  &.aside-text {
    position: static;
    width: 100%;

  }
}


// General
p {
  margin: 0;
}

img {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  filter: brightness(0.6);
}
</style>
