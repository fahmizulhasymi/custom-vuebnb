import Vue from 'vue'
import Vuex from 'vuex'

import listing from './listing'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        listing
    }
})

export default store
