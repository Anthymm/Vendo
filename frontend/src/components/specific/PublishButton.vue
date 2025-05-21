<template>
  <button id="publishButton" @click="publishListing">Publicera</button>
</template>

<script setup lang="ts">
import * as helper from '../../helper'

function publishListing() {
  helper.fetchApi('listings', 'POST', null, { cypress: 'test' })
}
</script>
