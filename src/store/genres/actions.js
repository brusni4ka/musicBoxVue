import * as types from '../mutation-types.js'
import * as Api from '../../api'
import { responseToGenres } from '../../helpers/responseToGenres'

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  fetchGenres ({ commit }, genre) {
    commit(types.GENRES_REQUEST)
    return axios.get(Api.getGenresList())
      .then(response => {
        if (response.status === 200) {
          return response.data
        } else {
          const error = response.message
          throw new Error(error)
        }
      })
      .then(data => {
        let genres = responseToGenres(data, 10)
        commit(types.GENRES_RECEIVE, genres)
      }, error => {
        commit(types.GENRES_FAILURE, error)
        throw error
      })
  }
}
