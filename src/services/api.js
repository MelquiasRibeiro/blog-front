import axios from 'axios';

 const API = axios.create({
  baseURL: 'https://desolate-woodland-69316.herokuapp.com',
})

export default API