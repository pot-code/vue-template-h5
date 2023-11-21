import useTokenStore from '@/store/useTokenStore'
import { useMutation } from '@tanstack/vue-query'
import useAuthApi, { type LoginPayload } from './api'

export default function useAuth() {
  const router = useRouter()
  const authApi = useAuthApi()
  const { token, setToken, clearToken } = useTokenStore()
  const loginMutate = useMutation({
    mutationFn: authApi.login,
    onSuccess({ data }) {
      if (data) {
        setToken(data.token)
        router.push({ name: 'home' })
      }
    },
  })

  function login(payload: LoginPayload) {
    loginMutate.mutate(payload)
  }

  function logout() {
    clearToken()
  }

  return {
    isLoggingIn: loginMutate.isPending,
    token,
    login,
    logout,
  }
}
