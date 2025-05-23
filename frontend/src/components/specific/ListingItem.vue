<template>
  <button
    :class="'v-' + expanded + '-item'"
    ref="listing"
    @click="
      (e) => {
        checkTarget(e.target)
      }
    "
  >
    <div
      v-if="expanded == 'nex'"
      :class="'v-' + expanded + '-item-image'"
      :style="{ backgroundImage: `url(${props.data.images[0]})` }"
    ></div>
    <Carousel v-else ref="carousel">
      <img v-for="(image, index) in props.data.images" :src="image" alt="" :key="index" />
    </Carousel>
    <div :class="'v-' + expanded + '-content-wrapper'">
      <div :class="'v-' + expanded + '-item-info'">
        <div :class="'v-' + expanded + '-item-info-name'">{{ props.data.title }}</div>
        <div :class="'v-' + expanded + '-item-info-price'">{{ props.data.price }}kr</div>
        <div :class="'v-' + expanded + '-item-info-misc'"></div>
      </div>
      <div :class="'v-' + expanded + '-item-description'">{{ props.data.description }}</div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import '../../styles/components/listingitem.scss'
import * as helper from '../../helper'
import Carousel from '../generic/Carousel.vue'

const listing = useTemplateRef('listing')
// const carousel = useTemplateRef('carousel')

const expanded = ref('nex')

interface Data {
  title: string
  price: number
  description: string
  images: string[]
}

const props = defineProps<{
  data: Data
}>()

function checkTarget(e: any) {
  if (e.classList.value.includes('nex')) {
    toggleExpanded()
  } else if (e.classList.value.includes('ex')) {
    toggleExpanded()
  }
}

function toggleExpanded() {
  if (expanded.value == 'nex') {
    expanded.value = 'ex'
  } else {
    expanded.value = 'nex'
  }
}
</script>
