import { all } from 'redux-saga/effects'
import { moviesRootSaga } from './movies'

export default function * rootSaga () {
  yield all([
    moviesRootSaga()
  ])
}
