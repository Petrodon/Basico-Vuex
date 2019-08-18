import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vals: {
      name: 'Ernandes',
      msg: 'Olá'
    }
  },
  mutations: {
    addsr(state) {
      state.vals.name = 'Sr.' + state.vals.name
    }
  },
  actions: {

  },
  getters: {
    vls: state => state.vals
  }
})
