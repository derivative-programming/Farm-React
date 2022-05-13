import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";

const AuthRoute = () => {

    return (
        // <BrowserRouter>
        <Routes>
            <Route path={"/"} element={
                <Login />
            } />
            <Route path={"/register"} element={
                <Register />
            } />

            <Route path={"*"} element={<Navigate to={"/"} replace />} />

        </Routes>
        // </BrowserRouter>
    )
}
export default AuthRoute;