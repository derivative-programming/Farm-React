import React, { createContext, useEffect, useState } from "react";
import { apiInstance } from "../apiConfig";
import PropTypes from "prop-types";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [token, setToken] = useState(localStorage.getItem("@token"));
  const [roles, setRoles] = useState(() => {
    const rolesFromStorage = localStorage.getItem("roleNameCSVList");
    return rolesFromStorage ? rolesFromStorage.split(',') : [];
  });

  useEffect(() => {
    apiInstance.defaults.headers.common["Api-Key"] = token;
  }, [token]);

  const onToken = (token) => { 
    setToken(token);
  };

  
  useEffect(() => {
     //console.log(roles);
  }, [roles]);

  const onRoles = (rolesCSV) => { 
    const roles  = rolesCSV.split(','); 
    setRoles(roles);
  };

  const onEmail = (email) => { 
    setEmail(email);
  };
  
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken: onToken,
        roles,
        setRoles: onRoles,
        email,
        setEmail: onEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
