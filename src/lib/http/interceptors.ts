import { DEFAULT_PAGINATION_SIZE } from '@/config/pagination'
import { useUserStore } from '@/features/auth/useUserStore'
import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'
import { isNil } from 'lodash-es'
import { showNotify } from 'vant'
import { defaultTokenStorage } from '../token/storage'

export function appendAuthHeader(config: InternalAxiosRequestConfig) {
  const { headers } = config
  headers.set('Authorization', `Bearer ${defaultTokenStorage.retrieve()}`)
  return config
}

export function appendNextPage(res: AxiosResponse) {
  if (!isPaginationResponse(res)) {
    return res
  }

  const data = res.data
  const { page = 1, pageSize = DEFAULT_PAGINATION_SIZE } = res.config.params

  let nextPage = undefined
  if (data.total > page * pageSize) {
    nextPage = page + 1
  }

  res.data.nextPage = nextPage
  return res
}

export function handleBusinessError(res: AxiosResponse) {
  const { code } = res.data
  if (code === 200) {
    return res
  }

  if (code === 401) {
    const userStore = useUserStore()
    userStore.logout()
  }
  return Promise.reject(res)
}

export function unwrapResponse(res: AxiosResponse) {
  return res.data
}

export function handleRejection(error: any) {
  if (error.data) {
    const { msg } = error.data
    showNotify({ message: msg })
  } else if (error.request) {
    // 过滤被取消的请求
    if (!axios.isCancel(error)) {
      showNotify({
        message: '服务未找到',
      })
    }
  } else {
    showNotify({
      message: error.message,
    })
  }
  return Promise.reject(error)
}

function isPaginationResponse(res: AxiosResponse) {
  return !isNil(res.data) && !isNil(res.data.total)
}
