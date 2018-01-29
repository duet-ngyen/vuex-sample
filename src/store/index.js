import Vue from 'vue'
import Vuex from 'vuex'

import todo from './todo'
import entities from './entities'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todo,
    entities
  }
})
