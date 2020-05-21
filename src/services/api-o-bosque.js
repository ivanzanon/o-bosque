
import axios from 'axios';

const api_o_bosque = axios.create({
    baseURL: "http://localhost:3002/api"
})

export default api_o_bosque;