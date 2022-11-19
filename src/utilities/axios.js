import axios from 'axios';

const axiosInterceptor = axios.create();
axiosInterceptor.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) config.headers['authorization'] = token;
    return config;
  },
  (error) => Promise.reject(error)
);
export { axiosInterceptor };
