<script>
export default {
  props: { menuList: Array },
}
</script>

<template>
  <nav class="container fw-bold">
    <div class="row align-items-center">
      <a href="#" class="hamburger col-2">
        <font-awesome-icon icon="fa-solid fa-bars" class="fa-2x" />
      </a>
      <ul class="col-8">
        <li v-for="(item, i) in menuList" :key="item.text" class="col">
          <a :href="item.link">
            <font-awesome-icon :icon="`fa-solid fa-${item.icon}`" />
            {{ item.text }}
            <font-awesome-icon :icon="`fa-solid fa-chevron-down`" v-if="item.other" />
          </a>
        </li>
      </ul>
      <a href="#" class="search col-2 text-end">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="fa-2x" />
      </a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

nav {
  margin-bottom: 1rem;
}

ul {
  display: flex;
  gap: 20px;
}

a:hover {
  color: $primary;
}
</style>
