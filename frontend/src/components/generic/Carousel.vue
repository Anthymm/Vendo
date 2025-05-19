<template>
  <Transition @enter="scrollTo(0)">
    <div v-if="true" class="v-carousel-wrapper">
      <button class="v-carousel-buttons-previous">
        <Icons icon="arrow-left" />
      </button>
      <div class="v-carousel" @scroll="onScroll()" ref="carousel">
        <slot></slot>
      </div>
      <button class="v-carousel-buttons-next">
        <Icons icon="arrow-right" />
      </button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, useTemplateRef, onMounted } from 'vue'
import Icons from './Icons.vue'
import '../../styles/components/carousel.scss'

const carousel = useTemplateRef('carousel')
const showCarousel = ref(true)
var slots

const currentSlot = ref(0)

function checkSlot() {
}

function scrollTo(child) {
  carousel.value.children[child].scrollIntoView()
}

function onScroll() {
  console.log(carousel.value)
}

onMounted(() => {
  slots = carousel.value.children
})
</script>
