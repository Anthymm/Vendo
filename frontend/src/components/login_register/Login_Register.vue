<template>
  <component :is="components[type]"></component>
</template>

<script setup lang="ts">
import login from './Login.vue'
import register from './Register.vue'
import { useUserStore } from '../../stores/user'

const user = useUserStore()

const props = defineProps({
  type: {
    type: String,
    default: '',
  },
})

const components: any = {
  login,
  register,
}
</script>
