<template>
  <div v-if="showCarousel" class="v-carousel-wrapper">
    <button class="v-carousel-buttons-previous" @click=scrollTo(1)>
      <Icons icon="arrow-left" />
    </button>
    <div class="v-carousel" @scroll="handleScroll()" ref="carousel">
      <slot></slot>
    </div>
    <button class="v-carousel-buttons-next" @click="scrollTo(2)">
      <Icons icon="arrow-right" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef, onMounted, watch } from 'vue'
import Icons from './Icons.vue'
import '../../styles/components/carousel.scss'

const carousel = useTemplateRef('carousel')
const showCarousel = ref(true)
const amountOfSlots = ref(0)
const currentSlot = ref(0)
const amountScrolled = ref(0)

function checkSlotAmount() {
  amountOfSlots.value = carousel.value.children.length
}

function handleScroll() {
  if (carousel.value) {
    const slotWidth = carousel.value.scrollWidth / amountOfSlots.value;
    amountScrolled.value = Math.round(
      carousel.value.scrollLeft / slotWidth
    );
    currentSlot.value = amountScrolled.value + 1;
    if (currentSlot.value > amountOfSlots.value) {
      currentSlot.value = amountOfSlots.value;
    }
  }
}

async function waitForChildren() {
  await carousel.value.children
}

function toggleCarousel() {
  showCarousel.value = !showCarousel.value
}

function scrollTo(dir, initial) {
  if (initial) {
    carousel.value.children[1].scrollIntoView({
      behavior: "instant",
      inline: "center",
      block: "center",
    })
  } else {
    carousel.value.children[dir - 1].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    })
  }
}

watch(carousel, async () => {
  if (carousel.value) {
    await waitForChildren()
    checkSlotAmount()
    handleScroll()
    scrollTo(0, true)
  }
})
</script>
