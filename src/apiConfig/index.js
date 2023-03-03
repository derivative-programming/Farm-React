import axios from "axios";
 
 
export const apiInstance = axios.create({
  baseURL:
    "https://localhost:44358/api/v1_0",
});

apiInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
apiInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

