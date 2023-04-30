import { PlantUserDetailsPageSelectors  as PageSelectors } from '../selectors/PlantUserDetails';
import { PlantUserDetailsPageTexts as PageTexts } from '../texts/PlantUserDetails';
import   RoutingAssistant   from '../routingAssistant'
export class PlantUserDetailsPage {
    visit() { 
		cy.log('PlantUserDetailsPage.visit() start'); 
        let currentURL = ""
        cy.url().then(url => {
            currentURL = url
        });
        if(currentURL.includes('/plant-user-details/'))
        {
            cy.log('Already there'); 
            return;  //already there
        }
        if(!this.isLoginRequired()){  
            //go to it directly
            cy.visit('/plant-user-details/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login required'); 
        const routingAssistant = new RoutingAssistant();
        routingAssistant.goToPage('TacFarmDashboard'); //tacFarmDashboardBreadcrumb
        routingAssistant.goToPage('PlantUserDetails'); 
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
        cy.url().should('include', '/plant-user-details');
    }
    verifyPageElements() {
        //breadcrumbs text
        cy.log('Verifying breadcrumb tacFarmDashboardBreadcrumb...');
            cy.get(PageSelectors.tacFarmDashboardBreadcrumbText)
            .should('be.visible')
            .should('include.text', PageTexts.tacFarmDashboardBreadcrumbText);
        //column headers
        cy.log('Verifying column headers...');
        cy.get(PageSelectors.flavorNameHeader)
            .should('be.visible')
            .should('include.text', PageTexts.flavorNameHeaderText);
        cy.get(PageSelectors.isDeleteAllowedHeader)
            .should('be.visible')
            .should('include.text', PageTexts.isDeleteAllowedHeaderText);
        cy.get(PageSelectors.isEditAllowedHeader)
            .should('be.visible')
            .should('include.text', PageTexts.isEditAllowedHeaderText);
        cy.get(PageSelectors.otherFlavorHeader)
            .should('be.visible')
            .should('include.text', PageTexts.otherFlavorHeaderText);
        cy.get(PageSelectors.someBigIntValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someBigIntValHeaderText);
        cy.get(PageSelectors.someBitValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someBitValHeaderText);
        cy.get(PageSelectors.someDateValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someDateValHeaderText);
        cy.get(PageSelectors.someDecimalValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someDecimalValHeaderText);
        cy.get(PageSelectors.someEmailAddressHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someEmailAddressHeaderText);
        cy.get(PageSelectors.someFloatValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someFloatValHeaderText);
        cy.get(PageSelectors.someIntValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someIntValHeaderText);
        cy.get(PageSelectors.someMoneyValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someMoneyValHeaderText);
        cy.get(PageSelectors.someNVarCharValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someNVarCharValHeaderText);
        cy.get(PageSelectors.somePhoneNumberHeader)
            .should('be.visible')
            .should('include.text', PageTexts.somePhoneNumberHeaderText);
        cy.get(PageSelectors.someTextValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someTextValHeaderText);
        cy.get(PageSelectors.someUniqueidentifierValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someUniqueidentifierValHeaderText);
        cy.get(PageSelectors.someUTCDateTimeValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someUTCDateTimeValHeaderText);
        cy.get(PageSelectors.someVarCharValHeader)
            .should('be.visible')
            .should('include.text', PageTexts.someVarCharValHeaderText);
        cy.get(PageSelectors.nVarCharAsUrlHeader)
            .should('be.visible')
            .should('include.text', PageTexts.nVarCharAsUrlHeaderText);
        cy.get(PageSelectors.randomPropertyUpdatesLinkPlantCodeHeader)
            .should('be.visible')
            .should('include.text', PageTexts.randomPropertyUpdatesLinkPlantCodeHeaderText);
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
        //cy.log('Verifying row button deleteAsyncButtonLinkCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkCode...');
        //cy.get(PageSelectors.detailsLinkCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkCodeRowButtonText);
    }
    clickButtonWithDestination(destinationPageName) {
        if (destinationPageName == 'XXXX') { //placeholder
        } 
        //report buttons 
        else if (destinationPageName == 'PlantAdd') {  //add button
            cy.log('click add button...');

        }
        else if (destinationPageName == 'plantUserPropertyRandomUpdate') { //randomPropertyUpdatesLinkPlantCode
            cy.log('click row button randomPropertyUpdatesLinkPlantCode...');
            cy.get(PageSelectors.randomPropertyUpdatesLinkPlantCodeRowButton).eq(0)
            .click();
        }
        else {
            //throw error
        }
    }
}
export default PlantUserDetailsPage;

