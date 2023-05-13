import axios from 'axios';

const usuarioAxios = axios.create({
    //baseURL: 'http://34.123.205.43/'
    baseURL: 'http://localhost:5000'
})

export default usuarioAxios;