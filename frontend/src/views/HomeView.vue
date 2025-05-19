<template>
  <ListingItem v-for="(i, index) in 20" :key="index" :images="['/images/missingImage.jpg']" />
</template>

<script setup lang="ts">
import ListingItem from '@/components/specific/ListingItem.vue'
</script>
