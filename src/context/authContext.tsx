import React, { createContext, useEffect, useState, ReactNode } from "react";
import { apiInstance } from "../apiConfig";

interface AuthContextType {
  token: string | null;
  setToken: (token: string) => void;
  roles: string[];
  setRoles: (rolesCSV: string) => void;
  email: string | null;
  setEmail: (email: string) => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {},
  roles: [],
  setRoles: () => {},
  email: null,
  setEmail: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [email, setEmail] = useState<string | null>(localStorage.getItem("email"));
  const [token, setToken] = useState<string | null>(localStorage.getItem("@token"));
  const [roles, setRoles] = useState<string[]>(() => {
    const rolesFromStorage = localStorage.getItem("roleNameCSVList");
    return rolesFromStorage ? rolesFromStorage.split(',') : [];
  });

  useEffect(() => {
    if (token) {
      apiInstance.defaults.headers.common["Api-Key"] = token;
    }
  }, [token]);

  const onToken = (token: string) => {
    setToken(token);
  };

  const onRoles = (rolesCSV: string) => {
    const roles = rolesCSV.split(',');
    setRoles(roles);
  };

  const onEmail = (email: string) => {
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

export default AuthProvider;