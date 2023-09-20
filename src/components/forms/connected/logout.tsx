import React, {
  FC,
  ReactElement,
  useContext, 
} from "react"; 
import { useNavigate } from "react-router-dom"; 
 
import { AuthContext } from "../../../context/authContext"; 
import * as AnalyticsService from "../../services/analyticsService";

export interface FormProps {
  name?: string; 
}

export const Logout: FC<FormProps> = ({
  name = "logout", 
}): ReactElement => { 

  const navigate = useNavigate(); 

  const authContext = useContext(AuthContext); 
  
  AnalyticsService.stop();
  authContext.setToken("");
  authContext.setRoles("");
  localStorage.setItem("@token", "");
  localStorage.setItem("customerCode","");
  localStorage.setItem("email", "");

  navigate("/tac-login");
 
  return (
    <div >
       
    </div>
  );
};

export default Logout;
