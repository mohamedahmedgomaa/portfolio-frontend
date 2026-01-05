<template>
  <section class="py-16 text-center space-y-4">
    <p class="text-zinc-400">404</p>
    <h1 class="text-3xl md:text-4xl font-bold">Page not found</h1>
    <p class="text-zinc-300 max-w-xl mx-auto">
      The page you’re looking for doesn’t exist (or was moved).
    </p>

    <div class="pt-3">
      <RouterLink
          to="/"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black text-sm font-medium"
      >
        Go Home →
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
