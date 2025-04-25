<template>
  <section class="imageGrid">
    <input
      type="file"
      v-for="(i, index) in 6"
      :key="'gridItem' + index"
      class="imageGrid-item"
      @change="(e) => {e.target.style.backgroundImage = `url(${helper.getFile(e)})`}"
    />
  </section>
</template>

<script setup>
import '../../styles/pages/imagepage.scss'
import * as helper from '../../helper'
</script>
