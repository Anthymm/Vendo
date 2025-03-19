<template>
  <section class="create_ad">
    <PageSelector :pages="pagesArray" />
    <RouterView />
  </section>
</template>

<script setup lang="ts">
import PageSelector from '@/components/PageSelector.vue'

const pagesArray = [
  { name: 'Bilder', page: 'images' },
  { name: 'Information', page: 'information' },
  { name: 'Granska', page: 'review' },
  { name: 'Lägg Ut', page: 'publish' },
]
</script>

<style>
.create_ad {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
