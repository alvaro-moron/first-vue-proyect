<script setup lang="ts">
  import ProductCard from '@/components/ProductCard.vue'
  import productsMock from '@/mocks/products'
</script>

<template>
  <section class="catalog-container">
    <article
      v-for="product in productsMock"
      :key="product.title"
      class="catalog-container__card"
    >
      <ProductCard :product="product" />
    </article>
    <RouterLink to="/" class="catalog-container__button">Go to Home</RouterLink>
  </section>
</template>

<style scoped lang="scss">
  .catalog-container {
    margin: 2em auto;
    padding: 0 3em;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: 1em;
    &__button {
      width: fit-content;
      height: fit-content;
      margin: auto auto;
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
