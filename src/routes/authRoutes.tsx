import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LayoutComponent from "../components/Layout/Layout";
import loadable from "@loadable/component";

//GENLOOPObjectStart
//GENTrainingBlock[c]Start
//GENLearn[modelType=object,name=Pac]Start 
//GENLOOPReportStart
//GENTrainingBlock[d]Start
//GENLearn[modelType=report,name=PacUserFlavorList,isAuthorizationRequired=false,calculatedIsPage=true]Start 
const ReportConnectedPacUserFlavorList = loadable(() => import('../components/reports/connected/PacUserFlavorList'));
//GENLearn[modelType=report,name=PacUserFlavorList,isAuthorizationRequired=false,calculatedIsPage=true]End
//GENTrainingBlock[d]End
//GENLOOPReportEnd
//GENLearn[modelType=object,name=Pac]End
const ReportConnectedPacUserDateGreaterThanFilterList = loadable(() => import('../components/reports/connected/PacUserDateGreaterThanFilterList'));
const ReportConnectedPacUserLandList = loadable(() => import('../components/reports/connected/PacUserLandList'));
const ReportConnectedPacUserRoleList = loadable(() => import('../components/reports/connected/PacUserRoleList'));
const ReportConnectedPacUserTacList = loadable(() => import('../components/reports/connected/PacUserTacList'));
const ReportConnectedPacUserTriStateFilterList = loadable(() => import('../components/reports/connected/PacUserTriStateFilterList'));
//GENTrainingBlock[c]End
//GENLOOPObjectEnd

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
            {/*//GENLearn[modelType=objectWorkflow,name=TacLogin,isAuthorizationRequired=false,calculatedIsPage=true]Start*/}
            <Route path={"/tac-login/:id"} element={
                <FormConnectedTacLogin />
            } />
            <Route path={"/tac-login"} element={
                <FormConnectedTacLogin />
            } />
            {/*//GENLearn[modelType=objectWorkflow,name=TacLogin,isAuthorizationRequired=false,calculatedIsPage=true]End*/}
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

            {/*//GENLOOPObjectStart*/}
            {/*//GENTrainingBlock[c2]Start*/}
            {/*//GENLearn[modelType=object,name=Pac]Start*/}
            {/*//GENLOOPReportStart*/}
            {/*//GENTrainingBlock[d2]Start*/}
            {/*//GENLearn[modelType=report,name=PacUserFlavorList,isAuthorizationRequired=false,calculatedIsPage=true]Start*/}
            <Route path={"/pac-user-flavor-list/:id"} element={<ReportConnectedPacUserFlavorList />} />
            {/*//GENLearn[modelType=report,name=PacUserFlavorList,isAuthorizationRequired=false,calculatedIsPage=true]End*/}
            {/*//GENTrainingBlock[d2]End*/}
            {/*//GENLOOPReportEnd*/}
            {/*//GENLearn[modelType=object,name=Pac]End*/}
            <Route path={"/pac-user-date-greater-than-filter-list/:id"} element={<ReportConnectedPacUserDateGreaterThanFilterList />} />

            <Route path={"/pac-user-land-list/:id"} element={<ReportConnectedPacUserLandList />} />

            <Route path={"/pac-user-role-list/:id"} element={<ReportConnectedPacUserRoleList />} />

            <Route path={"/pac-user-tac-list/:id"} element={<ReportConnectedPacUserTacList />} />

            <Route path={"/pac-user-tri-state-filter-list/:id"} element={<ReportConnectedPacUserTriStateFilterList />} />

            {/*//GENTrainingBlock[c2]End*/}
            {/*//GENLOOPObjectEnd*/}
            
            <Route path={"/logout"} element={<Navigate to={"/tac-login"} replace />} />    
            <Route path={"*"} element={<Navigate to={"/"} replace />} />

        </Routes>
    </LayoutComponent>
        // </BrowserRouter>
    )
}
export default AuthRoute;