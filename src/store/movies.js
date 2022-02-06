import { getMoviesRequest } from 'api/movies'
import { call, put, takeLatest } from 'redux-saga/effects'

const createActionName = (name) => `movies/${name}`

const initialState = {
  data: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        data: action.data,
        error: null
      }
    case FETCH_MOVIES_FAIL:
      return {
        error: action.error
      }
    default:
      return state
  }
}

export const fetchMoviesAction = () => ({ type: FETCH_MOVIES_START })
export const fetchMoviesSuccessAction = (data) => ({ type: FETCH_MOVIES_SUCCESS, data })
export const fetchMoviesFailAction = (error) => ({ type: FETCH_MOVIES_FAIL, error })

export const selectMovies = (state) => state.movies

export function * fetchMovies () {
  try {
    const movies = yield call(getMoviesRequest)
    yield put(fetchMoviesSuccessAction(movies))
  } catch (error) {
    yield put(fetchMoviesFailAction(error))
  }
}

export const FETCH_MOVIES_START = createActionName('FETCH_MOVIES_START')
export const FETCH_MOVIES_SUCCESS = createActionName('FETCH_MOVIES_SUCCESS')
export const FETCH_MOVIES_FAIL = createActionName('FETCH_MOVIES_FAIL')

export function * moviesRootSaga () {
  yield takeLatest(FETCH_MOVIES_START, fetchMovies)
}
