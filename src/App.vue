<script setup lang="ts">
  import TheTitle from '@/components/TheTitle.vue'
  import TheCounter from '@/components/TheCounter.vue'
  const title = 'This is the main subtitle'
</script>

<template>
  <section class="container">
    <TheTitle>{{ title }}</TheTitle>
    <TheCounter />
  </section>
</template>

<style scoped lang="scss">
  .container {
    padding: 0 3em;
  }
</style>
