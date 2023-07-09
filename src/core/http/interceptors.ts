import error from '@/subjects/error'
import axios, { type AxiosResponse } from 'axios'
import { UnauthorizedError } from './error'

export function handleBusinessError(res: AxiosResponse) {
  const { code } = res.data
  if (code === 200) {
    return res
  }

  if (code === 401) {
    error.next(new UnauthorizedError())
  }
  return Promise.reject(res)
}

export function handleRejection(err: any) {
  if (axios.isCancel(err)) {
    return
  }

  if (err.response) {
    const { msg } = err.response.data
    error.next(new Error(msg))
  } else if (err.request) {
    error.next(new Error('服务器未响应'))
  } else if (err instanceof Error) {
    error.next(err)
  } else {
    error.next(new Error('未知错误'))
  }
  return Promise.reject(err)
}
