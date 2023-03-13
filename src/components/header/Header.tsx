import React, { FC, ReactElement, useContext } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Header: FC = (): ReactElement => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    authContext.setToken("");
    localStorage.clear();
  };

  const onLogin = () => {
    navigate("/");
  };
  const onDashboard = () => {
    navigate("/tac-farm-dashboard/00000000-0000-0000-0000-000000000000");
  };

  const onRegister = () => {
    navigate("/tac-register");
  };

  return (
    <div className="header-container h-85 d-flex align-items-center justify-content-between px-40">
      <div className=" pb-4 pr-5" style={{ borderBottom: "1px solid black",fontSize:"25px"}}>NewCo, Inc.</div>
      <div className="d-flex align-items-center">
        <div className="d-none d-md-flex ">
          <div className="menu-options-container">
            <div>
              <span onClick={onDashboard}>
                {authContext && authContext.token ? "Dashboard" : null}
              </span>
            </div>
          </div>
          {authContext && authContext.token ? (
            <Button
              onClick={onLogout}
              className=" primary-button ml-4"
            >
              Log Out
            </Button>
          ) : (
            <div className="d-flex">
              <Button
                onClick={onLogin}
                className="menu-button ml-4"
              >
                Login
              </Button>
              <Button
                onClick={onRegister}
                className="menu-button "
                style={{ marginLeft: "10px" }}
              >
                Register
              </Button>
            </div>
          )}
        </div>
        <div className="mobile-menu">
          <Dropdown>
            <Dropdown.Toggle className="menu-button" id="dropdown-basic">
              <hr></hr>
              <hr></hr>
              <hr></hr>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {authContext && authContext.token ? (
                <>
               
                  <Dropdown.Item onClick={onDashboard}>
                
                    Dashboard
                  </Dropdown.Item>
                  <Dropdown.Item onClick={onLogout}> Logout</Dropdown.Item>
                </>
              ) : (
                <>
                  <Dropdown.Item onClick={onLogin}> Login</Dropdown.Item>
                  <Dropdown.Item onClick={onRegister}> Register</Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
export default Header;
