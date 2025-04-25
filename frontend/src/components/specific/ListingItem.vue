<template>
	<button :class="'v-' + expanded + '-item'" ref="listing" 
	@click="(e) => {checkTarget(e.target)}">
		<div v-if="expanded == 'nex'" :class="'v-' + expanded + '-item-image'" :style="{backgroundImage: `url(${imageURL})`}"></div>
		<Carousel v-else ref="carousel"/>
		<div :class="'v-' + expanded + '-item-header'">
			<div :class="'v-' + expanded + '-item-header-name'">El Flöjt</div>
			<div :class="'v-' + expanded + '-item-header-price'">7000kr</div>
		</div>
		<div :class="'v-' + expanded + '-item-description'"></div>
	</button>

</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import '../../styles/components/listingitem.scss'
import * as helper from '../../helper'
import Carousel from '../generic/Carousel.vue';

const listing = useTemplateRef("listing")
const carousel = useTemplateRef("carousel")

const expanded = ref("nex")

const props = defineProps({
	imageURL: {
		type: String,
		default: "/images/missingImage.jpg"
	}
})

function checkTarget(e: any) {
	if (e.classList.value.includes("nex")) {
		toggleExpanded()
	} else if (carousel.value?.children?.contains(e)) {
		console.log(e)
	}
}

function toggleExpanded() {
	if (expanded.value == "nex") {
		expanded.value = "ex"
	} else {
		expanded.value = "nex"
	}
}
</script>