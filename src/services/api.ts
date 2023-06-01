import axios from 'axios'
import dotenv from 'dotenv';

dotenv.config();

const api = axios.create({
    baseURL: 'https://backend-globalsolution.herokuapp.com'
})

export default api;

