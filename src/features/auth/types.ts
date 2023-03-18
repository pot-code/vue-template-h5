export interface LoginPayload {
  username: string
  password: string
}

export interface UserInfoModel {
  username: string
  roles: string[]
  permissions: string[]
}
