import { defineStore } from 'pinia'
import type { UserLoginData } from './api'

export const useUserStore = defineStore('user', () => {
  const user = ref<UserLoginData>()

  function setUser(data: UserLoginData) {
    user.value = data
  }

  return {
    user,
    setUser,
  }
})
