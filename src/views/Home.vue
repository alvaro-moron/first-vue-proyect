<script setup lang="ts">
  import TheTitle from '@/components/TheTitle.vue'
  import TheCounter from '@/components/TheCounter.vue'
  import ParentComponent from '@/components/ParentComponent.vue'
  const title = 'This is the main subtitle'
</script>

<template>
  <section class="container-home">
    <TheTitle>{{ title }}</TheTitle>
    <TheCounter />
    <RouterLink to="/Catalog" class="container-home__button"
      >Go to Catalog</RouterLink
    >
    <ParentComponent />
  </section>
</template>

<style scoped lang="scss">
  .container-home {
    padding: 0 3em;
    &__button {
      width: fit-content;
      margin: 2em auto;
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
