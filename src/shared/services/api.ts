import axios from 'axios';

const api = axios.create({
  baseURL: './cars.json',
});

export default api;
