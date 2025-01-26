<script setup lang="ts">
  const title = 'Soy el hijo'
  const emit = defineEmits(['sayHi', 'sayHiFaster'])
  function sayHi() {
    emit('sayHi', { message: 'Hola desde el componente hijo' })
  }
</script>
<template>
  <section class="container-child">
    <h2>{{ title }}</h2>
    <button class="container-child__button" @click="sayHi">
      Saludar desde el hijo
    </button>
    <button
      class="container-child__button"
      @click="$emit('sayHiFaster', 'Hola desde el hijo más rápido')"
    >
      Saludar desde el hijo más rápido
    </button>
  </section>
</template>
<style scoped lang="scss">
  .container-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightblue;
    padding: 1em;
    &__button {
      width: fit-content;
      height: fit-content;
      margin: 1em auto 0;
      background-color: lightgreen;
      padding: 0.5em;
      border-radius: 0.5em;
      cursor: pointer;
      transition: ease-in-out 0.2s;
      border: 0.125rem solid lightgreen;
    }
    &__button:hover {
      background-color: transparent;
    }
  }
</style>
