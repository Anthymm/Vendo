<template>
  <div class="v-carousel-wrapper">
    <button class="v-carousel-buttons-previous"><Icons icon="arrow-left" /></button>
    <div class="v-carousel" @scroll="onScroll()" ref="carousel">
      <slot></slot>
    </div>
    <button class="v-carousel-buttons-next"><Icons icon="arrow-right" /></button>
  </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import Icons from './Icons.vue'
import '../../styles/components/carousel.scss'

const carousel = useTemplateRef('carousel')

const currentSlot = ref(0)

function checkSlot() {
  console.log(carousel.value)
}

function onScroll() {}
</script>
