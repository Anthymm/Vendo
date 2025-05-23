<template>
  <section class="user-register-container">
    <div class="user-register-header v-text-large">Registrera</div>
    <div class="user-register-inputs">
      <label for="userEmail" class="v-text-medium">Email:</label>
      <input type="text" id="userEmail" v-model="userEmail" class="v-text-input" />
      <label for="userUsername" class="v-text-medium">Användarnamn:</label>
      <input type="text" id="userUsername" v-model="userUsername" class="v-text-input" />
      <label for="userPassword" class="v-text-medium">Lösenord:</label>
      <input type="password" id="userPassword" v-model="userPassword" class="v-text-input" />
    </div>
    <div class="user-register-action">
      <button :disabled="disableButton" @click="registerUser" class="v-button v-text-medium">
        Registrera
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as helper from '../../helper'
import '../../styles/components/loginregister.scss'
import { useUserStore } from '@/stores/user'
import { computed } from 'vue'

const user = useUserStore()

const userPassword = defineModel('userPassword')
const userEmail = defineModel('userEmail')
const userUsername = defineModel('userUsername')

const disableButton = computed(() => {
  if (!userUsername.value || !userEmail.value || !userPassword.value) {
    return true
  }
})

function registerUser() {
  let postContent = {
    username: userUsername.value,
    password: userPassword.value,
    email: userEmail.value,
  }
  helper.fetchApi('user', 'POST', null, postContent).then((cb1) => {
    if (cb1.login) {
      let paramString = '?userIdentifier=' + userUsername.value + '&password=' + userPassword.value
      helper.fetchApi('user', 'FETCH', paramString, null).then((cb2) => {
        if (cb2.login) {
          user.setUser(cb2.userId, cb2.username, null)
        }
      })
    }
  })
}
</script>
