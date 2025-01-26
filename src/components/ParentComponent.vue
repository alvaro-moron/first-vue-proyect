<script setup lang="ts">
  import { provide, ref } from 'vue'
  import ChildComponent from '@/components/ChildComponent.vue'
  const title = 'Soy el padre'
  const msg = ref('')
  const otherMsg = ref('')
  type info = {
    message: string
  }

  function receiveSayHi(dataReceive: info) {
    msg.value = `Información recibida del hijo: ${dataReceive.message}`
  }

  const message = ref('Hola usando provide e inject')
  provide('message', message)
</script>
<template>
  <section class="container-parent">
    <h2>{{ title }}</h2>
    <ChildComponent
      @say-hi="receiveSayHi"
      @say-hi-faster="
        (infoReceive: string) =>
          (otherMsg = `Información recibida del hijo: ${infoReceive}`)
      "
    />
    <p v-if="msg" class="container-parent__info">{{ msg }}</p>
    <p v-if="otherMsg" class="container-parent__info">{{ otherMsg }}</p>
  </section>
</template>
<style scoped lang="scss">
  .container-parent {
    margin: 2em 0;
    background-color: lightcoral;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__info {
      margin: 2em auto;
    }
  }
</style>
