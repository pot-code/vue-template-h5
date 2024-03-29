import { isEmpty } from 'lodash-es'
import { defineStore } from 'pinia'
import { LocalCache, BrowserLocalStorage } from '@/core/cache'

export const tokenCache = new LocalCache<string>('app:auth-token', new BrowserLocalStorage())

const useTokenStore = defineStore('token', () => {
  const token = ref()
  const isAuthenticated = computed(() => !isEmpty(token.value))

  function setToken(t: string) {
    tokenCache.set(t)
    token.value = t
  }

  function clear() {
    token.value = ''
    tokenCache.clear()
  }

  async function loadTokenFromCache() {
    const cache = await tokenCache.get()
    if (cache) {
      setToken(cache)
    }
    return cache
  }

  return { isAuthenticated, token, clear, setToken, loadTokenFromCache }
})

export default useTokenStore
