import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://cart.test/api',
});

export default Api;

