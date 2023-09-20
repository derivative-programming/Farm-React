import React, { createContext, useEffect, useState } from "react";
import { apiInstance } from "../apiConfig";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("@token"));
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    apiInstance.defaults.headers.common["Api-Key"] = token;
  }, [token]);

  const onToken = (token) => { 
    setToken(token);
  };

  
  useEffect(() => {
     console.log(roles);
  }, [roles]);

  const onRoles = (rolesCSV) => { 
    const roles  = rolesCSV.split(','); 
    setRoles(roles);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken: onToken,
        roles,
        setRoles: onRoles
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
