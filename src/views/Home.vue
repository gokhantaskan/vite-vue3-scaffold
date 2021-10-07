<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "vue";
import HelloWorld from "../components/HelloWorld.vue";

const num = ref(0);

const incremented = (e: number) => { num.value = e };
</script>

<template>
  <img
    alt="Vue logo"
    src="@/assets/logo.png"
  >
  <HelloWorld
    :msg="num >= 5 ? 'Count >= 5' : undefined"
    @increment="incremented"
  />
</template>
