<script>
</script>

<template>
  <button type="button">
    <font-awesome-icon :icon="['fas', 'chevron-left']" />
  </button>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

button {
  border: none;
  background-color: transparent;
  padding: 0;
  text-align: center;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;

  &:hover {
    background-color: $secondary;
  }
}
</style>
