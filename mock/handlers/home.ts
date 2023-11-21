import { http, HttpResponse, type HttpHandler, delay } from 'msw'

export const handlers: HttpHandler[] = [
  http.get('/mock/home', async () => {
    await delay(500)
    return HttpResponse.json({
      code: 200,
      msg: null,
      data: null,
    })
  }),
]
