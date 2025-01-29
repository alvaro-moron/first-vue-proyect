<script lang="ts" setup>
  import { useAddOrSubtract } from '@/composables/useAddOrSubtract'
  import { computed } from 'vue'
  import TheButton from '@/components/TheButton.vue'

  const buttonIncrementText = 'Incrementar'
  const buttonDecrementText = 'Decrementar'

  const { counter, incrementNumber, decrementNumber } = useAddOrSubtract()

  const changeColor = computed(() => ({
    color: counter.value >= 10 ? 'lightgreen' : 'initial',
  }))
  const multiplyCounter = computed(() => counter.value * 2)
</script>
<template>
  <section class="cnt-container">
    <span :style="changeColor">{{ counter }}</span>
    <span>{{ `Número multiplicado por 2: ${multiplyCounter}` }}</span>
    <div class="cnt-container__buttons-container">
      <TheButton v-if="counter > 0" @click="decrementNumber">
        {{ buttonDecrementText }}
      </TheButton>
      <TheButton v-if="counter < 10" @click="incrementNumber">
        {{ buttonIncrementText }}
      </TheButton>
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
  }
</style>
