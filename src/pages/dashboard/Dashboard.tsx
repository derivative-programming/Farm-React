import React, { FC, ReactElement, useContext } from 'react';
import '../../App.scss';
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import LayoutComponent from '../../components/Layout/Layout';
import { AuthContext } from '../../context/authContext';

const Dashboard: FC = (): ReactElement => {

    const navigate = useNavigate();
    const c = useContext(AuthContext)

    console.log("c", c)

    const onPlantsList = () => {
        navigate('plant-list');
    };

    return (
        <LayoutComponent>
            <div className="dashboard-container">
                <h1>Dashboard</h1>
                <Button onClick={()=>onPlantsList()} className='primary-button' type="submit">
                    Plants
                </Button>
            </div>
        </LayoutComponent>
    )
}
export default Dashboard;