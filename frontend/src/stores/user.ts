import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const loggedIn = ref(false)
  const username = ref('')
  const userImage = ref('')
  const userPostedAds = ref([])
  const userSavedAds = ref([])
  function setUsername(usernameInput: string) {
	username.value = usernameInput
	loggedIn.value = true
  }
  function setUserImage(userImageInput: string) {
	userImage.value = userImageInput
  }
  return { loggedIn, username, userImage, setUsername, setUserImage }
})
