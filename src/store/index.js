import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchMovies: [],

  },
  mutations: {
    setMovies(state,payload){
      state.searchMovies = payload
    }
  },
  actions: {
    searchMovie: ({ commit }, payload) => {
      axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=d9fdf1b8&s='+ payload)
        .then((response)=> {
          if(response.data.totalResults){
            commit('setMovies', response.data.Search)
          }
        })
    }
  },
  modules: {
  }
})
