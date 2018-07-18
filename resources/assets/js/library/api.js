import axios from 'axios'

export const HTTP = axios.create({
    baseURL: window.api_url,
    headers: {
        Authorization: localStorage.getItem('access_token')
    }
});

HTTP.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': window.csrf_token
};

export default {
    get(url) {
        return HTTP.get(url)
    },
    post(url, param) {
        return HTTP.post(url, param)
    }
};
