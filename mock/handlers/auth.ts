import { HttpHandler, HttpResponse, delay, http } from 'msw'

export const handlers: HttpHandler[] = [
  http.post('/mock/auth/login', async () => {
    await delay(500)
    return HttpResponse.json({
      code: 200,
      msg: null,
      data: 'token',
    })
  }),
]
