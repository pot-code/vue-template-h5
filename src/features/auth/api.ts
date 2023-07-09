import { client } from '@/core/http/axios'
import type { LoginPayload } from './types'

export const authApi = {
  login(payload: LoginPayload) {
    return client.post('/auth/login', payload)
  },
}
