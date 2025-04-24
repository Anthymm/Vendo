<template>
  <button
    class="v-profilebutton"
    :style="{
      width: size,
      height: size,
      borderRadius: size,
      backgroundImage: `url(${image})`,
    }"
    @click="dropdown.toggleActive"
  >
  <Dropdown ref="dropdown" :width="size">
    <ul class="v-dropdown-list">
			<button class="v-dropdown-list-button">Profil</button>
			<button class="v-dropdown-list-button">Logga Ut</button>
		</ul>
  </Dropdown>
  </button>
</template>

<script setup>
import Dropdown from '../generic/Dropdown.vue';
import '../../styles/components/profilebutton.scss'
import '../../styles/global/button.scss'
import { useTemplateRef } from 'vue';

const dropdown = useTemplateRef("dropdown")

const props = defineProps({
  size: {
    default: '64px',
    required: false,
  },
  image: {
    default: 'images/noProfilePicture.png',
    required: false,
  },
})
</script>
