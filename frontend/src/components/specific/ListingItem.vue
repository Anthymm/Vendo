<template>
	<button class="item-wrapper">
		<div class="item-image" :style="{backgroundImage: `url(${imageURL})`}"></div>
		<div class="item-header">
			<div class="item-header-name">El Flöjt</div>
			<div class="item-header-price">7000kr</div>
		</div>
		<div class="item-description"></div>
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