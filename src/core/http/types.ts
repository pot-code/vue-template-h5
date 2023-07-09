export interface HttpResponse<T> {
  code: number
  msg: string | null
  data?: T
}

export interface HttpPaginationResponse<T> {
  code: number
  msg: string | null
  total: number
  nextPage: number | undefined
  rows: T[]
}
