<script>
export default {
}
</script>

<template>
  <footer>
    <div class="bg-line">
      <span><font-awesome-icon :icon="['fas', 'caret-down']" class="fa-3x" /></span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

.bg-line {
  background-color: $secondary;
  height: 5px;
  position: relative;

  span {
    position: absolute;
    top: -15px;
    right: 50%;
    transform: translateX(-50%);
    z-index: 0;
    color: $secondary;
  }
}

footer {
  background-color: $primary;
  min-height: 500px;
}
</style>
