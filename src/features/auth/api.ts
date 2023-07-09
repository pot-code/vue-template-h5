import http from '@/core/http'
import type { LoginPayload, UserLoginData } from './types'
import type { HttpResponse } from '@/core/http/types'

export const authApi = {
  login(payload: LoginPayload) {
    return http.post<HttpResponse<UserLoginData>>('/auth/login', payload)
  },
  logout() {
    return http.post('/auth/logout')
  },
}
