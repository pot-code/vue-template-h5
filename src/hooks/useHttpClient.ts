import http, { HttpError } from '@/core/http'
import useTokenStore from '@/features/auth/useTokenStore'
import { showNotify } from 'vant'

interface PostParams {
  data?: any
  queries?: any
}

interface GetParams {
  params?: any
  signal?: AbortSignal
}

export function useHttpClient() {
  function onCatch(err: HttpError) {
    showNotify({ type: 'danger', message: err.message })
  }

  return {
    async post<T = any>(url: string, params?: PostParams) {
      return http.post<T>(url, params?.data, { params: params?.queries }).catch((err: HttpError) => {
        onCatch(err)
        throw err
      })
    },
    async get<T = any>(url: string, params?: GetParams) {
      return http.get<T>(url, params).catch((err: HttpError) => {
        onCatch(err)
        throw err
      })
    },
    async put<T = any>(url: string, params?: PostParams) {
      return http.put<T>(url, params?.data, { params: params?.queries }).catch((err: HttpError) => {
        onCatch(err)
        throw err
      })
    },
    async delete<T = any>(url: string, params?: any) {
      return http.delete<T>(url, { params }).catch((err: HttpError) => {
        onCatch(err)
        throw err
      })
    },
  }
}

export function useAuthorizedHttpClient() {
  const router = useRouter()
  const { token, clearToken } = useTokenStore()

  function onCatch(err: HttpError) {
    showNotify({ type: 'danger', message: err.message })
    if (err.code === 401) {
      clearToken()
      router.push({ name: 'login' })
    }
  }
  return {
    async post<T = any>(url: string, params?: PostParams) {
      return http
        .post<T>(url, params?.data, {
          params: params?.queries,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .catch((err: HttpError) => {
          onCatch(err)
          throw err
        })
    },
    async get<T = any>(url: string, params?: GetParams) {
      return http
        .get<T>(url, {
          ...params,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .catch((err: HttpError) => {
          onCatch(err)
          throw err
        })
    },
    async put<T = any>(url: string, params?: PostParams) {
      return http
        .put<T>(url, params?.data, {
          params: params?.queries,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .catch((err: HttpError) => {
          onCatch(err)
          throw err
        })
    },
    async delete<T = any>(url: string, params?: any) {
      return http
        .delete<T>(url, {
          params,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .catch((err: HttpError) => {
          onCatch(err)
          throw err
        })
    },
  }
}
