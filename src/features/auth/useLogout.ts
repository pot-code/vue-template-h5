import useTokenStore from './useTokenStore'

export default function useLogout() {
  const { clear } = useTokenStore()

  function logout() {
    clear()
  }

  return { logout }
}
