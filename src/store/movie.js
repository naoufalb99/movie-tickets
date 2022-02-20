import { getMoviebyIdRequest } from 'api/movies'
import { call, put, takeLatest } from 'redux-saga/effects'

const createActionName = (name) => `movie/${name}`

const initialState = {
  data: null,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_SUCCESS:
      return {
        data: action.data,
        error: null
      }
    case FETCH_MOVIE_FAIL:
      return {
        error: action.error
      }
    default:
      return state
  }
}

export const fetchMovieAction = (id) => ({ type: FETCH_MOVIE_START, id })
export const fetchMovieSuccessAction = (data) => ({ type: FETCH_MOVIE_SUCCESS, data })
export const fetchMovieFailAction = (error) => ({ type: FETCH_MOVIE_FAIL, error })

export const selectMovie = (state) => state.movie

export function * fetchMovie ({ id }) {
  try {
    const movie = yield call(getMoviebyIdRequest, id)
    yield put(fetchMovieSuccessAction(movie))
  } catch (error) {
    yield put(fetchMovieFailAction(error))
  }
}

export const FETCH_MOVIE_START = createActionName('FETCH_MOVIE_START')
export const FETCH_MOVIE_SUCCESS = createActionName('FETCH_MOVIE_SUCCESS')
export const FETCH_MOVIE_FAIL = createActionName('FETCH_MOVIE_FAIL')

export function * movieRootSaga () {
  yield takeLatest(FETCH_MOVIE_START, fetchMovie)
}
