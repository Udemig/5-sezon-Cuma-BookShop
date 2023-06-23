import axios from 'axios';


const api = () => {

  axios.defaults.baseURL = 'http://localhost:3005'
  // axios.get('/product').then(res=>console.log(res))
  

  return axios
}

export default api
