
import { TacFarmDashboardPage } from "./pages/TacFarmDashboard"; 
import { LandPlantListPage } from "./pages/LandPlantList";

class RoutingAssistant {
    
  goToPage(nextPageName:string) { 
		cy.log('goToPage :' + nextPageName); 
 
    let currentURL = ""
    cy.url().then(url => {
        currentURL = url
    });
		cy.log('Current Url :' + currentURL); 

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
    
  }

  
  visitPage(pageName:string) { 

    let currentURL = ""
    cy.url().then(url => {
        currentURL = url
    });

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
    
  }
 
 
}
export default RoutingAssistant;
