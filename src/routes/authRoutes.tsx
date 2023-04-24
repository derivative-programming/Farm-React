import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LayoutComponent from "../components/Layout/Layout";

import loadable from '@loadable/component';
const FormConnectedTacLogin = loadable(() => import('../components/forms/connected/TacLogin'));
const FormConnectedTacRegister = loadable(() => import('../components/forms/connected/TacRegister'));

const AuthRoute = () => {

    return (
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
