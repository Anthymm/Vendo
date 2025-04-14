<template>
  <nav>
    <div class="navChild-left">
      <button><h1>Vendo</h1></button>
    </div>
    <div class="navChild-center">
      <Search />
    </div>
    <div v-if="user.loggedIn" class="navChild-right">
      {{ user.username }}
      <ProfileButton />
    </div>
    <div v-else class="navChild-right">
      <button
        @click="
          () => {
            helper.openModal(Login_Register, { type: 'login' })
          }
        "
      >
        Logga In
      </button>
      <button
        @click="
          () => {
            helper.openModal(Login_Register, { type: 'register' })
          }
        "
      >
        Registrera
      </button>
    </div>
  </nav>
  <section
    class="content-section"
    :style="{ minHeight: expanded, marginTop: topMargin, paddingTop: topPadding }"
  >
    <RouterView />
  </section>
</template>

<script setup lang="ts">
import * as helper from './helper.ts'
import { useUserStore } from './stores/counter'
import { ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Login_Register from './login_register/Login_Register.vue'
import Search from './components/specific/Search.vue'
import ProfileButton from './components/specific/ProfileButton.vue'

const user = useUserStore()
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
