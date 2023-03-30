<template>
  <main class="prose">
    <ContentDoc :path="`articles/${slug}`" />
    hahahah
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = typeof route.params.slug === 'string' ? route.params.slug : route.params.slug.join('/')

onMounted(() => {
  console.log(slug)
})
</script>

<style scoped></style>
