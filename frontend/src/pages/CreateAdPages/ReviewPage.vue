<template>
  <div class="v-review-wrapper">
    <ListingItem :data="computedObject" />
  </div>
</template>

<script setup lang="ts">
import '../../styles/pages/reviewpage.scss'
import { useListingStore } from '@/stores/listing'
import ListingItem from '@/components/specific/ListingItem.vue'
import { computed } from 'vue'

const store = useListingStore()
const listing = store.getListing().value

const computedObject = computed(() => {
  return {
    images: listing.images,
    title: listing.title,
    price: listing.price,
    description: listing.description,
  }
})
</script>
