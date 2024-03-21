import { authApi } from '@/api/auth'
import { useMutation } from '@tanstack/vue-query'
import useTokenStore from './useTokenStore'

export default function useLogout() {
  const { clear } = useTokenStore()

  function logout() {
    logoutMutate.mutate()
  }

  const logoutMutate = useMutation({
    mutationFn: authApi.logout,
    onSuccess: clear,
  })

  return { logout }
}
