<script>
export default {
  props: {
    icons: Array,
  }
}
</script>

<template>
  <a href="#" v-for="icon in icons">
    <font-awesome-icon :icon="`fa-brands fa-${icon}`" />
  </a>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

a {
  display: inline-block;
  margin-right: 10px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  background-color: white;
  color: $primary;

  &:hover {
    background-color: $secondary;
  }
}
</style>
