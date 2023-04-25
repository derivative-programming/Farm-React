import axios from "axios";  
 
 
export const apiInstance = axios.create({
  baseURL:
  "https://dp-farm-pageapi.azurewebsites.net/api/v1_0",
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
    
    if (error.response && error.response.status === 401) { 
      window.location.href = '/logout'; 
    }

    return Promise.reject(error);
  }
);

