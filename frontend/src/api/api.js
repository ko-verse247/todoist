import axios from 'axios';

const url = process.env.NODE_ENV === 'production' ? process.env.API_URL : 'http://localhost:8000';

const instance = axios.create({
  baseURL: url,
});

export default instance;
