import axios, { InternalAxiosRequestConfig, AxiosResponse } from "axios";
import config from '../config';

// Create an Axios instance with base URL
export const apiInstance = axios.create({
  baseURL: `${config.apiBaseUrl}${config.apiBasePath}`,
});

// Request interceptor
apiInstance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> {
    return config;
  },
  function (error: any): Promise<any> {
    return Promise.reject(error);
  }
);

// Response interceptor
apiInstance.interceptors.response.use(
  function (response: AxiosResponse): AxiosResponse {
    return response;
  },
  function (error: any): Promise<any> {
    if (error.response && error.response.status === 401) {
      window.location.href = '/logout';
    }
    return Promise.reject(error);
  }
);