import Vue from 'vue'
import VueRouter from 'vue-router'

import axios from 'axios';
import store from '../store';
import routes from './routes'

Vue.use(VueRouter)

const Router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

Router.beforeEach((to, from, next) => {
    let serverData = JSON.parse(window.vuebnb_server_data);
    if (
        to.name === 'listing' ?
        store.getters.getListing(to.params.listing_id) :
        store.state.listing.summaries.length > 0
    ) {
        next();
    } else if (!serverData.path || to.path !== serverData.path) {
        axios.get(`/api${to.path}`).then(({
            data
        }) => {
            store.commit('addData', {
                route: to.name,
                data
            });
            next();
        });
    } else {
        store.commit('addData', {
            route: to.name,
            data: serverData
        });
        next();
    }
});


export default Router
