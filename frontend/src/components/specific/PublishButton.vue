<template>
  <button id="publishButton" @click="publishListing">Publicera</button>
  <Modal ref="modal"><div v-if="displayStatus">Din annons har blivit publicerad</div></Modal>
</template>

<script setup lang="ts">
import * as helper from '../../helper'
import { useTemplateRef, computed, ref } from 'vue'
import { useListingStore } from '@/stores/listing'
import Modal from '../generic/Modal.vue'

const listingStore = useListingStore()
const listing = listingStore.getListing().value

const modal = useTemplateRef('modal')
const displayStatus = ref(true)

function publishListing() {
  if (disablePublish) {
    displayStatus.value = false
    return
  } else {
    displayStatus.value = true
  }
  helper.fetchApi('listings', 'POST', null, { cypress: 'test' })
  modal.value?.toggleModal()
}

const disablePublish = computed(async () => {
  if (listing.images == undefined || listing.description == '' || listing.title == '') {
    return true
  } else {
    return false
  }
})
</script>
