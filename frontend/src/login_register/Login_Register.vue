<template>
	<Modal style="display: flex; justify-content: center; align-items: center">
		<component :is="components[data?.type]"></component>
	</Modal>
  </template>
  
<script setup lang="ts">
import login from './Login.vue'
import register from './Register.vue'
import Modal from '../components/generic/Modal.vue'

const props = defineProps({
  data: Object,
})

const components: any = {
  login,
  register,
}

</script>
  