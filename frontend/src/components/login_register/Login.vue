<template>
  <section class="user-login-container">
    <div class="user-login-header v-text-large">Logga in</div>
    <div class="user-login-inputs">
      <label for="userIdentifier" class="v-text-medium">Användarnamn/Email</label>
      <input type="text" id="userIdentifier" v-model="userIdentifier" class="v-text-input" />
      <label for="userPassword" class="v-text-medium">Lösenord</label>
      <input type="text" id="userPassword" v-model="userPassword" class="v-text-input" />
    </div>
    <div class="user-login-action">
      <button :disabled="disableButton" @click="loginUser" class="v-button v-text-medium">
        Logga in
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as helper from '../../helper'
import '../../styles/components/loginregister.scss'
import { useUserStore } from '../../stores/user'
import { computed } from 'vue'

const user = useUserStore()

const userIdentifier = defineModel('userIdentifier')
const userPassword = defineModel('userPassword')

const disableButton = computed(() => {
  if (!userIdentifier.value || !userPassword.value) {
    return true
  }
})

async function loginUser() {
  let paramString = '?userIdentifier=' + userIdentifier.value + '&password=' + userPassword.value
  helper.fetchApi('user', 'FETCH', paramString, null).then((cb) => {
    if (cb.login == true) {
      user.setUser(cb.userId, cb.username, null)
    }
  })
}
</script>
