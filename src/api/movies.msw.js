import { BASE_API_URL } from 'constants/api'
import { rest } from 'msw'
import movies from '__mocks__/movies'

import { MOVIES_BASE_API_ENDPOINT } from './movies'

export const moviesHandlers = [
  rest.get(`${BASE_API_URL}${MOVIES_BASE_API_ENDPOINT}`, (_, res, ctx) => {
    return res(ctx.json(movies))
  }),

  rest.get(`${BASE_API_URL}${MOVIES_BASE_API_ENDPOINT}/:movieId`, (req, res, ctx) => {
    const { movieId } = req.params
    const movie = movies.find(({ id }) => movieId === id)

    if (!movie) {
      return res(
        ctx.status(404),
        ctx.json({
          code: 404,
          message: 'Movie not found.'
        }))
    }

    return res(ctx.json(movie))
  })
]
