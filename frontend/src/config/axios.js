import axios from 'axios';

const usuarioAxios = axios.create({
    baseURL: 'http://localhost:5000'
})

export default usuarioAxios;