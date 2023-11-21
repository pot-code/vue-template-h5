import type { HttpResponse } from '@/core/http'
import { useHttpClient } from '@/hooks/useHttpClient'

export default function useAuthApi() {
  const client = useHttpClient()
  return {
    login(data: LoginPayload) {
      return client.post<HttpResponse<UserLoginData>>('/auth/login', { data })
    },
    logout() {
      return client.post('/auth/logout')
    },
  }
}

export interface LoginPayload {
  username: string
  password: string
}

export interface UserLoginData {
  username: string
  roles: string[]
  token: string
}
