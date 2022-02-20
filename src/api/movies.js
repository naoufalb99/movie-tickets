import fetcher from 'helpers/fetcher'

export const MOVIES_BASE_API_ENDPOINT = '/movies'

export const getMoviesRequest = () =>
  fetcher(`${MOVIES_BASE_API_ENDPOINT}`)

export const getMoviebyIdRequest = (id) =>
  fetcher(`${MOVIES_BASE_API_ENDPOINT}/${id}`)
