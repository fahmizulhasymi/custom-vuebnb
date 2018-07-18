import Page from '../layouts/Page'
import HomePage from '../pages/Homepage'
import Login from '../pages/Login.vue';
import ListingDetail from '../pages/ListingDetail'
import E404 from '../pages/404'

export default [{
        path: '/',
        component: Page,
        children: [{
            name: 'home',
            path: '',
            component: HomePage
        }, {
            name: 'listing',
            path: 'listing/:listing_id',
            component: ListingDetail
        }, {
            name: 'login',
            path: 'login',
            component: Login
        }],
    },

    { // Always leave this as last one
        name: '404',
        path: '*',
        component: E404
    }
]
