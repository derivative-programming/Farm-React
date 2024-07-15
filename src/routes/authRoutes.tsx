import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LayoutComponent from "../components/Layout/Layout";
import loadable from "@loadable/component";

//GENLOOPObjectStart
//GENTrainingBlock[a]Start
//GENLearn[modelType=object,name=Tac]Start 
//GENLOOPObjectWorkflowStart
//GENTrainingBlock[b]Start
//GENLearn[modelType=objectWorkflow,name=TacLogin,isAuthorizationRequired=false,calculatedIsPage=true]Start 
const FormConnectedTacLogin = loadable(() => import('../components/forms/connected/TacLogin'));
//GENLearn[modelType=objectWorkflow,name=TacLogin,isAuthorizationRequired=false,calculatedIsPage=true]End
//GENTrainingBlock[b]End
//GENLOOPObjectWorkflowEnd
//GENLearn[modelType=object,name=Tac]End 
const FormConnectedTacRegister = loadable(() => import('../components/forms/connected/TacRegister')); 
//GENTrainingBlock[a]End
//GENLOOPObjectEnd 


const AuthRoute = () => {

    return (
        // <BrowserRouter>
    <LayoutComponent>
        <Routes>
            <Route path={"/"} element={
                <FormConnectedTacLogin />
            } />
            {/*//GENLOOPObjectStart*/}
            {/*//GENTrainingBlock[a2]Start*/}
            {/*//GENLearn[modelType=object,name=Tac]Start*/}
            {/*//GENLOOPObjectWorkflowStart*/}
            {/*//GENTrainingBlock[b2]Start*/}
            {/*//GENLearn[modelType=objectWorkflow,name=TacLogin,isAuthorizationRequired=false]Start*/}
            <Route path={"/tac-login/:id"} element={
                <FormConnectedTacLogin />
            } />
            <Route path={"/tac-login"} element={
                <FormConnectedTacLogin />
            } />
            {/*//GENLearn[modelType=objectWorkflow,name=TacLogin,isAuthorizationRequired=false]End*/}
            {/*//GENTrainingBlock[b2]End*/}
            {/*//GENLOOPObjectWorkflowEnd*/}
            {/*//GENLearn[modelType=object,name=Tac]End*/} 
            <Route path={"/tac-register/:id"} element={
                <FormConnectedTacRegister />
            } />
            <Route path={"/tac-register"} element={
                <FormConnectedTacRegister />
            } /> 
            {/*//GENTrainingBlock[a2]End*/}
            {/*//GENLOOPObjectEnd*/}
            
            <Route path={"/logout"} element={<Navigate to={"/tac-login"} replace />} />    
            <Route path={"*"} element={<Navigate to={"/"} replace />} />

        </Routes>
    </LayoutComponent>
        // </BrowserRouter>
    )
}
export default AuthRoute;