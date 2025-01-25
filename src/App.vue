<script setup lang="ts">
  import TheTitle from '@/components/TheTitle.vue'
  const title = 'This is the main subtitle'
</script>

<template>
  <section class="container">
    <TheTitle :prop-title="title" />
  </section>
</template>

<style scoped lang="scss">
  .container {
    padding: 0 3em;
  }
</style>
