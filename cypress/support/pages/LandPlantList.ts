
import { LandPlantListPageSelectors  as PageSelectors } from '../selectors/LandPlantList';
import { LandPlantListPageTexts as PageTexts } from '../texts/LandPlantList';
import   RoutingAssistant   from '../routingAssistant'


export class LandPlantListPage {
    visit() { 
		cy.log('LandPlantListPage.visit() start'); 

        if(!this.isLoginRequired()){  
            //go to it directly
            cy.visit('/land-plant-list/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login required'); 
        const routingAssistant = new RoutingAssistant();
        let currentPage = ""
        currentPage = routingAssistant.goToPage(currentPage, 'TacFarmDashboard'); //tacFarmDashboardBreadcrumb 
        routingAssistant.goToPage(currentPage,'LandPlantList'); 

    }
    

    isLoginRequired():boolean {
        const isLoginPage = false;
        if(isLoginPage){
            return false; //its register or login page, so its public
        }
        //look for public pages too
        return true;
    }


    verifyUrl() {
        cy.log('Verifying url...');
        cy.url().should('include', '/land-plant-list');
    }

    verifyPageElements() {
        
        //breadcrumbs text 
        cy.log('Verifying breadcrumb tacFarmDashboardBreadcrumb...');
            cy.get(PageSelectors.tacFarmDashboardBreadcrumbText)
            .should('be.visible')
            .should('include.text', PageTexts.tacFarmDashboardBreadcrumbText);

        

        //column headers
        cy.log('Verifying column headers...');
        cy.get(PageSelectors.plantCodeHeader)
            .should('not.exist');
        cy.get(PageSelectors.someIntValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someIntValHeaderText); 
        cy.get(PageSelectors.someBigIntValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someBigIntValHeaderText); 
        cy.get(PageSelectors.someBitValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someBitValHeaderText); 
        cy.get(PageSelectors.isEditAllowedHeader)
            .should('be.visible')
            .should('include.text', PageTexts.isEditAllowedHeaderText); 
        cy.get(PageSelectors.isDeleteAllowedHeader)
            .should('be.visible')
            .should('include.text', PageTexts.isDeleteAllowedHeaderText); 
        cy.get(PageSelectors.someFloatValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someFloatValHeaderText); 
        cy.get(PageSelectors.someDecimalValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someDecimalValHeaderText); 
        cy.get(PageSelectors.someUTCDateTimeValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someUTCDateTimeValHeaderText); 
        cy.get(PageSelectors.someDateValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someDateValHeaderText); 
        cy.get(PageSelectors.someMoneyValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someMoneyValHeaderText); 
        cy.get(PageSelectors.someNVarCharValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someNVarCharValHeaderText); 
        cy.get(PageSelectors.someVarCharValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someVarCharValHeaderText); 
        cy.get(PageSelectors.someTextValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someTextValHeaderText); 
        cy.get(PageSelectors.somePhoneNumberHeader)
            .should('be.visible')
            .should('include.text', PageTexts.somePhoneNumberHeaderText); 
        cy.get(PageSelectors.someEmailAddressHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someEmailAddressHeaderText); 
        cy.get(PageSelectors.flavorNameHeader)
            .should('be.visible')
            .should('include.text', PageTexts.flavorNameHeaderText); 
        cy.get(PageSelectors.flavorCodeHeader)
            .should('be.visible')
            .should('include.text', PageTexts.flavorCodeHeaderText); 
        cy.get(PageSelectors.someIntConditionalOnDeletableHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someIntConditionalOnDeletableHeaderText); 
        cy.get(PageSelectors.nVarCharAsUrlHeader)
            .should('be.visible')
            .should('include.text', PageTexts.nVarCharAsUrlHeaderText); 
        cy.get(PageSelectors.updateLinkPlantCodeHeader)
            .should('exist');
        cy.get(PageSelectors.deleteAsyncButtonLinkPlantCodeHeader)
            .should('exist');
        cy.get(PageSelectors.detailsLinkPlantCodeHeader)
            .should('exist');

        cy.log('Verifying title text...');
        if(PageTexts.titleText.length > 0){
            cy.get(PageSelectors.title)
            .should('be.visible')
            .should('include.text', PageTexts.titleText);
        } else {
            cy.get(PageSelectors.title)
            .should('not.be.visible');
        }
            
        cy.log('Verifying intro text...');
        if(PageTexts.introText.length > 0){
            cy.get(PageSelectors.introText)
            .should('be.visible')
            .should('include.text', PageTexts.introText);
        } else {
            cy.get(PageSelectors.introText)
            .should('not.be.visible');
        }

        

        //report buttons 
        

        

        //row button text - not ignored
        //cy.log('Verifying row button deleteAsyncButtonLinkPlantCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkPlantCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkPlantCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkPlantCode...');
        //cy.get(PageSelectors.detailsLinkPlantCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkPlantCodeRowButtonText);
    }

    clickButtonWithDestination(destinationPageName) {
		cy.log('LandPlantListPage.clickButtonWithDestination() destinationPageName: ' + destinationPageName); 

        const updateLinkPlantCodeColumnIsVisible = false;
        const deleteAsyncButtonLinkPlantCodeColumnIsVisible = true;
        const detailsLinkPlantCodeColumnIsVisible = true;
        
        if (destinationPageName == 'XXXX') { //placeholder

        } 
        //report buttons 
        else if (destinationPageName == 'LandAddPlant') {  //add button
            cy.log('click add button...');
            cy.get(PageSelectors.addButton)
                .click();
            cy.wait(2000);
        }  
          
         
        //row buttons
        else if (destinationPageName == 'PlantUserDetails' && //updateLinkPlantCode
            updateLinkPlantCodeColumnIsVisible) {  
            cy.log('click row button updateLinkPlantCode...');
            cy.get(PageSelectors.updateLinkPlantCodeRowButton) 
            .click();
            cy.wait(2000);
        } 
        else if (destinationPageName == 'PlantUserDelete' && //deleteAsyncButtonLinkPlantCode
            deleteAsyncButtonLinkPlantCodeColumnIsVisible) { 
            cy.log('click row button deleteAsyncButtonLinkPlantCode...');
            cy.get(PageSelectors.deleteAsyncButtonLinkPlantCodeRowButton)  
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'PlantUserDetails' &&   //detailsLinkPlantCode
            detailsLinkPlantCodeColumnIsVisible) {
            cy.log('click row button detailsLinkPlantCode...');
            cy.get(PageSelectors.detailsLinkPlantCodeRowButton) 
            .click();
            cy.wait(2000);
        } 
        else {
            //throw error
        }
    }
}
export default LandPlantListPage;
