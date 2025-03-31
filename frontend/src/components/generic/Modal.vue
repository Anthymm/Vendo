<template>
  <section
    v-if="displayModal"
    ref="modal"
    id="modal-backdrop"
    @click="(e) => closeModal(e.target.id)"
  >
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import * as helper from '../../helper'

const displayModal = ref(true)
const modal = useTemplateRef('modal')

function toggleModal() {
  displayModal.value = !displayModal.value
}

function closeModal(target: string) {
  if (helper.compareTarget('modal-backdrop', target) && modal.value) {
    toggleModal()
  }
}
</script>

<style scoped>
#modal-backdrop {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
