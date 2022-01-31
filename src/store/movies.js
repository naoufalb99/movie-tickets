const initialState = {
  loading: false,
  data: []
}

const createActionName = (name) => `movies/${name}`

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const FETCH_MOVIES_START = createActionName('FETCH_MOVIES_START')
export const FETCH_MOVIES_SUCCESS = createActionName('FETCH_MOVIES_START')
export const FETCH_MOVIES_FAIL = createActionName('FETCH_MOVIES_START')
