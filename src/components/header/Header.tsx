import React, { FC, ReactElement, useContext } from "react";
import { Dropdown, Nav, NavItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext"; 
import useAnalyticsDB from "../../hooks/useAnalyticsDB"; 
import * as AnalyticsService from "../services/analyticsService";

const Header: FC = (): ReactElement => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const { logClick } = useAnalyticsDB();

  const onLogout = () => {
    logClick("Header","logOut","");
    AnalyticsService.stop();
    authContext.setToken("");
    authContext.setRoles("");
    localStorage.setItem("@token", "");
    localStorage.setItem("customerCode","");
    localStorage.setItem("email", "");
  };

  const onLogin = () => {
    logClick("Header","login","");
    navigate("/");
  };
  const onDashboard = () => {
    logClick("Header","dashboard","");
    navigate("/");
  };
  const onProfile = () => {
    logClick("Header","profile","");
    navigate("/customer-user-update-profile/00000000-0000-0000-0000-000000000000");
  };
  const onAdminDashboard = () => {
    logClick("Header","admin","");
    navigate("/customer-admin-dashboard/00000000-0000-0000-0000-000000000000");
  };
  const onConfigDashboard = () => {
    logClick("Header","config","");
    navigate("/pac-config-dashboard/00000000-0000-0000-0000-000000000000");
  };

  const onRegister = () => {
    logClick("Header","register","");
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
    <div className="mt-2">
      <div className="header-container h-85 d-flex align-items-center justify-content-between px-40">
        <div className=" pt-2 pr-5 logo-design" ><h4>NewCo Inc.</h4></div>
        <div className="d-flex align-items-center">
          <div className="d-none d-md-flex ">
          <Nav className="menu-options-container justify-content-end">
            {authContext && authContext.token ? (  
              <>
              <NavItem
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span
                  data-testid="header-config-dashboard-link"
                  className={`nav-link${isHovered ? ' text-underline' : ''}`}
                  onClick={onConfigDashboard}
                >
                  {authContext && authContext.token && authContext.roles.includes('Config') === true ? "Config" : null}
                </span>
              </NavItem>
                <NavItem
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                    data-testid="header-admin-dashboard-link"
                    className={`nav-link${isHovered ? ' text-underline' : ''}`}
                    onClick={onAdminDashboard}
                  >
                    {authContext && authContext.token && authContext.roles.includes('Admin') === true ? "Admin" : null}
                  </span>
                </NavItem>
                <NavItem
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                    data-testid="header-dashboard-link"
                    className={`nav-link${isHovered ? ' text-underline' : ''}`}
                    onClick={onDashboard}
                  >
                    {authContext && authContext.token && authContext.roles.includes('User') === true ? "Dashboard" : null}
                  </span>
                </NavItem>
                
                <NavItem
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                    data-testid="header-profile-link"
                    className={`nav-link${isHovered ? ' text-underline' : ''}`}
                    onClick={onProfile}
                  >
                    {authContext && authContext.token && authContext.roles.includes('User') === true ? "Profile" : null}
                  </span>
                </NavItem>

                
                <NavItem
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                    data-testid='header-logout-link'
                    className={`nav-link${isHovered ? ' text-underline' : ''}`}
                    onClick={onLogout}
                  >
                    {authContext && authContext.token ? "Log Out" : null}
                  </span>
                </NavItem>
              </>
              ) : ( 
              <>
                <NavItem
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                    data-testid='header-login-link'
                    className={`nav-link${isHovered ? ' text-underline' : ''}`}
                    onClick={onLogin}
                  >
                    {authContext && authContext.token ? null : "Log In"}
                  </span>
                </NavItem>
                
                <NavItem
                  data-testid='header-register-link'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                    className={`nav-link${isHovered ? ' text-underline' : ''}`}
                    onClick={onRegister}
                  >
                    {authContext && authContext.token ? null : "Register"}
                  </span>
                </NavItem>
              </>
              )} 
        </Nav>
            
          </div>
          <div className="mobile-menu">
            <Dropdown>
              <Dropdown.Toggle  id="dropdown-basic"  data-testid="header-dropdown-menu">
                <hr></hr>
                <hr></hr>
                <hr></hr>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {authContext && authContext.token ? (
                  <>
                
                    <Dropdown.Item 
                      data-testid="header-dashboard-link"
                      onClick={onDashboard}>
                  
                      Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item 
                      data-testid="header-profile-link"
                      onClick={onProfile}>
                  
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item 
                      data-testid="header-dashboard-link"
                      onClick={onAdminDashboard}>
                  
                      
                      {authContext && authContext.token && authContext.roles.includes('Admin') === true ? "Admin" : null}
                    </Dropdown.Item>
                    <Dropdown.Item 
                      data-testid="header-dashboard-link"
                      onClick={onConfigDashboard}>
                  
                      
                      {authContext && authContext.token && authContext.roles.includes('Config') === true ? "Config" : null}
                    </Dropdown.Item>
                    <Dropdown.Item
                      data-testid="header-logout-link"
                      onClick={onLogout}> Logout</Dropdown.Item>
                  </>
                ) : (
                  <>
                    <Dropdown.Item
                      data-testid="header-login-link" 
                      onClick={onLogin}> Login</Dropdown.Item>
                    <Dropdown.Item
                      data-testid="header-register-link" 
                      onClick={onRegister}> Register</Dropdown.Item>
                  </>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <hr/>
    </div>

  );
};
export default Header;
