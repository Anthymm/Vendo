<template>
  <section class="user-login-container">
    <div class="user-login-header">Logga in</div>
    <div class="user-login-inputs">
      <label for="userIdentifier">Användarnamn/Email</label>
      <input type="text" id="userIdentifier" v-model="userIdentifier" />
      <label for="userPassword">Lösenord</label>
      <input type="text" id="userPassword" v-model="userPassword" />
    </div>
    <div class="user-login-action">
      <button @click="loginUser">Logga in</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as helper from '../../helper'
import '../../styles/components/loginregister.scss'
import { useUserStore } from '../../stores/user'

const user = useUserStore()

const userIdentifier = defineModel('userIdentifier')
const userPassword = defineModel('userPassword')

async function loginUser() {
  let paramString = '?userIdentifier=' + userIdentifier.value + '&password=' + userPassword.value
  helper.fetchApi('user', 'FETCH', paramString, null).then((cb) => {
    if (cb.login == true) {
      user.setUsername(cb.username)
    }
  })
}
</script>
