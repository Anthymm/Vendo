<template>
  <button id="publishButton" @click="publishListing">Publicera</button>
  <Modal ref="modal"><div>Din annons har blivit publicerad</div></Modal>
</template>

<script setup lang="ts">
import * as helper from '../../helper'
import { useTemplateRef } from 'vue'
import Modal from '../generic/Modal.vue'

const modal = useTemplateRef('modal')

function publishListing() {
  helper.fetchApi('listings', 'POST', null, { cypress: 'test' })
  modal.value?.toggleModal()
}
</script>
