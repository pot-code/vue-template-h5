import http, { type HttpResponse } from '@/core/http'

export const helloApi = {
  hello: () => http.get<HttpResponse<string>>('/hello'),
}
