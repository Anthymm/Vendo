import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useUserStore = defineStore('user', () => {
  const loggedIn = ref(false)
  const username = ref('pinia säger hej')
  const userImage = ref('')
  function setUsername(usernameInput: string) {
    username.value = usernameInput
  }
  function setUserImage(userImageInput: string) {
    userImage.value = userImageInput
  }
  return { loggedIn, username, userImage, setUsername, setUserImage }
})
