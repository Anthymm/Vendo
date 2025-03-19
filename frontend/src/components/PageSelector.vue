<template>
  <section class="pageButton-container">
    <RouterLink
      v-for="page in props.pages"
      class="pageButton"
      :style="[
        page.page == route.name
          ? { backgroundColor: 'gray', width: widthProcent }
          : { width: widthProcent },
      ]"
      :to="'/create_ad/' + page.page"
    >
      {{ page.name }}
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const widthProcent = ref('0')
const route = useRoute()

interface page {
  name: string
  page: string
}

const props = defineProps<{
  pages: page[]
}>()

onMounted(() => {
  if (props.pages) {
    widthProcent.value = (100 / props.pages.length).toString() + '%'
  }
})
</script>

<style scoped>
.pageButton {
  height: 100%;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
}

.pageButton:hover {
  background-color: darkgray;
}

.pageButton-container {
  width: 40vw;
  height: 5vh;
}
</style>
