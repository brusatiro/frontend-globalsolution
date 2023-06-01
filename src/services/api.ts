import axios from 'axios'
const api = axios.create({
    baseURL: 'https://backend-globalsolution.herokuapp.com'
})
export default api;