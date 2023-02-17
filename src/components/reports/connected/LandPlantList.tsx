import React, { FC, ReactElement, useContext } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss";
import { useNavigate } from "react-router-dom";
import * as ServiceLandPlantList from "../services/LandPlantList"; 
import ReportFilterLandPlantList from "../filters/LandPlantList";
import ReportTableLandPlantList from "../tables/LandPlantList";  
   
const ReportConnectedLandPlantList: FC = (): ReactElement => { 

    return ( 
        <div data-testid="reportConnectedLandPlantList">
            <ReportFilterLandPlantList />
            <ReportTableLandPlantList />
        </div>
    );
};
export default ReportConnectedLandPlantList;
