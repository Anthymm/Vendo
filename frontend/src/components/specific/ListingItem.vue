<template>
	<button class="v-item">
		<div class="v-item-image" :style="{backgroundImage: `url(${imageURL})`}"></div>
		<div class="v-item-header">
			<div class="v-item-header-name">El Flöjt</div>
			<div class="v-item-header-price">7000kr</div>
		</div>
		<div class="v-item-description"></div>
	</button>
</template>

<script setup lang="ts">
import '../../styles/components/listingitem.scss'

const props = defineProps({
	imageURL: {
		type: String,
		default: "/images/missingImage.jpg"
	}
})
</script>