<script>

import AppForm from '../General/AppForm.vue';
export default {
  props: {
    item: Object,
  },
  components: { AppForm },
  methods: {
    onSubmit(term) {
      console.log(term);
    }
  },
}
</script>

<template>
  <ul>
    <h2>{{ item.title }}</h2>
    <li v-if="item.links" v-for="link in item.links" :key="item.links[0]"> {{ link }} </li>
    <li v-if="item.input">
      <AppForm placeholder="Email" @submit="onSubmit" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

h2 {
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
}
</style>
