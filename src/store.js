import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        results: []
    },
    mutations: {
        updateResults(state, results) {
            state.results = results;
        },
        createCard(state, details) {
            state.details = details;
        }
    },
    actions: {
        async getMovie(context, url) {
            try {
              const response = await axios.get(url);
              context.commit('updateResults', response.data.Search);
            } catch (error) {
              console.error(error);
            }
        }
    }
});