import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        movieTitle: '',
        movieListOriginal: [],
        filteredMovies: []
    },
    mutations: {
        setMovieList(state, movieList) {
            console.log('mutation setMovieList:', movieList)
            if (movieList.Search) {
                state.movieListOriginal = movieList.Search;
                state.filteredMovies = movieList.Search;
            } else {
                state.movieListOriginal = [];
                state.filteredMovies = [];
            }
        },
        filterByTypes(state, item) {
            state.filteredMovies = state.movieListOriginal.slice();
            if (item.genre !== 'all') {
                state.filteredMovies = state.filteredMovies.filter(movie => {
                    console.log(item)
                    return movie.Type === item.genre
                })
            }
            console.log('filtered movies', state.filteredMovies);
        }
    },
    getters: {
        getMovieList(state) {
            console.log('inside getter',state.filteredMovies)
            return state.filteredMovies;
        },
        getMovieListOriginal(state) {
            return state.movieListOriginal;
        }

    },
    actions: {
        searchMovieTitle({
            commit
        }, movieToSearch) {
            console.log('fetching')
            fetch('http://www.omdbapi.com/?s=' + movieToSearch)
                .then(data => data.json())
                .then(data => commit('setMovieList', data));
        },

    }
})