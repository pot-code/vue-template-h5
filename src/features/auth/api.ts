import http from '@/core/http'
import type { HttpResponse } from '@/core/http/types'

export const authApi = {
  login(payload: LoginPayload) {
    return http.post<HttpResponse<UserLoginData>>('/auth/login', payload)
  },
  logout() {
    return http.post('/auth/logout')
  },
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
