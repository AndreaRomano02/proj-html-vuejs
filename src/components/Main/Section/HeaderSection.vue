<script>
export default {
  props: {
    items: Array,
  }
}
</script>

<template>
  <header>
    <h3>
      <slot name="title"></slot>
    </h3>
    <div v-if="items" class="right-header d-flex gap-3">
      <div v-for="(item, i) in items" :key="i">
        {{ item }}
      </div>
    </div>
    <div v-else>
      <slot name="right"></slot>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

header {
  text-transform: uppercase;
  font-weight: bolder;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-weight: bold;
}

.right-header>div {
  background-color: $secondary;
  color: white;
  padding: 10px;
  border-radius: 10px;
}
</style>
