import React, { useContext } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import TacFarmDashboard from "../components/pages/user/tac-farm-dashboard/TacFarmDashboard";
import FormConnectedLandAddPlant from "../components/forms/connected/LandAddPlant";
import FormConnectedPlantEdit from "../components/forms/connected/PlantEdit";
import PlantUserDetails from "../components/pages/user/plant-user-details/PlantUserDetails";
import LandPlantList from "../components/pages/user/land-plant-list/LandPlantList";
import LayoutComponent from "../components/Layout/Layout";
import ReportConnectedLandPlantList from "../components/reports/connected/LandPlantList";

const AppRoute = () => {
  return (
    <LayoutComponent>
    <Routes>
    <Route path={"/tac-farm-dashboard"} element={<TacFarmDashboard />} />
      <Route path={"/tac-farm-dashboard:id"} element={<TacFarmDashboard />} />
      <Route path={"/land-plant-list/:id"} element={<ReportConnectedLandPlantList />} />
      <Route path={"/plant-user-details/:id"} element={<PlantUserDetails />} />
      <Route path={"/land-add-plant/:id"} element={<FormConnectedLandAddPlant />} />
      <Route path={"/plant-edit/:id"} element={<FormConnectedPlantEdit />} />
      <Route path={"*"} element={<Navigate to={"/tac-farm-dashboard"} replace />} />
    </Routes>
    </LayoutComponent>
  );
};
export default AppRoute;
