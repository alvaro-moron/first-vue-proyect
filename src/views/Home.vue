<script setup lang="ts">
  import TheTitle from '@/components/TheTitle.vue'
  import TheCounter from '@/components/TheCounter.vue'
  const title = 'This is the main subtitle'
</script>

<template>
  <section class="container">
    <TheTitle>{{ title }}</TheTitle>
    <TheCounter />
    <RouterLink to="/Catalog" class="container__button">Go to Catalog</RouterLink>
  </section>
</template>

<style scoped lang="scss">
  .container {
    padding: 0 3em;
    &__button {
      width: fit-content;
      margin: 0 auto;
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
