import { Routes, Route, Navigate } from "react-router-dom";
import LayoutComponent from "../components/Layout/Layout";  
import loadable from "@loadable/component";

//GENLOOPObjectStart
//GENTrainingBlock[c]Start
//GENLearn[modelType=object,name=Land]Start 
//GENLOOPReportStart
//GENTrainingBlock[d]Start
//GENLearn[modelType=report,name=LandPlantList]Start 
const ReportConnectedLandPlantList = loadable(() => import('../components/reports/connected/LandPlantList'));
//GENLearn[modelType=report,name=LandPlantList]End
//GENTrainingBlock[d]End
//GENLOOPReportEnd
//GENLearn[modelType=object,name=Land]End
const ReportConnectedTacFarmDashboard = loadable(() => import('../components/reports/connected/TacFarmDashboard'));
const ReportConnectedPlantUserDetails = loadable(() => import('../components/reports/connected/PlantUserDetails'))
//GENTrainingBlock[c]End
//GENLOOPObjectEnd

//GENLOOPObjectStart
//GENTrainingBlock[a]Start
//GENLearn[modelType=object,name=Land]Start 
//GENLOOPObjectWorkflowStart
//GENTrainingBlock[b]Start
//GENLearn[modelType=objectWorkflow,name=LandAddPlant,calculatedIsPage=true]Start 
const FormConnectedLandAddPlant = loadable(() => import('../components/forms/connected/LandAddPlant'));
//GENLearn[modelType=objectWorkflow,name=LandAddPlant,calculatedIsPage=true]End
//GENTrainingBlock[b]End
//GENLOOPObjectWorkflowEnd
//GENLearn[modelType=object,name=Land]End
const FormConnectedPlantEdit = loadable(() => import('../components/forms/connected/PlantEdit'));
const FormConnectedTacLogin = loadable(() => import('../components/forms/connected/TacLogin'));
const FormConnectedTacRegister = loadable(() => import('../components/forms/connected/TacRegister'));
//GENTrainingBlock[a]End
//GENLOOPObjectEnd

const Logout = loadable(() => import('../components/forms/connected/logout'));

const AppRoute = () => {
  return (
    <LayoutComponent>
    <Routes>   


      {/*//GENLOOPObjectStart*/}
      {/*//GENTrainingBlock[c2]Start*/}
      {/*//GENLearn[modelType=object,name=Land]Start*/}
      {/*//GENLOOPReportStart*/}
      {/*//GENTrainingBlock[d2]Start*/}
      {/*//GENLearn[modelType=report,name=LandPlantList]Start*/}
      <Route path={"/land-plant-list/:id"} element={<ReportConnectedLandPlantList />} />
      {/*//GENLearn[modelType=report,name=LandPlantList]End*/}
      {/*//GENTrainingBlock[d2]End*/}
      {/*//GENLOOPReportEnd*/}
      {/*//GENLearn[modelType=object,name=Land]End*/}
      <Route path={"/tac-farm-dashboard/:id"} element={<ReportConnectedTacFarmDashboard />} />
      <Route path={"/plant-user-details/:id"} element={<ReportConnectedPlantUserDetails />} />
      {/*//GENTrainingBlock[c2]End*/}
      {/*//GENLOOPObjectEnd*/}

      {/*//GENLOOPObjectStart*/}
      {/*//GENTrainingBlock[a2]Start*/}
      {/*//GENLearn[modelType=object,name=Land]Start*/}
      {/*//GENLOOPObjectWorkflowStart*/}
      {/*//GENTrainingBlock[b2]Start*/}
      {/*//GENLearn[modelType=objectWorkflow,name=LandAddPlant,calculatedIsPage=true]Start*/}
      <Route path={"/land-add-plant/:id"} element={<FormConnectedLandAddPlant />} />
      {/*//GENLearn[modelType=objectWorkflow,name=LandAddPlant,calculatedIsPage=true]End*/}
      {/*//GENTrainingBlock[b2]End*/}
      {/*//GENLOOPObjectWorkflowEnd*/}
      {/*//GENLearn[modelType=object,name=Land]End*/}
      <Route path={"/plant-edit/:id"} element={<FormConnectedPlantEdit />} /> 
      {/*//GENTrainingBlock[a2]End*/}
      {/*//GENLOOPObjectEnd*/}
 
      <Route path={"/logout"} element={< Logout />} />
      <Route path={"*"} element={<Navigate to={"/tac-farm-dashboard/00000000-0000-0000-0000-000000000000"} replace />} />
    </Routes>
    </LayoutComponent>
  );
};
export default AppRoute;
