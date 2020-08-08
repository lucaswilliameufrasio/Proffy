import axios from 'axios'

const api = axios.create({
  baseURL: 'https://proffy-lucas.herokuapp.com'
})

export default api
