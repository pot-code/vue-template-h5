export interface LoginPayload {
  username: string
  password: string
}

export interface UserLoginData {
  username: string
  roles: string[]
  token: string
}
