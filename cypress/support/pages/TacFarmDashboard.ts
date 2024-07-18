/* eslint-disable no-dupe-else-if */

import { TacFarmDashboardPageSelectors  as PageSelectors } from '../selectors/TacFarmDashboard';
import { TacFarmDashboardPageSettings  as PageSettings } from './settings/TacFarmDashboard';
import { TacFarmDashboardPageTexts as PageTexts } from '../texts/TacFarmDashboard';
import { pageUrlPrefixes as PageUrlPrefixes } from '../urls/pageUrlPrefixes';
import   RoutingAssistant   from '../routingAssistant'

export class TacFarmDashboardPage {

    visit() {
		cy.log('TacFarmDashboardPage.visit() start');

        if(!this.isLoginRequired()){
            //go to it directly
            cy.visit(PageUrlPrefixes.tacFarmDashboard + '/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login required');
        const routingAssistant = new RoutingAssistant();
        // eslint-disable-next-line prefer-const
        let currentPage = ""

        routingAssistant.goToPage(currentPage,'TacFarmDashboard');

        cy.url().then(url => {
            if(!url.includes( PageUrlPrefixes.tacFarmDashboard + '/'))
            {
                //try just in case. Api may override empty url context code
                cy.visit(PageUrlPrefixes.tacFarmDashboard + '/00000000-0000-0000-0000-000000000000');
            }
        });

    }

    isLoginRequired():boolean {
        const isAuthorizationRequired = true;
        if(isAuthorizationRequired){
            return true;
        }
        //look for public pages
        return false;
    }

    verifyUrl() {
        cy.log('Verifying url...');
        cy.url().should('include', PageUrlPrefixes.tacFarmDashboard);
    }

    verifyPageElements() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.fieldOnePlantListLinkLandCodeHeaderIsVisible){
                cy.get(PageSelectors.fieldOnePlantListLinkLandCodeHeader)
                .should('exist');

                cy.get(PageSelectors.fieldOnePlantListLinkLandCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.fieldOnePlantListLinkLandCodeHeaderSortUpIndicator)
                .should('not.exist');
            }

            cy.log('Verifying page size control...');
            cy.get(PageSelectors.pageSizeControl)
            .should('be.visible');

            cy.get(PageSelectors.pageSizeControlLabel)
            .should('be.visible');

            cy.log('Verifying pagination control...');
            cy.get(PageSelectors.pagingControl)
            .should('be.visible');

            cy.log('Verifying report result count display...');
            cy.get(PageSelectors.tableRowCountDisplay)
            .should('be.visible');
        }

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

        cy.get(PageSelectors.siteFooter)
            .should('be.visible')
            .should('include.text', PageTexts.siteFooterText);

        if(PageSettings.calculatedIsVisualizationGrid && !PageSettings.isFilterSectionHidden){

            cy.get(PageSelectors.filterSearchButton)
            .should('not.be.visible');

            cy.get(PageSelectors.filterRefreshButton)
            .should('not.be.visible');

            //default is closed
            cy.get(PageSelectors.filterHeader)
            .click()
            .get(PageSelectors.filterSearchButton)
            .should('be.visible')
            .get(PageSelectors.filterRefreshButton)
            .should('be.visible');

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

    verifySort() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.fieldOnePlantListLinkLandCodeHeaderIsVisible){
                cy.get(PageSelectors.fieldOnePlantListLinkLandCodeHeader)
                .should('exist');

                cy.get(PageSelectors.fieldOnePlantListLinkLandCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.fieldOnePlantListLinkLandCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.fieldOnePlantListLinkLandCodeHeader)
                .click()
                .click()
                .get(PageSelectors.fieldOnePlantListLinkLandCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.fieldOnePlantListLinkLandCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.fieldOnePlantListLinkLandCodeHeader)
                        .click()
                        .get(PageSelectors.fieldOnePlantListLinkLandCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.fieldOnePlantListLinkLandCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.fieldOnePlantListLinkLandCodeHeader)
                        .click()
                        .get(PageSelectors.fieldOnePlantListLinkLandCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
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
        const fieldOnePlantListLinkLandCodeColumnIsVisible = true;
        if (destinationPageName == 'XXXX') { //placeholder

        }
        else if (destinationPageName == 'LandPlantList' &&   //fieldOnePlantListLinkLandCode
            fieldOnePlantListLinkLandCodeColumnIsVisible) {
            cy.log('click row button fieldOnePlantListLinkLandCode...');
            cy.get(PageSelectors.fieldOnePlantListLinkLandCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else {
            throw new Error(`Unknown destination page name: ${destinationPageName}`);
        }
    }

}
export default TacFarmDashboardPage;

