<template>
  <section ref="modal" id="modal-backdrop" @click="(e: any) => checkTarget(e.target.id)">
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue'
import * as helper from '../../helper'

const modal = useTemplateRef('modal')

function checkTarget(target: string) {
  if (helper.compareTarget('modal-backdrop', target) && modal.value) {
    helper.closeModal()
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
