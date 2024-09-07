import React, { createContext, useEffect, useState, ReactNode } from "react";
import { apiInstance } from "../apiConfig";

interface AuthContextType {
  token: string | null;
  setToken: (token: string) => void;
  roles: string[];
  setRoles: (rolesCSV: string) => void;
  email: string | null;
  setEmail: (email: string) => void;
  clearSession: () => void;
  startSession: (sessionData: any) => void;
  customerName: string | null;
  organizationName: string | null;
  customerCode: string | null;
  orgCustomerCode: string | null;
  organizationCode: string | null;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {},
  roles: [],
  setRoles: () => {},
  email: null,
  setEmail: () => {},
  clearSession: () => {},
  startSession: () => {},
  customerName: null,
  organizationName: null,
  customerCode: null,
  orgCustomerCode: null,
  organizationCode: null,
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
  const [customerName, setCustomerName] = useState<string | null>(localStorage.getItem("customerName"));
  const [organizationName, setOrganizationName] = useState<string | null>(localStorage.getItem("organizationName"));
  const [customerCode, setCustomerCode] = useState<string | null>(localStorage.getItem("customerCode"));
  const [orgCustomerCode, setOrgCustomerCode] = useState<string | null>(localStorage.getItem("orgCustomerCode"));
  const [organizationCode, setOrganizationCode] = useState<string | null>(localStorage.getItem("organizationCode"));

  useEffect(() => {
    if (token) {
      apiInstance.defaults.headers.common["Api-Key"] = token;
    }
  }, [token]);

  const onToken = (token: string) => {
    setToken(token);
    localStorage.setItem("@token", token);
  };

  const onRoles = (rolesCSV: string) => {
    if(rolesCSV === "") {
      setRoles([]);
      localStorage.removeItem("roleNameCSVList");
    }
    else
    {
      const roles = rolesCSV.split(',');
      setRoles(roles);
      localStorage.setItem("roleNameCSVList", rolesCSV);

    }
  };

  const onEmail = (email: string) => {
    setEmail(email);
    localStorage.setItem("email", email);
  };

  const onCustomerName = (customerName: string) => {
    setCustomerName(customerName);
    localStorage.setItem("customerName", customerName);
  };

  const onOrganizationName = (organizationName: string) => {
    setOrganizationName(organizationName);
    localStorage.setItem("organizationName", organizationName);
  };
  

  const onCustomerCode = (customerCode: string) => {
    setCustomerCode(customerCode);
    localStorage.setItem("customerCode", customerCode);
  };
  

  const onOrgCustomerCode = (orgCustomerCode: string) => {
    setOrgCustomerCode(orgCustomerCode);
    localStorage.setItem("orgCustomerCode", orgCustomerCode);
  };
  

  const onOrganizationCode = (organizationCode: string) => {
    setOrganizationCode(organizationCode);
    localStorage.setItem("organizationCode", organizationCode);
  };

  const onStartSession = (sessionData: any) => {
    if('apiKey' in sessionData) {
      onToken(sessionData.apiKey);
    }
    if('email' in sessionData) {
      onEmail(sessionData.email);
    }
    if('roleNameCSVList' in sessionData) {
      onRoles(sessionData.roleNameCSVList);
    }
    if('customerCode' in sessionData) {
      onCustomerCode(sessionData.customerCode);
    }
    if('orgCustomerCode' in sessionData) {
      onOrgCustomerCode(sessionData.orgCustomerCode);
    }
    if('organizationCode' in sessionData) {
      onOrganizationCode(sessionData.organizationCode);
    } 
    if('customerName' in sessionData
    ) {
      onCustomerName(sessionData.customerName);
    }
    if('firstName' in sessionData &&
      'lastName' in sessionData) {
      const fullName: string = `${sessionData.firstName} ${sessionData.lastName}`.trim();
      onCustomerName(fullName);
    }
    if('companyName' in sessionData ||
      'organizationName' in sessionData
    ) {
      onOrganizationName(sessionData.organizationName);
    }
  };

  const onClearSession = () => {
    onToken("");
    onEmail("");
    onRoles("");
    onCustomerName("");
    onOrganizationName("");
    onCustomerCode("");
    onOrgCustomerCode("");
    onOrganizationCode("");
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
        clearSession: onClearSession,
        startSession: onStartSession,
        customerName,
        organizationName,
        customerCode,
        orgCustomerCode,
        organizationCode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;