import useTokenStore from '@/store/useTokenStore'
import { useMutation } from '@tanstack/vue-query'
import { authApi, type LoginPayload } from './api'

export default function useAuth() {
  const router = useRouter()
  const { token, setToken, clearToken } = useTokenStore()
  const loginMutate = useMutation(authApi.login, {
    onSuccess({ data }) {
      if (data) {
        setToken(data.token)
        router.push({ name: 'home' })
      }
    },
  })
  const logoutMutate = useMutation(authApi.logout, {
    onSuccess() {
      clearToken()
    },
  })

  function login(payload: LoginPayload) {
    loginMutate.mutate(payload)
  }

  function logout() {
    logoutMutate.mutate()
  }

  return {
    isLoggingIn: loginMutate.isLoading,
    isLoggingOut: logoutMutate.isLoading,
    token,
    login,
    logout,
  }
}
