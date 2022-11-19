import axios from 'axios';
import { axiosInterceptor } from '../utilities/axios';
import { baseUrl } from '../utilities/baseurl';

const routesUrl = {
  LOGIN: 'auth/login',
  REGISTER: 'auth/register',
  AUTH: 'auth',
};

export const loginService = async (body) => {
  const url = `${baseUrl}${routesUrl.LOGIN}`;
  try {
    return await axios.post(url, body);
  } catch (error) {
    throw error;
  }
};
export const registerService = async (body) => {
  const url = `${baseUrl}${routesUrl.REGISTER}`;
  try {
    return await axios.post(url, body);
  } catch (error) {
    throw error;
  }
};

export const authService = async () => {
  const url = `${baseUrl}${routesUrl.AUTH}`;
  const token = localStorage.getItem('accessToken');
  if (!token) return;
  try {
    return await axiosInterceptor.post(url);
  } catch (error) {
    throw error;
    // return `${error.message} ${error.response.statusText}`;
  }
};
