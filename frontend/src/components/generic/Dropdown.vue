<template>
	<div class="v-dropdown" v-if="active" :style="{width: width}">
		<slot></slot>
	</div>
</template>

<script setup lang=ts>
import { ref } from 'vue'
import '../../styles/global/button.scss'
import '../../styles/components/dropdown.scss'

const active = ref(false)

const props = defineProps({
	width: {
		type: String
	}
})

function toggleActive() {
	active.value = !active.value
}

defineExpose({
	toggleActive
})

</script>