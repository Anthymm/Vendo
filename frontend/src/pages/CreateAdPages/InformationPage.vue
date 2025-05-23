<template>
  <div class="v-info-wrapper">
    <label for="nameInput">Namn på annons:</label>
    <input type="text" id="nameInput" v-model="nameInput" />
    <label for="priceInput">Pris:</label>
    <input type="number" id="priceInput" v-model="priceInput" />
    <label for="descriptionInput">Beskrivning:</label>
    <textarea id="descriptionInput" ref="descriptionInput"></textarea>
    <button @click="saveListing">Spara</button>
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue'
import '../../styles/pages/informationpage.scss'
import { useListingStore } from '@/stores/listing'

const nameInput = defineModel<string>('nameInput')
const priceInput = defineModel<number>('priceInput')
const descriptionInput = useTemplateRef('descriptionInput')

const listing = useListingStore()

function saveListing() {
  listing.setListingTitle(nameInput.value ?? '')
  listing.setListingPrice(priceInput.value ?? 0)
  listing.setListingDescription(descriptionInput.value?.value ?? '')
}
</script>
