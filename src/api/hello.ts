import http from '@/core/http'

export const helloApi = {
  hello: () => http.get<HttpResponse<string>>('/hello'),
}
