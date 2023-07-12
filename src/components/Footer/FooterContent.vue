<script>
import FooterTop from './FooterTop.vue';

export default {
  components: { FooterTop },
  props: {
    list: Array,
  }
}
</script>

<template>
  <FooterTop :list="list" />
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;
</style>
