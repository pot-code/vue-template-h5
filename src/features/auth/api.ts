import { client } from '@/lib/http/axios'
import { LoginPayload } from './types'

export const authApi = {
  login(payload: LoginPayload) {
    return client.post('/auth/login', payload)
  },
}
