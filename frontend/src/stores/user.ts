import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useListingStore } from './listing'

export const useUserStore = defineStore('user', () => {
  const loggedIn = ref(false)
  const userId = ref('')
  const username = ref('')
  const userImage = ref('')
  const userListings = ref([])
  const userSavedListings = ref([])
  function setUser(userIdInput: string, usernameInput: string, userimageInput: string | null) {
    userId.value = userIdInput
    username.value = usernameInput
    loggedIn.value = true
  }
  function logOut() {
    userId.value = ''
    username.value = ''
    userImage.value = ''
    userListings.value = []
    userSavedListings.value = []
    loggedIn.value = false
  }
  return { loggedIn, userId, username, userImage, setUser, logOut }
})
