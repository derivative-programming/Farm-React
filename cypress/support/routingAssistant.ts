
{/*//GENLOOPObjectStart*/}
{/*//GENTrainingBlock[c3]Start*/}
{/*//GENLearn[modelType=object,name=Tac]Start*/}
{/*//GENLOOPReportStart*/}
{/*//GENTrainingBlock[d3]Start*/}
{/*//GENLearn[modelType=report,name=TacFarmDashboard]Start*/}
import { TacFarmDashboardPage } from "./pages/TacFarmDashboard"; 
{/*//GENLearn[modelType=report,name=TacFarmDashboard]End*/}
{/*//GENTrainingBlock[d3]End*/}
{/*//GENLOOPReportEnd*/}
{/*//GENLearn[modelType=object,name=Tac]End*/}
import { LandPlantListPage } from "./pages/LandPlantList";
{/*//GENTrainingBlock[c3]End*/}
{/*//GENLOOPObjectEnd*/}
 

class RoutingAssistant {
      
  goToPage(curentPage:string, nextPageName:string) { 
		cy.log('goToPage :' + curentPage + ' > ' + nextPageName); 
    //use this to continue the user journet and not start over from the dashboard.
 
    if(curentPage === "")
    {
      return "TacFarmDashboard";
    }
    
    
    {/*//GENLOOPObjectStart*/}
    {/*//GENTrainingBlock[c]Start*/}
    {/*//GENLearn[modelType=object,name=Tac]Start*/}
    {/*//GENLOOPReportStart*/}
    {/*//GENTrainingBlock[d]Start*/}
    {/*//GENLearn[modelType=report,name=TacFarmDashboard]Start*/}
    if(curentPage === "TacFarmDashboard")
    {
      const page = new TacFarmDashboardPage();
      page.clickButtonWithDestination(nextPageName);
    }
    {/*//GENLearn[modelType=report,name=TacFarmDashboard]End*/}
    {/*//GENTrainingBlock[d]End*/}
    {/*//GENLOOPReportEnd*/}
    {/*//GENLearn[modelType=object,name=Tac]End*/}
    if(curentPage === "LandPlantList")
    {
      const page = new LandPlantListPage();
      page.clickButtonWithDestination(nextPageName);
    } 
    {/*//GENTrainingBlock[c]End*/}
    {/*//GENLOOPObjectEnd*/}
 
    return nextPageName;
  }
    
  visitPage(pageName:string) { 
    //use this if you are ok with resetting the journey and starting from the dashboard
		cy.log('visitPage :' + pageName); 

     
    
    {/*//GENLOOPObjectStart*/}
    {/*//GENTrainingBlock[c2]Start*/}
    {/*//GENLearn[modelType=object,name=Tac]Start*/}
    {/*//GENLOOPReportStart*/}
    {/*//GENTrainingBlock[d2]Start*/}
    {/*//GENLearn[modelType=report,name=TacFarmDashboard]Start*/}
    if(pageName === "TacFarmDashboard")
    {
      const page = new TacFarmDashboardPage();
      page.visit();
    }
    {/*//GENLearn[modelType=report,name=TacFarmDashboard]End*/}
    {/*//GENTrainingBlock[d2]End*/}
    {/*//GENLOOPReportEnd*/}
    {/*//GENLearn[modelType=object,name=Tac]End*/}
    if(pageName === "LandPlantList")
    {
      const page = new LandPlantListPage();
      page.visit();
    }
    {/*//GENTrainingBlock[c2]End*/}
    {/*//GENLOOPObjectEnd*/}

    return pageName;
  } 
}
export default RoutingAssistant;
