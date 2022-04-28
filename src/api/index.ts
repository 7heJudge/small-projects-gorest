import axios from 'axios';

const rootApi = process.env.REACT_APP_API;
const token = process.env.REACT_APP_TOKEN;

const axiosInstance = axios.create({
  baseURL: rootApi,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
