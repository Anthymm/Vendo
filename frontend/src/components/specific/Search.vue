<template>
  <div class="search-container">
    <input type="text" class="search-input" />
    <button><Icons icon="search" /></button>
  </div>
</template>

<script setup lang="ts">
import * as helper from '../../helper'
import Icons from '../generic/Icons.vue'
import '../../styles/components/search.scss'
</script>
