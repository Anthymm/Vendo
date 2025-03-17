<template>
  <nav>
    Hej
    <RouterLink to="/">Ettan</RouterLink>
    <RouterLink to="/create_ad">Tvååan</RouterLink>
    <button @click="testBackend">Fetch</button>
  </nav>
  <section class="content-section" :style="{ minHeight: expanded, marginTop: topMargin }">
    <RouterView />
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

function testBackend() {
  fetch(':5432/api/user')
}

//Move content-section up and down
const expanded = ref('false')
const topMargin = ref('10vh')

watch(route, (oldVal, newVal) => {
  if (route.name) {
    if (route.name == 'create_ad') {
      expanded.value = '100vh'
      topMargin.value = '0vh'
    } else {
      expanded.value = '50vh'
      topMargin.value = '30vh'
    }
  }
})
//-----------------------------
</script>

<style scoped></style>
