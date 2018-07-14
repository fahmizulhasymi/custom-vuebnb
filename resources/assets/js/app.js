/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import "core-js/fn/object/assign";
require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
import { populateAmenitiesAndPrices } from './helpers';

let model = JSON.parse(window.vuebnb_listing_model);

model = populateAmenitiesAndPrices(model)
const app = new Vue({
    el: '#app',
    /*
    data: {
        title: 'Central Downtown Apartment with Amenities',
        address: 'No. 11, Song-Sho Road, Taipei City, Taiwan 105',
        about: 'Come and stay at this modern and comfortable apartment! My home is centrally located right in the middle' +
            ' of the downtown. Talk about convenience! Shops, stores, and other destination areas are nearby. \r\n\r\nFeel the ' +
            'warmth of the sun as there is plenty of natural light showers. The living room features tv, sofa, table, radio, ' +
            'and fan. There is free wi-fi with a fast internet speed. \r\n\r\nForgot shopping for breakfast staples? We provide ' +
            'eggs, bread, cereals, coffee, milk, tea and cookies. Enjoy cooking as my kitchen boasts full size appliances. The ' +
            'dining table is for four people. Need to wash your clothes? There is a washer and a dryer. We provide hampers, ' +
            'detergents, and clothing conditioner. \r\n\r\nIf you need to hit the gym, there is located at the fourth floor of ' +
            'the building. There is indoor spa and pool.',
        amenities: [{
                title: 'Wireless Internet',
                icon: 'fa-wifi'
            },
            {
                title: 'Pets Allowed',
                icon: 'fa-paw'
            },
            {
                title: 'TV',
                icon: 'fa-television'
            },
            {
                title: 'Kitchen',
                icon: 'fa-cutlery'
            },
            {
                title: 'Breakfast',
                icon: 'fa-coffee'
            },
            {
                title: 'Laptop friendly workspace',
                icon: 'fa-laptop'
            }
        ],
        prices: [{
                title: 'Per night',
                value: '$89'
            },
            {
                title: 'Extra people',
                value: 'No charge'
            },
            {
                title: 'Weekly discount',
                value: '18%'
            },
            {
                title: 'Monthly discount',
                value: '50%'
            }
        ],
        headerImageStyle: {
            'background-image': 'url(images/1/Image_1.jpg)'
        },
        contracted: true,
        modalOpen: false
    },
    */
    data: Object.assign(model, {
        headerImageStyle: {
            'background-image': `url(${model.images[0]})`
        },
        contracted: true,
        modalOpen: false
    }),
    methods: {
        escapeKeyListener(evt) {
            if (evt.keyCode === 27 && this.modalOpen) {
                this.modalOpen = false;
            }
        }
    },
    watch: {
        modalOpen() {
            var className = 'modal-open';
            if (this.modalOpen) {
                document.body.classList.add(className);
            } else {
                document.body.classList.remove(className);
            }
        }
    },
    created() {
        document.addEventListener('keyup', this.escapeKeyListener);
    },
    destroyed() {
        document.removeEventListener('keyup', this.escapeKeyListener);
    }
});
