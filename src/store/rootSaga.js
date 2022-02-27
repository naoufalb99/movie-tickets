import { all } from 'redux-saga/effects'
import { moviesRootSaga } from './movies'
import { movieRootSaga } from './movie'
import { cartRootSaga } from './cart'

export default function * rootSaga () {
  yield all([
    moviesRootSaga(),
    movieRootSaga(),
    cartRootSaga()
  ])
}
