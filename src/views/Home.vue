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
    <RouterLink to="/catalogo" class="container-home__button"
      >Go to Catalog</RouterLink
    >
    <ParentComponent />
  </section>
</template>

<style scoped lang="scss">
  .container-home {
    padding: 0 3em;
    &__button {
      @include linkLikeMainButton();
    }
  }
</style>
