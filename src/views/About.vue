<template>
  <img
    alt="Vue logo"
    src="@/assets/logo.png"
  >
  <div>{{ text }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  setup() {
    const text = "About";

    return { text };
  },
});
</script>