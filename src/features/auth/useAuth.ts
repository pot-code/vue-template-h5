import useTokenStore from '@/store/useTokenStore'
import { useMutation } from '@tanstack/vue-query'
import { authApi } from './api'
import type { LoginPayload } from './types'

export default function useAuth() {
  const router = useRouter()
  const { token, setToken, clearToken } = useTokenStore()
  const { mutate: loginMutate, isLoading: isLoggingIn } = useMutation(authApi.login, {
    onSuccess({ data: { data } }) {
      if (data) {
        setToken(data.token)
        router.push({ name: 'home' })
      }
    },
  })
  const { mutate: logoutMutate, isLoading: isLoggingOut } = useMutation(authApi.logout, {
    onSuccess() {
      clearToken()
    },
  })

  function login(payload: LoginPayload) {
    loginMutate(payload)
  }

  function logout() {
    logoutMutate()
  }

  return {
    isLoggingIn,
    isLoggingOut,
    token,
    login,
    logout,
  }
}
