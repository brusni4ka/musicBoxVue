import * as types from '../mutation-types'

export default {
  [types.GENRES_REQUEST] (state) {
    state.isFetching = true,
    state.didInvalidate = false
  },
  [types.GENRES_RECEIVE] (state, payload) {
    state.isFetching = false,
    state.didInvalidate = false,
    state.list = payload
  },
  [types.GENRES_FAILURE] (state) {
    state.isFetching = false,
    state.didInvalidate = true
  },
}
