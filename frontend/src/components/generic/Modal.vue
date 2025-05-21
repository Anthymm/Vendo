<template>
  <section
    v-if="modalOpen"
    ref="modal"
    id="modal-backdrop"
    @click="(e: any) => checkTarget(e.target.id)"
  >
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import * as helper from '../../helper'
import '../../styles/components/modal.scss'

const modal = useTemplateRef('modal')
const modalOpen = ref(false)

function toggleModal() {
  modalOpen.value = !modalOpen.value
}

function checkTarget(target: string) {
  if (helper.compareTarget('modal-backdrop', target) && modal.value) {
    toggleModal()
  }
}

defineExpose({
  toggleModal,
})
</script>
