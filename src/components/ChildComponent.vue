<script setup lang="ts">
  import { inject } from 'vue'
  import TheButton from '@/components/TheButton.vue'

  const title = 'Soy el hijo'
  const emit = defineEmits(['sayHi', 'sayHiFaster'])
  function sayHi() {
    emit('sayHi', { message: 'Hola desde el componente hijo' })
  }

  const message = inject<string>('message')
</script>
<template>
  <section class="container-child">
    <h2>{{ title }}</h2>
    <TheButton @click="sayHi"> Saludar desde el hijo </TheButton>
    <TheButton @click="$emit('sayHiFaster', 'Hola desde el hijo más rápido')">
      Saludar desde el hijo más rápido
    </TheButton>
    <p class="container-child__text">{{ message }}</p>
  </section>
</template>
<style scoped lang="scss">
  .container-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    background-color: lightblue;
    padding: 1em;
    margin: 2em 0;
    &__text {
      margin: 1em 0;
    }
  }
</style>
