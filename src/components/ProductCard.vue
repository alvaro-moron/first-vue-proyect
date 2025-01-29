<script lang="ts" setup>
  import TheButton from '@/components/TheButton.vue'

  defineProps({
    product: {
      type: Object,
      required: true,
    },
  })
</script>
<template>
  <section class="card-container">
    <h2 class="card-container__title">{{ product.title }}</h2>
    <img :src="product.image" alt="Imagen del card" />
    <p class="card-container__description">{{ product.description }}</p>
    <div class="card-container__price-btn-block">
      <p class="card-container__price">{{ product.price }}</p>
      <TheButton>{{ product.button }}</TheButton>
    </div>
  </section>
</template>
<style scoped lang="scss">
  .card-container {
    display: flex;
    flex-direction: column;
    gap: 0.75em;
    width: 100%;
    height: auto;
    padding: 1em;
    border-radius: 0.5em;
    border: 0.1875em solid lightgreen;
    &__price-btn-block {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  }
</style>
