import { ref, readonly, computed } from "vue";

export function useCounter() {
  const count = ref(0);
  const next = computed(() => count.value + 1);

  const increment = () => {
    count.value += 1;
  };

  return { count: readonly(count), next, increment };
}