import { moviesHandlers } from 'api/movies.msw'
import { setupWorker } from 'msw'

export const worker = setupWorker(...[
  ...moviesHandlers
])
