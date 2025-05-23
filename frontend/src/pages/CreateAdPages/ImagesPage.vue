<template>
  <section class="v-images-wrapper">
    <section class="v-images-imageGrid">
      <input
        type="file"
        v-for="(i, index) in 6"
        :key="'gridItem' + index"
        class="imageGrid-item"
        @change="
          (e) => {
            onChange(e, index)
          }
        "
      />
    </section>
  </section>
</template>

<script setup>
import '../../styles/pages/imagepage.scss'
import * as helper from '../../helper'
import { useListingStore } from '@/stores/listing'

const store = useListingStore()
const storedImages = store.getListing().value.images

async function onChange(e, index) {
  const cb = await helper.readFile(e)
  const storedImages = store.getListing().value.images
  const updatedImages = [...storedImages]
  updatedImages[index] = cb
  store.setListingImages(updatedImages)
}
</script>
