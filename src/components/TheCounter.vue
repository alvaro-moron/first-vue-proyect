<script lang="ts" setup>
  import { ref } from 'vue'
  const counter = ref(0)
  const buttonIncrementText = 'Incrementar'
  const buttonDecrementText = 'Decrementar'

  function incrementNumber() {
    return counter.value++
  }
  function decrementNumber() {
    return counter.value--
  }
</script>
<template>
  <section class="cnt-container">
    <span>{{ counter }}</span>
    <div class="cnt-container__buttons-container">
      <button v-if="counter > 0" class="cnt-container__button" @click="decrementNumber">
        {{ buttonDecrementText }}
      </button>
      <button v-if="counter < 10" class="cnt-container__button" @click="incrementNumber">
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
