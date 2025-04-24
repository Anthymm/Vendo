<template>
	<div class="carousel-wrapper">
		<button id="previous"><Icons icon="arrow-left"/></button>
		<div class="carousel" @scroll="onScroll()" ref="carousel">
			<div>HEJ</div>
			<div>HEJ2</div>
			<div>HEJ3</div>
			<div>HEJ4</div>
			<div>HEJ5</div>
		</div>
		<button id="next"><Icons icon="arrow-right"/></button>
	</div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import Icons from './Icons.vue'

const carousel = useTemplateRef("carousel")

const currentSlot = ref(0)

function checkSlot() {
	console.log(carousel.value)
}

function onScroll() {

}

</script>

<style scoped>
.carousel-wrapper {
	position: relative;
	display: flex;
	justify-content: center;
	width: 100%;
	height: 128px;
}

#previous, #next {
	position: absolute;
}

#previous {
	margin-right: 35%;
}

#next {
	margin-left: 35%;
}

.carousel {
	scroll-snap-type: x mandatory;
	display: flex;
	overflow-x: scroll;
	box-sizing: border-box;
	gap: 128px;
	width: 256px;
	height: 100%;
	padding-left: 50%;
	padding-right: 50%;
}

.carousel > div {
	min-width: 128px;
	height: 128px;
	background-color: red;
	scroll-snap-align: center;
}
</style>