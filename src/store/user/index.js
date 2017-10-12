import actions from './actions'
import mutations from './mutations'

const state = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token') ? true : false,
  errorMessage:'',
  user: null
}

export default {
  state,
  actions,
  mutations
}
