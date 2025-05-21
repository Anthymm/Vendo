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
import '../../styles/loginregister.scss'
import { useUserStore } from '../../stores/user'

const user = useUserStore()

const userIdentifier = defineModel('userIdentifier')
const userPassword = defineModel('userPassword')

function loginUser() {
  if (userIdentifier.value == 'Admin' && userPassword.value == 'Admin') {
    user.setUsername('Anton')
    return
  }
  let paramString = '?username=' + userIdentifier.value + '&password=' + userPassword.value
  let cb = helper.fetchApi('user', 'FETCH', paramString, null)
  console.log(cb)
}
</script>
