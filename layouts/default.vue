<template>
  <div class="h-screen bg-zinc-800 text-slate-100 select-none">
    <Navbar />
    <main class="max-w-[1000px] m-auto">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
