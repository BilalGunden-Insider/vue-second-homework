import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

const state = {
  movies: [],
  searchInput: '',
  movieData: {}
}

const getters = {
    movies: state => state.movies,
    movieData: state => state.movieData,
}

const mutations = {
    updateSearchInput(state, searchInput) {
        state.searchInput = searchInput;
    },
    updateMovies(state, movies) {
        state.movies = movies;
    },
    updateMovieData(state, movie) {
        state.movieData = movie;
    }
}

const actions = {
    getMovies( context , searchInput) {
        console.log('searchInput', searchInput);

        const MOVIE_DB_PATH = 'https://api.themoviedb.org/3/';
        const API_KEY = '8160cf4299239d7790a85e9231094f97';
        const query = searchInput ? `${ MOVIE_DB_PATH }/search/movie` : `${ MOVIE_DB_PATH }/discover/movie`;

        axios.get(query, {
            params: {
                api_key: API_KEY,
                query: searchInput
            }
            }).then(response => {
                context.commit('updateMovies', response.data.results);
            });
    },
    async getMovieFromId( context , movie_id) {
        const API_KEY = '8160cf4299239d7790a85e9231094f97';
        const query = `https://api.themoviedb.org/3/movie/${ movie_id }`;

        await axios.get(query, {
            params: {
                api_key: API_KEY
            }
            }).then(response => {
                context.commit('updateMovieData', response.data);
            });
    }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})