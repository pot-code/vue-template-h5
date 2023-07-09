import { useMutation } from '@tanstack/vue-query'
import useTokenStore from '../../store/useTokenStore'
import { authApi } from './api'
import type { LoginPayload } from './types'
import { isNil } from 'lodash-es'

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
  const isAuthenticated = computed(() => !isNil(token))

  function login(payload: LoginPayload) {
    loginMutate(payload)
  }

  function logout() {
    logoutMutate()
  }

  return {
    isLoggingIn,
    isLoggingOut,
    isAuthenticated,
    token,
    login,
    logout,
  }
}
