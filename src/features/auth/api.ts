import type { HttpResponse } from '@/core/http'
import useHttpClient from '@/hooks/useHttpClient'

export default function useAuthApi() {
  const { client } = useHttpClient()
  return {
    login(payload: LoginPayload) {
      return client.post<HttpResponse<UserLoginData>>('/auth/login', payload)
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
