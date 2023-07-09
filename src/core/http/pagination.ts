import type { HttpResponse } from './types'

export const DEFAULT_PAGINATION_SIZE = 10

export interface HttpPaginationResponse<T> extends HttpResponse<T[]> {
  total: number
}
