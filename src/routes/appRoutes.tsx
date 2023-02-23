import React, { useContext } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import TacFarmDashboard from "../components/pages/user/tac-farm-dashboard/TacFarmDashboard"; 
import LayoutComponent from "../components/Layout/Layout"; 
import * as ReportConnected from "../components/reports/connected";
import * as FormConnected from "../components/forms/connected";

const AppRoute = () => {
  return (
    <LayoutComponent>
    <Routes>
    <Route path={"/tac-farm-dashboard"} element={<TacFarmDashboard />} />
      <Route path={"/tac-farm-dashboard:id"} element={<TacFarmDashboard />} />
      <Route path={"/land-plant-list/:id"} element={<ReportConnected.ReportConnectedLandPlantList />} />
      <Route path={"/plant-user-details/:id"} element={<ReportConnected.ReportConnectedPlantUserDetails />} />
      <Route path={"/land-add-plant/:id"} element={<FormConnected.FormConnectedLandAddPlant />} />
      <Route path={"/plant-edit/:id"} element={<FormConnected.FormConnectedPlantEdit />} />
      <Route path={"/tac-login/:id"} element={<FormConnected.FormConnectedTacLogin />} />
      <Route path={"/tac-register/:id"} element={<FormConnected.FormConnectedTacRegister />} />
      <Route path={"*"} element={<Navigate to={"/tac-farm-dashboard"} replace />} />
    </Routes>
    </LayoutComponent>
  );
};
export default AppRoute;
