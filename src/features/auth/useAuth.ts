import useTokenStore from '@/store/useTokenStore'
import { useMutation } from '@tanstack/vue-query'
import { authApi, type LoginPayload } from './api'

export default function useAuth() {
  const { token, setToken, clearToken } = useTokenStore()
  const {
    mutate: loginMutate,
    isLoading: isLoggingIn,
    isSuccess: isLoginSuccess,
  } = useMutation(authApi.login, {
    onSuccess({ data }) {
      if (data) {
        setToken(data.token)
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
    isLoginSuccess,
    token,
    login,
    logout,
  }
}
