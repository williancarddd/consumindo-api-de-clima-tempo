import axios from 'axios'

const api = axios.create(
  { //precisa do parametro query 
    baseURL:'http://api.weatherstack.com/'
  }
)

export {api}