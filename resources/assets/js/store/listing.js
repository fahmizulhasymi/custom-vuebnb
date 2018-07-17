// initial state
const state = {
    data: [],
    summaries: [],
    saved: [1, 15]
}

// getters
const getters = {
    savedSummaries(state) {
        return state.summaries.filter(
            item => state.saved.indexOf(item.id) > -1
        );
    },
    getListing(state) {
        return id => state.data.find(listing => id == listing.id);
    }
}

// actions
const actions = {}

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
    addData(state, {
        route,
        data
    }) {
        if (route === 'listing') {
            state.data.push(data.listing);
        } else {
            state.summaries = data.listings;
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
