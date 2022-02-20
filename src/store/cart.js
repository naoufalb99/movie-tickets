const createActionName = (name) => `cart/${name}`

const initialState = {
  movies: {},
  price: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE: {
      const { id, dayTimestamp, time } = action.payload
      return {
        ...state,
        movies: {
          ...state.movies,
          [id]: { dayTimestamp, time }
        }
      }
    }
    default:
      return state
  }
}

export const addMovieAction = (id, dayTimestamp, time) => ({ type: ADD_MOVIE, payload: { id, dayTimestamp, time } })

export const selectCart = (state) => state.cart
export const selectCartMovieById = (id) => (state) => selectCart(state).movies[id]

export const ADD_MOVIE = createActionName('ADD_MOVIE')
