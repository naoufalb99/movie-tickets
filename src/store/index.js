import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import moviesReducer from './movies'
import movieReducer from './movie'
import cartReducer from './cart'
import rootSaga from './rootSaga'

const reducers = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  cart: cartReducer
})

const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware]
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))

  const store = createStore(reducers, initialState, enhancer)
  sagaMiddleware.run(rootSaga)

  return store
}

const store = configureStore()

export { store as default, configureStore }
