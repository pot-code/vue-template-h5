import http from '@/core/http'
import type { LoginPayload, UserLoginData } from './types'

export const authApi = {
  login(payload: LoginPayload) {
    return http.post<UserLoginData>('/auth/login', payload)
  },
}
