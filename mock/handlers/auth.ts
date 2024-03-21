import { HttpHandler, HttpResponse, delay, http } from 'msw'

export const handlers: HttpHandler[] = [
  http.post('/mock/auth/login', async () => {
    await delay(1000)
    return HttpResponse.json({
      code: 200,
      msg: null,
      data: {
        access_token: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
      },
    })
  }),
]
