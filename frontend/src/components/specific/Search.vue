<template>
  <div class="v-search">
    <input type="text" class="v-search-input" placeholder="Sök" />
    <button class="v-search-button"><Icons icon="search" /></button>
  </div>
</template>

<script setup lang="ts">
import Icons from '../generic/Icons.vue'
import '../../styles/components/search.scss'
</script>
