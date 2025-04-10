<template>
  <section class="imageGrid">
    <input
      type="file"
      v-for="(i, index) in 6"
      :key="'gridItem' + index"
      class="imageGrid-item"
      @change="checkFile"
    />
  </section>
</template>

<script setup>
import '../../styles/pages/imagepage.scss'

const checkFile = (event) => {
  const file = event.target.files[0]
  const el = event.target
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    el.style.backgroundImage = `url(${reader.result})`
  }
}
</script>
