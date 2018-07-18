import Vue from 'vue'
import Vuex from 'vuex'

import user from '../../store/user'
import listing from '../../store/listing'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user,
        listing
    }
})

export default store
