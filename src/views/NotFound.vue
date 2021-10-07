<script setup lang="ts"></script>

<template>
  <h1>404</h1>
  <p>
    <code>Not Found</code>
  </p>

  <button
    type="button"
    @click="$router.push({ name: 'Home' })"
  >
    Return Home
  </button>
</template>
