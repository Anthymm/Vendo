<template>
  <nav>
    <div class="navChild-left">
      <button><h1>Vendo</h1></button>
    </div>
    <div class="navChild-center">
      <input type="text" placeholder="Sök" />
      <Icons icon="search" />
    </div>
    <div class="navChild-right"></div>
  </nav>
  <section
    class="content-section"
    :style="{ minHeight: expanded, marginTop: topMargin, paddingTop: topPadding }"
  >
    <RouterView />
  </section>
  <LoginModal />
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LoginModal from './components/specific/LoginModal.vue'
import Icons from './components/generic/Icons.vue'

const route = useRoute()

//Move content-section up and down
const expanded = computed(() => (calcPath(10, '/create_ad') ? '100vh' : '50vh'))
const topMargin = computed(() => (calcPath(10, '/create_ad') ? '0' : '30vh'))
const topPadding = computed(() => (calcPath(10, '/create_ad') ? '15vh' : '0'))

function calcPath(endNum: number, slicedPath: string) {
  return route.path.slice(0, endNum) == slicedPath
}
//-----------------------------
</script>
