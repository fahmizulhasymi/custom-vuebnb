import Page from '../layouts/Page'
import SavedListing from '../pages/SavedListing.vue';

export default [{
        path: '/personal/',
        component: Page,
        children: [{
            name: 'saved',
            path: 'saved',
            component: SavedListing
        }],
    }
]
