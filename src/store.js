import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  debug: true,
  state: {
    count: 0,
    isLoadingRequest: false,
    msg: '',
    isCredential: localStorage.getItem('credentials')
  },
  mutations: {
    increment (state, newValue) {
      state.count = newValue
    },
    isLoadingRequest (state, msg) {
      state.isLoadingRequest = !state.isLoadingRequest
      state.msg = msg
    },
    isCredential (state, value) {
      state.isCredential = value
    }
  },
  actions: {
    increment ({ commit }, newValue) {
      commit('increment', newValue)
    },
    isLoadingRequest ({ commit }, msg = '') {
      commit('isLoadingRequest', msg)
    },
    isCredential ({ commit }, value) {
      commit('isCredential', value)
    }
  }
})
