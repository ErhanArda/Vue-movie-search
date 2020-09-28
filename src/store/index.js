import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchMovies: [],
    isLoading: false,
    favorites:[]

  },
  mutations: {
    SET_MOVIES(state,payload){
      state.searchMovies = payload
    },
    SET_LOADING(state,loadingStatus){
      state.isLoading = loadingStatus
    },
    SET_FAVORITE(state,movie){
      state.favorites.push(movie)
    },
    REMOVE_FAVORITE(state,movie){
      const index = state.favorites.findIndex((item)=> item.imdbID === movie.imdbID)
      state.favorites.splice(index,1)
    }

  },
  actions: {
    searchMovie: ({ commit }, payload) => {
      commit('SET_LOADING',true)
      axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=d9fdf1b8&s='+ payload)
        .then((response)=> {
          commit('SET_LOADING',false)
          if(response.data.totalResults){
            commit('SET_MOVIES', response.data.Search)
          }
          // else{
          //   window.vueInstance.$bvToast.toast(response.data.Error,{
          //     title: 'Error'
          //   })
          // }
        })
    }
  },
})
