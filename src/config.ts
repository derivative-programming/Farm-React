// config.ts
interface Config {
    apiBaseUrl: string;
  }
  
  const config: Config = {
    apiBaseUrl: process.env.REACT_APP_API_BASE_URL || "https://localhost:44358",
  };
  
  export default config;