<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="w-full p-4 mt-6 flex justify-center items-center">
    <h1 class="text-2xl">ContentionPRO <small class="text-sm">by AKAERIS & LUCAS</small></h1>
  </header>

  <main class="flex-grow">
    <RouterView />
  </main>
</template>