<template>
  <img :src="'/icons/' + props.icon + '.svg'" alt="" width="32px" height="32px" />
</template>

<script setup>
const props = defineProps({
  icon: String,
})
</script>
