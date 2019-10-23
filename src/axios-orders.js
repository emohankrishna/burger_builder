import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sample-9999.firebaseio.com/'
});

export default instance;