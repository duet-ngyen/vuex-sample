import axios from '../backend/vue-axios/axios.js'

const state = {
  list: [],
  newEntity: ''
}

const mutations = {
  GET_NEW_ENTITY(state, entity) {
    state.newEntity = entity
  },
  ADD_ENTITY (state) {
    console.log(state);
    axios.post('/entities',{
      entity: {
        name: state.newEntity
      }
    }).then(response => (state.list.push(response.data)))
    .catch( error => {
      console.log('duyet');
      console.error(error)
    })
  },
  SET_PROJECT_LIST: (state, { list }) => {
    state.list = list
  }
}

const actions = {
  getNewEntity ({commit}, entity){
    commit('GET_NEW_ENTITY', entity)
  },
  addEntity({commit}) {
    commit('ADD_ENTITY')
  },
  LOAD_ENTITY_LIST: function ({ commit }) {
    axios.get('/entities').then((response) => {
      commit('SET_PROJECT_LIST', { list: response.data })
    }, (err) => {
      console.log(err)
    })
  },
  getEntities ({commit}) {
    commit('GET_LIST_ENTITY')
  },
  SEARCH_ENTITY: function({ commit }, entity) {
    commit('SET_PROJECT_LIST', { list: state.list.filter(e => e.name.includes(entity)) });
  }
}

const getters = {
  newEntity: state => state.newEntity,
  entity_list: state => state.list
}

export default {
  state,
  mutations,
  getters,
  actions
}
