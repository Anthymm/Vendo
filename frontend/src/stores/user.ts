import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useListingStore } from './listing'

export const useUserStore = defineStore('user', () => {
  const loggedIn = ref(false)
  const username = ref('')
  const userImage = ref('')
  const userListings = ref([])
  const userSavedListings = ref([])
  function setUsername(usernameInput: string) {
    username.value = usernameInput
    loggedIn.value = true
  }
  function setUserImage(userImageInput: string) {
    userImage.value = userImageInput
  }
  function logOut() {
    username.value = ''
    userImage.value = ''
    userListings.value = []
    userSavedListings.value = []
    loggedIn.value = false
  }
  return { loggedIn, username, userImage, setUsername, setUserImage, logOut }
})
