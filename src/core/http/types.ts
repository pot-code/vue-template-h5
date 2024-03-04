/**
 * HTTP 非分页数据，适配后端若依框架
 */
export interface HttpResponse<T = unknown> {
  code: number
  msg: string | null
  data: T
}

/**
 * HTTP 分页数据，适配后端若依框架
 */
export interface HttpPaginationResponse<T = unknown> {
  code: number
  msg: string | null
  total: number
  rows: T[]
}
