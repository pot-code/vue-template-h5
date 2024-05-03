import router from '@/router'
import { useMutation } from '@tanstack/vue-query'
import useTokenStore from './useTokenStore'
import { AuthService, type PostAuthLoginData } from '@/gen/api'

export default function useLogin() {
  const { setToken } = useTokenStore()
  const loginMutate = useMutation({
    mutationFn: AuthService.postAuthLogin,
    onSuccess({ data }) {
      if (data) {
        setToken(data)
        router.push({ name: 'home' })
      }
    },
  })

  function login(payload: PostAuthLoginData) {
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
