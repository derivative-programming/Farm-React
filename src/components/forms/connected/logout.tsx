import React, {
  FC,
  ReactElement,
  useContext, 
} from "react"; 
import { useNavigate } from "react-router-dom"; 
 
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
  localStorage.setItem("customerCode","");
  localStorage.setItem("email", "");

  navigate("/tac-login");
 
  return (
    <div >
       
    </div>
  );
};

export default Logout;
