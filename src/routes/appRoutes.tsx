import React, { useContext } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import LayoutComponent from "../components/Layout/Layout"; 
import * as ReportConnected from "../components/reports/connected";
import * as FormConnected from "../components/forms/connected"; 

const AppRoute = () => {
  return (
    <LayoutComponent>
    <Routes>  
      <Route path={"/tac-farm-dashboard/:id"} element={<ReportConnected.ReportConnectedTacFarmDashboard />} />
      <Route path={"/land-plant-list/:id"} element={<ReportConnected.ReportConnectedLandPlantList />} />
      <Route path={"/plant-user-details/:id"} element={<ReportConnected.ReportConnectedPlantUserDetails />} />
      <Route path={"/land-add-plant/:id"} element={<FormConnected.FormConnectedLandAddPlant />} />
      <Route path={"/plant-edit/:id"} element={<FormConnected.FormConnectedPlantEdit />} />
      <Route path={"/tac-login/:id"} element={<FormConnected.FormConnectedTacLogin />} />
      <Route path={"/tac-register/:id"} element={<FormConnected.FormConnectedTacRegister />} />
      <Route path={"/logout"} element={< FormConnected.Logout />} />
      <Route path={"*"} element={<Navigate to={"/tac-farm-dashboard/00000000-0000-0000-0000-000000000000"} replace />} />
    </Routes>
    </LayoutComponent>
  );
};
export default AppRoute;
