import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import FormConnectedTacLogin from "../components/forms/connected/TacLogin";
import FormConnectedTacRegister from "../components/forms/connected/TacRegister"; 
import LayoutComponent from "../components/Layout/Layout";

const AuthRoute = () => {

    return (
        // <BrowserRouter>
    <LayoutComponent>
        <Routes>
            <Route path={"/"} element={
                <FormConnectedTacLogin />
            } />
            <Route path={"/tac-register/:id"} element={
                <FormConnectedTacRegister />
            } />
            <Route path={"/tac-register"} element={
                <FormConnectedTacRegister />
            } />
            <Route path={"/tac-login/:id"} element={
                <FormConnectedTacLogin />
            } />
            <Route path={"/tac-login"} element={
                <FormConnectedTacLogin />
            } />

            <Route path={"*"} element={<Navigate to={"/"} replace />} />

        </Routes>
    </LayoutComponent>
        // </BrowserRouter>
    )
}
export default AuthRoute;