import axios from 'axios';

const API = axios.create({
  baseURL: 'https://nextjs-login.netlify.app/api',
});

export default API;
