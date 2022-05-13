import AddPlant from "../pages/add-plant/add-plant";
import React, { useContext } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import PlantDetail from "../pages/plant-detail/plant-detail";
import PlantList from "../pages/plant-list/plant-list";

const AppRoute = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Dashboard />} />
      <Route path={"/plant-list"} element={<PlantList />} />
      <Route path={"/plant-details"} element={<PlantDetail />} />
      <Route path={"/plant-details/:id"} element={<PlantDetail />} />
      <Route path={"/add-plant"} element={<AddPlant />} />
      <Route path={"/update-plant/:id"} element={<AddPlant />} />
      <Route path={"*"} element={<Navigate to={"/"} replace />} />
    </Routes>
  );
};
export default AppRoute;
