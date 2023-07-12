<script>
export default {
  props: {
    placeholder: String,
    buttonColor: String,
  },
  emits: ['submit'],
  data() {
    return {
      text: '',
    }
  }
}
</script>

<template>
  <form @submit.prevent="$emit('submit', text)">
    <input v-model="text" type="text" class="form-control" :placeholder="placeholder || 'Inserisci qua...'">
    <button class="btn" :style="`background-color:${buttonColor}`">SUBSCRIBE</button>
  </form>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/vars' as *;

.btn {
  background-color: $secondary;
  color: white;
  font-weight: bold;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background-color: white;
    color: $primary;
  }
}
</style>
