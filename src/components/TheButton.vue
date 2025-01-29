<script setup lang="ts"></script>
<template>
  <button class="button">
    <slot />
  </button>
</template>
<style scoped lang="scss">
  .button {
    width: fit-content;
    height: fit-content;
    background-color: lightgreen;
    padding: 0.5em;
    border-radius: 0.5em;
    cursor: pointer;
    transition: ease-in-out 0.2s;
    border: 0.125rem solid lightgreen;
  }
  .button:hover {
    background-color: transparent;
  }
</style>
