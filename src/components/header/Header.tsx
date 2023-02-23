import React, { FC, ReactElement, useContext } from 'react';
import { Button, Dropdown } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import '../../App.scss';
import { AuthContext } from '../../context/authContext';

const Header: FC = (): ReactElement => {

    const authContext = useContext(AuthContext)
    const navigate = useNavigate()

    const onLogout = () => {
        authContext.setToken("")
        localStorage.clear()
    }

    const onLogin = () => {
        navigate("/")
    }
    const onDashboard = () => {
        navigate("/tac-farm-dashboard/00000000-0000-0000-0000-000000000000")
    }

    const onRegister = () => {
        navigate("/tac-register")
    }

    return (
        <div className="header-container">
            <div className='logo'>
                NewCo, Inc.
            </div>
            <div className='menu-container'>
                <div className='desktop'>
                    <div className='menu-options-container'>
                        <div>
                            <span onClick={onDashboard}>
                                {
                                    authContext && authContext.token ? "Dashboard" : null}
                            </span>
                        </div>
                    </div>
                    {
                        authContext && authContext.token ? <Button onClick={onLogout} className='menu-button'>
                            Log Out
                        </Button> : <div className='d-flex' >
                            <Button onClick={onLogin} className='menu-button'>
                                Login
                            </Button>
                            <Button onClick={onRegister} className='menu-button'>
                                Register
                            </Button>
                        </div>
                    }
                </div>
                <div className='mobile-menu'>
                    <Dropdown>
                        <Dropdown.Toggle className='menu-button' id="dropdown-basic">
                            <hr></hr>
                            <hr></hr>
                            <hr></hr>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                authContext && authContext.token ? <> <Dropdown.Item onClick={onDashboard}> Dashboard</Dropdown.Item>  <Dropdown.Item onClick={onLogout}> Logout</Dropdown.Item> </> : <><Dropdown.Item onClick={onLogin}> Login</Dropdown.Item><Dropdown.Item onClick={onRegister}> Register</Dropdown.Item></>}

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}
export default Header;