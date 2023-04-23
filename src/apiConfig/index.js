import axios from "axios";
import { useNavigate } from "react-router-dom";

export const apiInstance = axios.create({
  baseURL: "https://dp-farm-pageapi.azurewebsites.net/api/v1_0",
});

// Add a request interceptor
apiInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Add a response interceptor
apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const navigate = useNavigate();
    if (error.response.status === 401) {
      // Redirect to login page
      navigate("/tac-login");
    }
    return Promise.reject(error);
  }
);
