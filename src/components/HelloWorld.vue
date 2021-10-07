<script setup lang="ts">
import { watch } from "vue";
import { useCounter } from "../composables/useCounter";
import { vm } from "../utils";

interface IMessage { msg?: string }

withDefaults(
  defineProps<IMessage>(),
  { msg: "This is the default message" }
);

defineEmits<{
  (e: "increment", count: number): void
}>();

const { count, next, increment } = useCounter();
const { emit } = vm();

watch(
  () => count.value,
  newVal => { newVal >= 5 && emit("increment", count.value) }
);
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>
    See
    <code>README.md</code>for more information.
  </p>

  <button
    type="button"
    @click="increment"
  >
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>{{ next }}</code>is the next result!
  </p>
</template>

<style lang="scss">
@import "../assets/styles/utils/_variables.scss";

button {
  background-color: $color--primary;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: darken($color--primary, 10%);
  }
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: $color--secondary;
}
</style>
