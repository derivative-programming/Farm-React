import { TacFarmDashboardPageSelectors  as PageSelectors } from '../selectors/TacFarmDashboard';
import { TacFarmDashboardPageTexts as PageTexts } from '../texts/TacFarmDashboard';
import { pageUrlPrefixes as PageUrlPrefixes } from '../urls/pageUrlPrefixes';
import   RoutingAssistant   from '../routingAssistant'
export class TacFarmDashboardPage {
    visit() { 
		cy.log('TacFarmDashboardPage.visit() start'); 
        let currentURL = ""
        cy.url().then(url => {
            currentURL = url
        });
        if(currentURL.includes(PageUrlPrefixes.tacFarmDashboard + '/'))
        {
            cy.log('Already there'); 
            return;  //already there
        }
        if(!this.isLoginRequired()){  
            //go to it directly
            cy.visit(PageUrlPrefixes.tacFarmDashboard + '/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login required'); 
        const routingAssistant = new RoutingAssistant();

        let currentPage = ""
        currentPage = routingAssistant.goToPage(currentPage,'TacFarmDashboard'); 
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
        cy.url().should('include', PageUrlPrefixes.tacFarmDashboard);
    }
    verifyPageElements() {

        //column headers
        cy.log('Verifying column headers...');
        // cy.get(PageSelectors.fieldOnePlantListLinkLandCodeHeader)
        //     .should('exist');
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
		cy.log('TacFarmDashboardPage.clickButtonWithDestination() destinationPageName: ' + destinationPageName); 
        if (destinationPageName == 'XXXX') { //placeholder
        } 
        //report buttons 
        else if (destinationPageName == 'TacAdd') {  //add button
            cy.log('click add button...');

        }
        else if (destinationPageName == 'LandPlantList') { //fieldOnePlantListLinkLandCode
            cy.log('click row button fieldOnePlantListLinkLandCode...');
            cy.get(PageSelectors.fieldOnePlantListLinkLandCodeRowButton).eq(0)
            .click();
        }
        else if (destinationPageName == 'LandPlantList') { //conditionalBtnExampleLinkLandCode
            cy.log('click row button conditionalBtnExampleLinkLandCode...');
            cy.get(PageSelectors.conditionalBtnExampleLinkLandCodeRowButton).eq(0)
            .click();
        }
        else {
            //throw error
        }
    }
}
export default TacFarmDashboardPage;

