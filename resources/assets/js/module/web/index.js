/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('../../bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import App from '../../layouts/App.vue';
import router from './router'
import store from './store';

import {
    HTTP
} from '../../library/api';

HTTP.interceptors.response.use(response => {
    return response
}, error => {
    if (!axios.isCancel(error)) {
        if (error.response.status === 401) {
            console.log('error 401')
            router.push('login')
        }
    }
    throw error
})

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
});
