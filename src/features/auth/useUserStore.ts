import { defineStore } from 'pinia'
import type { UserInfoModel } from './types'

export const useUserStore = defineStore('user', () => {
  const user = ref<UserInfoModel>()
  const isAuthenticated = computed(() => !!user.value)

  function login(vo: UserInfoModel) {
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
