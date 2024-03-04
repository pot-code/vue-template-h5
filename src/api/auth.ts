import type { HttpResponse } from '@/core/http'
import http from '@/core/http'

export const authApi = {
  login(payload: LoginPayload) {
    return http.post<HttpResponse<UserLoginData>>('/auth/login', payload)
  },
}

export interface LoginPayload {
  username: string
  password: string
}

export interface UserLoginData {
  access_token: string
}