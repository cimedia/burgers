import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgers-2a511.firebaseio.com/'
});

export default instance;