<template>
	<Modal v-if="!user.loggedIn" style="display: flex; justify-content: center; align-items: center">
		<component :is="components[data?.type]"></component>
	</Modal>
  </template>
  
<script setup lang="ts">
import login from './Login.vue'
import register from './Register.vue'
import Modal from '../components/generic/Modal.vue'
import { useUserStore } from '../stores/user'

const user = useUserStore()

const props = defineProps({
  data: Object,
})

const components: any = {
  login,
  register,
}

</script>
  