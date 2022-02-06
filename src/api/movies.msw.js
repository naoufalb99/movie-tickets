import { BASE_API_URL } from 'constants/api'
import { rest } from 'msw'
import movies from '__mocks__/movies'

import { MOVIES_BASE_API_ENDPOINT } from './movies'

export const moviesHandlers = [
  rest.get(`${BASE_API_URL}${MOVIES_BASE_API_ENDPOINT}`, (_, res, ctx) => {
    return res(ctx.json(movies))
  })
]
