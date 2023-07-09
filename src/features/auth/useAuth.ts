import { LocalStorage } from '@/core/storage/browser'
import { useMutation } from '@tanstack/vue-query'
import { isNil } from 'lodash-es'
import { authApi } from './api'
import { TokenStorage } from './token'
import type { LoginPayload } from './types'
import useTokenStore from './useTokenStore'

const tokenStorage = new TokenStorage('app-token', new LocalStorage())

export default function useAuth() {
  const { token, setToken, clearToken } = useTokenStore()
  const { mutate: loginMutate, isLoading: isLoggingIn } = useMutation(authApi.login, {
    onSuccess({ data: { data } }) {
      if (data) {
        setToken(data.token)
        tokenStorage.save(data.token)
      }
    },
  })
  const { mutate: logoutMutate, isLoading: isLoggingOut } = useMutation(authApi.logout, {
    onSuccess() {
      clearToken()
      tokenStorage.clear()
    },
  })

  function login(payload: LoginPayload) {
    loginMutate(payload)
  }

  function logout() {
    logoutMutate()
  }

  async function isAuthenticated() {
    const localToken = await tokenStorage.get()
    return !isNil(localToken) || !isNil(token)
  }

  onMounted(() => {
    tokenStorage.get().then((localToken) => {
      if (localToken) setToken(localToken)
    })
  })

  return {
    isLoggingIn,
    isLoggingOut,
    token,
    login,
    logout,
    isAuthenticated,
  }
}
