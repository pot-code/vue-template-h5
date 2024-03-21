import { authApi, type LoginPayload } from '@/api/auth'
import router from '@/router'
import { useMutation } from '@tanstack/vue-query'
import useTokenStore from './useTokenStore'

export default function useLogin() {
  const { setToken } = useTokenStore()
  const loginMutate = useMutation({
    mutationFn: authApi.login,
    onSuccess({ data }) {
      if (data) {
        setToken(data.access_token)
        router.push({ name: 'home' })
      }
    },
  })

  function login(payload: LoginPayload) {
    return new Promise((res, rej) => {
      loginMutate.mutate(payload, {
        onSuccess: res,
        onError: rej,
      })
    })
  }

  return {
    isPending: loginMutate.isPending,
    login,
  }
}
