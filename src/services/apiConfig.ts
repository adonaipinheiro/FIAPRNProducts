import Axios from 'axios';

const API = Axios.create({
  baseURL: 'https://fiap-reactjs-presencial.herokuapp.com',
});

export default API;
