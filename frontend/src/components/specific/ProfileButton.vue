<template>
  <button
    class="profileButton"
    :style="{
      width: size,
      height: size,
      borderRadius: size,
      backgroundImage: `url(${image})`,
    }"
  ></button>
</template>

<script setup>
import '../../styles/components/profilebutton.scss'

const props = defineProps({
  size: {
    default: '64px',
    required: false,
  },
  image: {
    default: 'images/noProfilePicture.png',
    required: false,
  },
})
</script>
