const createActionName = (name) => `auth/${name}`

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  token: null,
  user: null
}

export default (state = initialState, action) => {
  switch (state.type) {
    default:
      return state
  }
}

export const AUTH_ATTEMPT = createActionName('AUTH_ATTEMPT')
