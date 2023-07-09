import { defineStore } from 'pinia'
import type { UserLoginData } from './types'

export const useUserStore = defineStore('user', () => {
  const user = ref<UserLoginData>()
  const isAuthenticated = computed(() => !!user.value)

  function login(vo: UserLoginData) {
    user.value = vo
  }

  function logout() {
    user.value = undefined
  }

  return {
    isAuthenticated,
    user,
    login,
    logout,
  }
})
