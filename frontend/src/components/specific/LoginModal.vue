<template>
  <Modal style="display: flex; justify-content: center; align-items: center">
    <section id="login-container" v-if="containerType == 'login'">
      <div class="login-header">Login</div>
      <div class="login-inputs">
        <input type="text" v-model="userIdentifier" />
        <input type="text" v-model="userPassword" />
      </div>
      <div class="login-action">
        <button @click="loginUser">Login</button>
      </div>
    </section>
    <section id="login-container" v-else="containerType == 'register'">
      <div class="login-header">Register</div>
      <div class="login-inputs">
        <input type="text" v-model="userEmail" />
        <input type="text" v-model="userUsername" />
        <input type="text" v-model="userPassword" />
      </div>
      <div class="login-action">
        <button @click="registerUser">Register</button>
      </div>
    </section>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import * as helper from '../../helper'
import Modal from '../generic/Modal.vue'
import '../../styles/loginmodal.scss'

const containerType = ref('login')
const userIdentifier = defineModel('userIdentifier')
const userPassword = defineModel('userPassword')
const userEmail = defineModel('userEmail')
const userUsername = defineModel('userUsername')

function registerUser() {
  fetch('/api/user', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({}),
  })
}

function loginUser() {
  let paramString = '?username=' + userIdentifier.value + '&password=' + userPassword.value
  let cb = helper.fetchApi('user', 'FETCH', paramString, null)
  console.log(cb)
}
</script>
