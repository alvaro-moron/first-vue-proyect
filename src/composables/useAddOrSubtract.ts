import { ref } from 'vue'

export function useAddOrSubtract() {
  const counter = ref(0)

  function incrementNumber() {
    counter.value++
  }

  function decrementNumber() {
    counter.value--
  }

  return {
    counter,
    incrementNumber,
    decrementNumber,
  }
}
