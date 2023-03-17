import React, { FC, ReactElement, useContext } from "react";
import { Button, Container, Dropdown, Nav, NavItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import MenuDivider from "antd/lib/menu/MenuDivider";
import { ReportInputButton } from "../reports/input-fields";

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
  const [isHovered, setIsHovered] = React.useState(false);

 
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Container className="header-container h-85 d-flex align-items-center justify-content-between px-40">
      <div className=" pb-4 pr-5 logo-design" >NewCo, Inc.</div>
      <div className="d-flex align-items-center">
        <div className="d-none d-md-flex ">
        <Nav className="menu-options-container justify-content-end">
      <NavItem
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span
          className={`nav-link${isHovered ? ' text-underline' : ''}`}
          onClick={onDashboard}
        >
          {authContext && authContext.token ? "Dashboard" : null}
        </span>
      </NavItem>
    </Nav>
          {authContext && authContext.token ? (
            // <Button
            //   onClick={onLogout}
            //   className=" primary-button ml-4"
            // >
            //   Log Out
            // </Button>
             <ReportInputButton
             name=""
             type="submit"
             buttonText="Log Out"
             className="primary-button"
             isButtonCallToAction={true}
             isVisible={true}
             isEnabled={true}
             onClick={onLogout}
           />
          ) : (
            <Container className="d-flex">
              {/* <Button
                onClick={onLogin}
                className=" ml-4"
              >
                Login
              </Button> */}
              <ReportInputButton
                  name=""
                  type="submit"
                  buttonText="  Login"
                  className="primary-button me-2"
                  isButtonCallToAction={true}
                  isVisible={true}
                  isEnabled={true}
                  onClick={onLogin}
                />
              {/* <Button
                onClick={onRegister}
                
              >
                Register
              </Button> */}
              <ReportInputButton
                  name=""
                  type="submit"
                  buttonText="Register"
                  className="primary-button "
                  isButtonCallToAction={true}
                  isVisible={true}
                  isEnabled={true}
               
                  onClick={onRegister}
                />
            </Container>
          )}
        </div>
        <div className="mobile-menu">
          <Dropdown>
            <Dropdown.Toggle  id="dropdown-basic">
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
    </Container>
  );
};
export default Header;
