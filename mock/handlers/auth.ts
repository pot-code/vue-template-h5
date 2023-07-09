import { rest } from 'msw'

export const handlers = [
  rest.post('/mock/auth/login', (_, res, ctx) =>
    res(
      ctx.delay(500),
      ctx.json({
        code: 200,
        msg: null,
        data: {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg4NzkzNjIwNzI4MzIyIiwiaWF0IjoxNjYxNjUwMzY3LCJleHAiOjE2NjE3MjIzNjd9.Kw0_x1_0z-ZhkP_9Z6XjY4Z1v-5h_X_k-Wx8xjZ_qw',
        },
      }),
    ),
  ),
]
