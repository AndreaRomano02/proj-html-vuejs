<script>
import SingleMenu from './SingleMenu.vue';

export default {
  components: { SingleMenu, },
  props: {
    list: Array,
  }
}
</script>

<template>
  <div>
    <SingleMenu v-for="item in list" :key="item.title" :item="item" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

div {
  display: flex;
  justify-content: space-between;
  padding: 70px 0;
  border-bottom: 1px solid white;
}
</style>
