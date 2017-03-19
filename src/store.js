import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        movieTitle: '',
        movieListOriginal: [],
        filteredMovies: [],
        filtersObj: {}
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
        filterItems(state) {
            console.log('filtering movies')
            state.filteredMovies = state.movieListOriginal.slice();
            let filters = Object.keys(state.filtersObj);

            state.filteredMovies = state.filteredMovies.reduce((items, item) => {
                let passedAllFilters = true;
                for (var i = 0; i < filters.length; i++) {
                    if (!state.filtersObj[filters[i]].has(item[filters[i]])) {
                        passedAllFilters = false;
                        break;
                    }
                }
                if (passedAllFilters) {
                    items.push(item)

                }
                return items
            }, []);
            // commit({type:'filterItems'})
        },
        changeFilters(state, event) {
            console.log('filtersObj', state.filtersObj)
            if (!event.item.checked) {
                // remove item that already exists
                state.filtersObj[event.item.propType].delete(event.item.value)
            } else { // item and or filter type needs to be added
                if (state.filtersObj[event.item.propType]) {
                    state.filtersObj[event.item.propType].add(event.item.value)
                } else {
                    state.filtersObj[event.item.propType] = new Set();
                    state.filtersObj[event.item.propType].add(event.item.value)
                }
            }
            console.log('filtersObj', state.filtersObj)

        }
    },
    getters: {
        getMovieList(state) {
            console.log('inside getter', state.filteredMovies)
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