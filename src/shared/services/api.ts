import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.57:3000/api",
});

export default api;
