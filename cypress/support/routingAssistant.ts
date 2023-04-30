
import { TacFarmDashboardPage } from "./pages/TacFarmDashboard"; 
import { LandPlantListPage } from "./pages/LandPlantList";

class RoutingAssistant {
    
  goToPage_old(nextPageName:string) { 
		cy.log('goToPage :' + nextPageName); 
    //use this to continue the user journet and not start over from the dashboard.
 
    //cy.wait(2000);
    let currentURL = ""
    cy.url().then(url => {
        currentURL = url
        cy.log('Current Url set :' + currentURL); 
        
        if(currentURL.includes( '/tac-farm-dashboard/') || currentURL === "") //page is TacFarmDashboard
        {
          cy.log('Currently on TacFarmDashboard'); 
          if(nextPageName === "TacFarmDashboard")
          {
            cy.log('Already there.'); 
            return;
          }
          const page = new TacFarmDashboardPage();
          page.clickButtonWithDestination(nextPageName);
        }
        
        if(currentURL.includes( '/land-plant-list/')) //page is LandPlantList
        {
          cy.log('Currently on LandPlantList'); 
          if(nextPageName === "LandPlantList")
          {
            cy.log('Already there.'); 
            return;
          }
          const page = new LandPlantListPage();
          page.clickButtonWithDestination(nextPageName);
        }
    });  
  }

  
  goToPage(curentPage:string, nextPageName:string) { 
		cy.log('goToPage :' + curentPage + ' > ' + nextPageName); 
    //use this to continue the user journet and not start over from the dashboard.
 
    if(curentPage === "")
    {
      return "TacFarmDashboard";
    }
    if(curentPage === "TacFarmDashboard")
    {
      const page = new TacFarmDashboardPage();
      page.clickButtonWithDestination(nextPageName);
    }
    if(curentPage === "LandPlantList")
    {
      const page = new LandPlantListPage();
      page.clickButtonWithDestination(nextPageName);
    } 
    return nextPageName;
  }
  
  visitPage_old(pageName:string) { 
    //use this if you are ok with resetting the journey and starting from the dashboard
		cy.log('visitPage :' + pageName); 

    let currentURL = ""
    cy.url().then(url => {
        currentURL = url
        if(currentURL.includes( '/tac-farm-dashboard/')) //page is TacFarmDashboard
        {
          if(pageName === "TacFarmDashboard")
          {
            return;
          }
          const page = new TacFarmDashboardPage();
          page.visit();
        }
        
        if(currentURL.includes( '/land-plant-list/')) //page is LandPlantList
        {
          if(pageName === "LandPlantList")
          {
            return;
          }
          const page = new LandPlantListPage();
          page.visit();
        }
    }); 
  } 

  
  
  visitPage(pageName:string) { 
    //use this if you are ok with resetting the journey and starting from the dashboard
		cy.log('visitPage :' + pageName); 
    if(pageName === "TacFarmDashboard")
    {
      const page = new TacFarmDashboardPage();
      page.visit();
    }
    if(pageName === "LandPlantList")
    {
      const page = new LandPlantListPage();
      page.visit();
    }
     
    return pageName;
  } 
}
export default RoutingAssistant;
