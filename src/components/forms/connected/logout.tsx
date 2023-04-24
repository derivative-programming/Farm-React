import React, {
  FC,
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, Form, Card, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom"; 
 
import { AuthContext } from "../../../context/authContext"; 

export interface FormProps {
  name?: string; 
}

export const Logout: FC<FormProps> = ({
  name = "logout", 
}): ReactElement => { 

  const navigate = useNavigate(); 

  const authContext = useContext(AuthContext); 
  
  authContext.setToken("");
  localStorage.setItem("@token", "");

  navigate("/tac-login");
 
  return (
    <div >
       
    </div>
  );
};

export default Logout;
