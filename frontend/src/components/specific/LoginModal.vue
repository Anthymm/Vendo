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
      <div class="login-inputs"></div>
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

function registerUser() {}

function loginUser() {
  fetch('/api/user?username=' + userIdentifier.value + '&password=' + userPassword.value)
}
</script>
