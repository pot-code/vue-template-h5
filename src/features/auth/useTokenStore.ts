import { defineStore } from 'pinia'

const useTokenStore = defineStore('token', () => {
  const token = ref<string>()

  function setToken(data: string) {
    token.value = data
  }

  function clearToken() {
    token.value = undefined
  }

  return {
    token,
    setToken,
    clearToken,
  }
})

export default useTokenStore
