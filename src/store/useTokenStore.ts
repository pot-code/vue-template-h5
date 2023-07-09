import { LocalStorage } from '@/core/storage/browser'
import TokenCache from '@/core/token/cache'
import { isNil } from 'lodash-es'
import { defineStore } from 'pinia'

const tokenCache = new TokenCache('app-token', new LocalStorage())

export const useTokenStore = defineStore('token', () => {
  const token = ref<string>()

  function setToken(data: string) {
    token.value = data
    tokenCache.save(data)
  }

  function clearToken() {
    token.value = undefined
    tokenCache.clear()
  }

  async function loadTokenFromCache() {
    const cache = await tokenCache.get()
    if (!isNil(cache)) {
      setToken(cache)
    }
  }

  return {
    token,
    setToken,
    clearToken,
    loadTokenFromCache,
  }
})

export default useTokenStore
