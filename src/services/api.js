import axios from 'axios';

const api = axios.create({
    baseURL: 'https://todo-back-fullstack.herokuapp.com'
});

export default api;