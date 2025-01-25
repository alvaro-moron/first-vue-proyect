<script lang="ts" setup>
  defineProps({
    propTitle: {
      type: String,
      required: true,
    },
  })
</script>
<template>
  <section class="title-container">
    <h2 class="title-container__subTitle">{{ propTitle }}</h2>
  </section>
</template>
<style scoped lang="scss">
  .title-container {
    &__subTitle {
      margin: 2em 0;
      text-align: center;
    }
  }
</style>
