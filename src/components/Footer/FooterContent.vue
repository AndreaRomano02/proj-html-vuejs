<script>
import FooterTop from './FooterTop.vue';
import FooterBottom from './FooterBottom.vue';

export default {
  components: { FooterTop, FooterBottom },
  props: {
    list: Array,
  }
}
</script>

<template>
  <FooterTop :list="list" />
  <FooterBottom />
</template>

<style scoped></style>
