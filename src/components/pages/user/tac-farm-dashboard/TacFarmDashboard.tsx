import React, { FC, ReactElement, useContext } from 'react';
import '../../../../App.scss';
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import LayoutComponent from '../../../../components/Layout/Layout';
import { AuthContext } from '../../../../context/authContext';
import { tacFarmDashboardService } from '../../../../services/home';

const TacFarmDashboard: FC = (): ReactElement => {

    const navigate = useNavigate();
    const c = useContext(AuthContext)

    console.log("c", c)

    const onPlantsList = async () => {
        try {
            const res = await tacFarmDashboardService();
            console.log("tacFarmDashboardService res -->", res); 
            navigate('/land-plant-list/' + res.data.items[0].fieldOnePlantListLinkLandCode);
          } catch (err) {
            console.log("eror", err);
          }
    };

    return (
        <div className="tac-farm-dashboard-container">
            <h1>Dashboard</h1>
            <Button onClick={()=>onPlantsList()} className='primary-button' type="submit">
                Plants
            </Button>
        </div>
    )
}
export default TacFarmDashboard;