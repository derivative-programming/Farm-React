import React, { createContext, useEffect, useState } from "react";
import { instance } from "../apiConfig";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("@token"));

  useEffect(() => {
    instance.defaults.headers.common["Farm-Api-Key"] = token;
  }, [token]);

  const onToken = (token) => {
    // instance.defaults.headers.common["Farm-Api-Key"] = token;
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
