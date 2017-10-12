import * as types from '../mutation-types'
import {isValidEmail} from '../helpers';
import * as LocalStorage from '../api';

export default {
  [types.REQUEST_LOGIN] (state) {
    state.isFetching = true,
    state.isAuthenticated = false,
    state.error = ''
    state.cred
  },
  [types.FETCH_USERS_REQUEST] (state) {
    state.isFetching = true
    state.error = ''
  },
  [types.FETCH_USERS_SUCCESS] (state, payload) {
    state.isFetching = false
    state.usersList = payload
  },
  [types.FETCH_USERS_FAILURE] (state, message) {
    state.fetching = false
    state.error = message
  }
}
