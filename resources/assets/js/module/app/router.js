import Vue from 'vue'
import VueRouter from 'vue-router'

import axios from 'axios';
import store from './store';
import routes from '../../router/web'
import routesApp from '../../router/app'

Vue.use(VueRouter)

const Router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    routes: [...routes, ...routesApp],
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
        (to.name === 'listing' ?
            store.getters.getListing(to.params.listing_id) :
            store.state.listing.summaries.length > 0) ||
        to.name === 'login'
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
        serverData.authData.saved.forEach(id => store.commit('toggleSaved', id));
        next();
    }
});


export default Router
