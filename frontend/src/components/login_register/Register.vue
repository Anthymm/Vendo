<template>
  <section class="user-register-container">
    <div class="user-register-header">Registrera</div>
    <div class="user-register-inputs">
      <label for="userEmail">Email:</label>
      <input type="text" id="userEmail" v-model="userEmail" />
      <label for="userUsername">Användarnamn:</label>
      <input type="text" id="userUsername" v-model="userUsername" />
      <label for="userPassword">Lösenord:</label>
      <input type="password" id="userPassword" v-model="userPassword" />
    </div>
    <div class="user-register-action">
      <button @click="registerUser">Registrera</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as helper from '../../helper'
import '../../styles/components/loginregister.scss'
import { useUserStore } from '@/stores/user'

const user = useUserStore()

const userPassword = defineModel('userPassword')
const userEmail = defineModel('userEmail')
const userUsername = defineModel('userUsername')

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
