<script>
import FooterContent from './FooterContent.vue';
import { footerMenuList } from '@/data'

export default {
  components: { FooterContent },
  data() {
    return {
      footerMenuList,
    }
  }
}
</script>

<template>
  <footer>
    <!-- TOP Background Line  -->
    <div class="bg-line">
      <span><font-awesome-icon :icon="['fas', 'caret-down']" class="fa-3x" /></span>
    </div>

    <!-- Content -->
    <div class="container">
      <FooterContent :list="footerMenuList" />
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
  color: white;
}
</style>
