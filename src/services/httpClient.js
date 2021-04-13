import Axios from 'axios';

import { API_ENDPOINT } from 'constants/app-env.constant';
import { COOKIE_KEYS, getCookie } from 'utils/api-request.util';

export const REQUEST_TIMEOUT = 200000;

const axiosInstance = Axios.create({
  baseURL: API_ENDPOINT/* ,
  timeout: REQUEST_TIMEOUT */
});

axiosInstance.interceptors.request.use(function (config) {
  const userToken = getCookie(COOKIE_KEYS.ACCESS_TOKEN);

  if (userToken != null) {
    config.headers.Authorization = `Bearer ${userToken}`;
  }

  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default axiosInstance;