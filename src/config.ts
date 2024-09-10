// config.ts
interface Config {
    apiBaseUrl: string;
    apiBasePath: string;
  }
  
  const config: Config = {
    apiBaseUrl: process.env.REACT_APP_API_BASE_URL || "https://dp-farm-pageapi.azurewebsites.net",
    apiBasePath: process.env.REACT_APP_API_BASE_PATH || "/api/v1_0",
  };
  
  export default config;