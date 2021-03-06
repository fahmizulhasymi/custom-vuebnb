import api from '../library/api';

// initial state
const state = {
    saved: [],
    auth: false
}

// getters
const getters = {
    savedSummaries(state, getters, rootState) {
        return rootState.listing.summaries.filter(
            item => state.saved.indexOf(item.id) > -1
        );
    }
}

// actions
const actions = {
    toggleSaved({
        commit,
        state
    }, id) {
        api.post('/user/toggle_saved', {
            id
        }).then(
            () => commit('toggleSaved', id)
        );
    },
}

// mutations
const mutations = {
    toggleSaved(state, id) {
        let index = state.saved.findIndex(saved => saved === id);
        if (index === -1) {
            state.saved.push(id);
        } else {
            state.saved.splice(index, 1);
        }
    },
    setAuth(state, isAuthenticated) {
        state.auth = isAuthenticated;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
