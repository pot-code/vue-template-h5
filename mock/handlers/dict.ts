import { rest } from 'msw'

const db = [
  { dictType: 'purevolume.com', dictLabel: 'Taitung Airport', dictValue: 0 },
  { dictType: 'purevolume.com', dictLabel: 'Rumbek Airport', dictValue: 1 },
  { dictType: 'purevolume.com', dictLabel: 'Brawley Municipal Airport', dictValue: 2 },
  { dictType: 'purevolume.com', dictLabel: 'Walter Bündchen Airport', dictValue: 3 },
  {
    dictType: 'kickstarter.com',
    dictLabel: 'John C. Munro Hamilton International Airport',
    dictValue: 0,
  },
  { dictType: 'kickstarter.com', dictLabel: 'Bouca Airport', dictValue: 1 },
  { dictType: 'kickstarter.com', dictLabel: 'Bauru - Arealva Airport', dictValue: 2 },
  { dictType: 'kickstarter.com', dictLabel: 'Miquelon Airport', dictValue: 3 },
  { dictType: 'twitter.com', dictLabel: 'Qualicum Beach Airport', dictValue: 0 },
  { dictType: 'twitter.com', dictLabel: 'Indulkana Airport', dictValue: 1 },
  { dictType: 'twitter.com', dictLabel: 'Zanesville Municipal Airport', dictValue: 2 },
  { dictType: 'twitter.com', dictLabel: 'Provincetown Municipal Airport', dictValue: 3 },
  { dictType: 'tumblr.com', dictLabel: 'Southeast Texas Regional Airport', dictValue: 0 },
  { dictType: 'tumblr.com', dictLabel: 'Machado Airport', dictValue: 1 },
  {
    dictType: 'tumblr.com',
    dictLabel: "Perugia San Francesco d'Assisi – Umbria International Airport",
    dictValue: 2,
  },
  { dictType: 'tumblr.com', dictLabel: 'Mombasa Moi International Airport', dictValue: 3 },
  { dictType: 'reddit.com', dictLabel: 'Taiping (Tekah) Airport', dictValue: 0 },
  { dictType: 'reddit.com', dictLabel: 'Federico Garcia Lorca Airport', dictValue: 1 },
  { dictType: 'reddit.com', dictLabel: 'Coatepeque Airport', dictValue: 2 },
]

export const handlers = [
  rest.get('/mock/system/dict/type/list', (_, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.json({
        code: 200,
        total: db.length,
        msg: null,
        rows: db,
      })
    )
  }),
]
