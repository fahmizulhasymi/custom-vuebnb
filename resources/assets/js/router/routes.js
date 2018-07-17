import Page from '../layouts/Page'
import HomePage from '../pages/Homepage'
import ListingDetail from '../pages/ListingDetail'
import SavedListing from '../pages/SavedListing.vue';
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
            name: 'saved',
            path: 'saved',
            component: SavedListing
        }],
    },

    { // Always leave this as last one
        name: '404',
        path: '*',
        component: E404
    }
]
