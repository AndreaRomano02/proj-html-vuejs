<script>
import HeaderJumbotron from './HeaderJumbotron.vue'
import HeaderMenu from './HeaderMenu.vue'
import { headerMenuList } from '@/data'
export default {
  components: { HeaderJumbotron, HeaderMenu },
  data() {
    return {
      headerMenuList,
    }
  },
}
</script>

<template>
  <HeaderJumbotron />
  <HeaderMenu :menuList="headerMenuList" />
</template>

<style scoped></style>
