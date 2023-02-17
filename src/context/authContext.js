import React, { createContext, useEffect, useState } from "react";
import { apiInstance } from "../apiConfig";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("@token"));

  useEffect(() => {
    apiInstance.defaults.headers.common["Api-Key"] = token;
  }, [token]);

  const onToken = (token) => { 
    setToken(token);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken: onToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
