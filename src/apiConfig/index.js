// old code

// import axios from "axios";
 
 
// export const apiInstance = axios.create({
//   baseURL:
//     "https://dp-farm-pageapi.azurewebsites.net/api/v1_0",
// });

// apiInstance.interceptors.request.use(
//   function (config) {
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// apiInstance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// this my new code
import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://dp-farm-pageapi.azurewebsites.net/api/v1_0",
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
    // Check if the error is a 401 Unauthorized error
    if (error.response && error.response.status === 401) {
      // Redirect to the login page if a 401 error is encountered
      window.location.href = '/tac-login';
    }

    return Promise.reject(error);
  }
);
