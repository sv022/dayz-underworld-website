import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const steamID = ref(localStorage.getItem('steamID') || '')
  const username = ref(localStorage.getItem('username') || '')
  const profileURL = ref(localStorage.getItem('profileURL') || '')
  const isLoggedIn = ref(steamID.value !== '')

  function login(_steamID: string, _username: string, _profileURL: string) {
    isLoggedIn.value = true
    steamID.value = _steamID
    username.value = _username
    profileURL.value = _profileURL

    localStorage.setItem('steamID', _steamID)
    localStorage.setItem('username', _username)
    localStorage.setItem('profileURL', _profileURL)
  }

  function logout() {
    isLoggedIn.value = false
    steamID.value = ''
    username.value = ''
    profileURL.value = ''
  }

  return { isLoggedIn, steamID, username, profileURL, login, logout }
})
