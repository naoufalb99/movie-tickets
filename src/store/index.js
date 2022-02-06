import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import moviesReducer from './movies'
import rootSaga from './rootSaga'

const reducers = combineReducers({
  movies: moviesReducer
})

const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware]
  const enhancers = applyMiddleware(...middlewares)

  const store = createStore(reducers, initialState, enhancers)
  sagaMiddleware.run(rootSaga)

  return store
}

const store = configureStore()

export { store as default, configureStore }
