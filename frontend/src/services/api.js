import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333', //é a URL que é padrão para todas as chamadas
})

export default api;