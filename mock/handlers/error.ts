import { RestHandler, rest } from 'msw'

export const handlers: RestHandler[] = [
  rest.get('/mock/error', (_, res, ctx) =>
    res(
      ctx.delay(500),
      ctx.json({
        code: 500,
        msg: 'test error',
        data: null,
      }),
    ),
  ),
]
