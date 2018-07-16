import Page from '../layouts/Page'
import HomePage from '../pages/Homepage'
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
            path: 'listing/:listing',
            component: ListingDetail
        }],
    },

    { // Always leave this as last one
        name: '404',
        path: '*',
        component: E404
    }
]
