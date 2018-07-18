// initial state
const state = {
    data: [],
    summaries: []
}

// getters
const getters = {
    getListing(state) {
        return id => state.data.find(listing => id == listing.id);
    }
}

// actions
const actions = {}

// mutations
const mutations = {
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
