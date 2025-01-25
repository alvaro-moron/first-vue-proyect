<script lang="ts" setup>
  import { ref } from 'vue'
  const number = ref(0)
  const buttonIncrementText = 'Incrementar'
  const buttonDecrementText = 'Decrementar'

  function incrementNumber() {
    return number.value++
  }
  function decrementNumber() {
    return number.value--
  }
</script>
<template>
  <section class="cnt-container">
    <span>{{ number }}</span>
    <div class="cnt-container__buttons-container">
      <button class="cnt-container__button" @click="decrementNumber">
        {{ buttonDecrementText }}
      </button>
      <button class="cnt-container__button" @click="incrementNumber">
        {{ buttonIncrementText }}
      </button>
    </div>
  </section>
</template>
<style scoped lang="scss">
  .cnt-container {
    margin: 2em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    &__buttons-container {
      display: flex;
      gap: 1em;
    }
    &__button {
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
