import axios from 'axios';
import { parseCookies } from 'nookies';

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export default API;
