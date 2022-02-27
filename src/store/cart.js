import { takeLatest } from 'redux-saga/effects'

const createActionName = (name) => `cart/${name}`

// const initialState = {
//   movies: {},
//   price: 0
// }

const initialState = {
  movies: {
    '3f531ce1-7923-4e90-b1e1-108167ba9f09': {
      dayTimestamp: 1644940867146,
      time: '3:30 PM'
    }
  },
  price: 80
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE: {
      const { id, dayTimestamp, time, price } = action.payload
      return {
        ...state,
        movies: {
          ...state.movies,
          [id]: { dayTimestamp, time }
        },
        price: state.price + (state.movies[id] === undefined ? price : 0)
      }
    }
    default:
      return state
  }
}

export const addMovieAction = (id, dayTimestamp, time, price) => ({ type: ADD_MOVIE, payload: { id, dayTimestamp, time, price } })
export const createReservationAction = (payload) => ({ type: CREATE_RESERVATION_START, payload })

export const selectCart = (state) => state.cart
export const selectCartMovieById = (id) => (state) => selectCart(state).movies[id]

function * createReservation ({ payload }) {
  // TODO:
  // console.log(payload)
}

export const ADD_MOVIE = createActionName('ADD_MOVIE')
export const CREATE_RESERVATION_START = createActionName('CREATE_RESERVATION_START')
export const CREATE_RESERVATION_SUCCESS = createActionName('CREATE_RESERVATION_SUCCESS')
export const CREATE_RESERVATION_FAIL = createActionName('CREATE_RESERVATION_FAIL')

export function * cartRootSaga () {
  yield takeLatest(CREATE_RESERVATION_START, createReservation)
}
