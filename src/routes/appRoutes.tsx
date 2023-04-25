import { Routes, Route, Navigate } from "react-router-dom";
import LayoutComponent from "../components/Layout/Layout"; 
// import * as ReportConnected from "../components/reports/connected";
// import * as FormConnected from "../components/forms/connected"; 
import loadable from "@loadable/component";

const ReportConnectedTacFarmDashboard = loadable(() => import('../components/reports/connected/TacFarmDashboard'));
const ReportConnectedLandPlantList = loadable(() => import('../components/reports/connected/LandPlantList'));
const ReportConnectedPlantUserDetails = loadable(() => import('../components/reports/connected/PlantUserDetails'))
const FormConnectedLandAddPlant = loadable(() => import('../components/forms/connected/LandAddPlant'));
const FormConnectedPlantEdit = loadable(() => import('../components/forms/connected/PlantEdit'));
const FormConnectedTacLogin = loadable(() => import('../components/forms/connected/TacLogin'));
const FormConnectedTacRegister = loadable(() => import('../components/forms/connected/TacRegister'));
const Logout = loadable(() => import('../components/forms/connected/logout'));

const AppRoute = () => {
  return (
    <LayoutComponent>
    <Routes>  
      <Route path={"/tac-farm-dashboard/:id"} element={<ReportConnectedTacFarmDashboard />} />
      <Route path={"/land-plant-list/:id"} element={<ReportConnectedLandPlantList />} />
      <Route path={"/plant-user-details/:id"} element={<ReportConnectedPlantUserDetails />} />
      <Route path={"/land-add-plant/:id"} element={<FormConnectedLandAddPlant />} />
      <Route path={"/plant-edit/:id"} element={<FormConnectedPlantEdit />} />
      <Route path={"/tac-login/:id"} element={<FormConnectedTacLogin />} />
      <Route path={"/tac-register/:id"} element={<FormConnectedTacRegister />} />
      <Route path={"/logout"} element={< Logout />} />
      <Route path={"*"} element={<Navigate to={"/tac-farm-dashboard/00000000-0000-0000-0000-000000000000"} replace />} />
    </Routes>
    </LayoutComponent>
  );
};
export default AppRoute;
