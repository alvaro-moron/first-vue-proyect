<script lang="ts" setup></script>
<template>
  <section class="title-container">
    <h2 class="title-container__subTitle"><slot /></h2>
  </section>
</template>
<style scoped lang="scss">
  .title-container {
    margin: 2em 0;
    &__subTitle {
      text-align: center;
    }
  }
</style>
