<template>
  <nav>
    <div class="navChild-left v-text-large">
      <RouterLink to="/">Vendo</RouterLink>
    </div>
    <div class="navChild-center">
      <Search />
    </div>
    <div v-if="user.loggedIn" class="navChild-right">
      <RouterLink to="/create_ad"><Icons icon="add" /></RouterLink>
      <div class="v-text-medium">{{ user.username }}</div>
      <ProfileButton />
    </div>
    <div v-else class="navChild-right">
      <button class="v-button v-text-medium" @click="openLogin('login')">Logga In</button>
      <button class="v-button v-text-medium" @click="openLogin('register')">Registrera</button>
    </div>
  </nav>
  <section
    class="content-section"
    :style="{ minHeight: expanded, marginTop: topMargin, paddingTop: topPadding }"
  >
    <RouterView />
  </section>
  <Modal ref="modal"><Login_Register :type="loginType" /></Modal>
</template>

<script setup lang="ts">
import * as helper from './helper.ts'
import { useUserStore } from './stores/user'
import { computed, ref, useTemplateRef, watch } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import Modal from './components/generic/Modal.vue'
import Icons from './components/generic/Icons.vue'
import Login_Register from './components/login_register/Login_Register.vue'
import Search from './components/specific/Search.vue'
import ProfileButton from './components/specific/ProfileButton.vue'
import './styles/global/button.scss'
import './styles/global/text.scss'

const modal = useTemplateRef('modal')
const loginType = ref('')

const user = useUserStore()
const route = useRoute()
const router = useRouter()

watch(user, () => {
  if (user.loggedIn) {
    modal.value?.toggleModal()
  }
})

function openLogin(type: string) {
  loginType.value = type
  modal.value?.toggleModal()
}

//Move content-section up and down
const expanded = computed(() => (calcPath(10, '/create_ad') ? '100vh' : '50vh'))
const topMargin = computed(() => (calcPath(10, '/create_ad') ? '0' : '30vh'))
const topPadding = computed(() => (calcPath(10, '/create_ad') ? '15vh' : '0'))

function calcPath(endNum: number, slicedPath: string) {
  return route.path.slice(0, endNum) == slicedPath
}
//-----------------------------
</script>
