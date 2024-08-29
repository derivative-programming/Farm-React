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
            if(PageSettings.conditionalBtnExampleLinkLandCodeHeaderIsVisible){
                cy.get(PageSelectors.conditionalBtnExampleLinkLandCodeHeader)
                .should('exist');

                cy.get(PageSelectors.conditionalBtnExampleLinkLandCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.conditionalBtnExampleLinkLandCodeHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.testFileDownloadLinkPacCodeHeaderIsVisible){
                cy.get(PageSelectors.testFileDownloadLinkPacCodeHeader)
                .should('exist');

                cy.get(PageSelectors.testFileDownloadLinkPacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testFileDownloadLinkPacCodeHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.testConditionalFileDownloadLinkPacCodeHeaderIsVisible){
                cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeader)
                .should('exist');

                cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.testAsyncFlowReqLinkPacCodeHeaderIsVisible){
                cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeHeader)
                .should('exist');

                cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.testConditionalAsyncFlowReqLinkPacCodeHeaderIsVisible){
                cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeader)
                .should('exist');

                cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeaderSortUpIndicator)
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
            if(PageSettings.conditionalBtnExampleLinkLandCodeHeaderIsVisible){
                cy.get(PageSelectors.conditionalBtnExampleLinkLandCodeHeader)
                .should('exist');

                cy.get(PageSelectors.conditionalBtnExampleLinkLandCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.conditionalBtnExampleLinkLandCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.conditionalBtnExampleLinkLandCodeHeader)
                .click()
                .click()
                .get(PageSelectors.conditionalBtnExampleLinkLandCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.conditionalBtnExampleLinkLandCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.conditionalBtnExampleLinkLandCodeHeader)
                        .click()
                        .get(PageSelectors.conditionalBtnExampleLinkLandCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.conditionalBtnExampleLinkLandCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.conditionalBtnExampleLinkLandCodeHeader)
                        .click()
                        .get(PageSelectors.conditionalBtnExampleLinkLandCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.testFileDownloadLinkPacCodeHeaderIsVisible){
                cy.get(PageSelectors.testFileDownloadLinkPacCodeHeader)
                .should('exist');

                cy.get(PageSelectors.testFileDownloadLinkPacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testFileDownloadLinkPacCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testFileDownloadLinkPacCodeHeader)
                .click()
                .click()
                .get(PageSelectors.testFileDownloadLinkPacCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.testFileDownloadLinkPacCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.testFileDownloadLinkPacCodeHeader)
                        .click()
                        .get(PageSelectors.testFileDownloadLinkPacCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.testFileDownloadLinkPacCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.testFileDownloadLinkPacCodeHeader)
                        .click()
                        .get(PageSelectors.testFileDownloadLinkPacCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.testConditionalFileDownloadLinkPacCodeHeaderIsVisible){
                cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeader)
                .should('exist');

                cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeader)
                .click()
                .click()
                .get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeader)
                        .click()
                        .get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeader)
                        .click()
                        .get(PageSelectors.testConditionalFileDownloadLinkPacCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.testAsyncFlowReqLinkPacCodeHeaderIsVisible){
                cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeHeader)
                .should('exist');

                cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeHeader)
                .click()
                .click()
                .get(PageSelectors.testAsyncFlowReqLinkPacCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.testAsyncFlowReqLinkPacCodeHeader)
                        .click()
                        .get(PageSelectors.testAsyncFlowReqLinkPacCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.testAsyncFlowReqLinkPacCodeHeader)
                        .click()
                        .get(PageSelectors.testAsyncFlowReqLinkPacCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.testConditionalAsyncFlowReqLinkPacCodeHeaderIsVisible){
                cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeader)
                .should('exist');

                cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeader)
                .click()
                .click()
                .get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeader)
                        .click()
                        .get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeader)
                        .click()
                        .get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeHeaderSortDownIndicator)
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
        const conditionalBtnExampleLinkLandCodeColumnIsVisible = true;
        const testFileDownloadLinkPacCodeColumnIsVisible = true;
        const testConditionalFileDownloadLinkPacCodeColumnIsVisible = true;
        const testAsyncFlowReqLinkPacCodeColumnIsVisible = true;
        const testConditionalAsyncFlowReqLinkPacCodeColumnIsVisible = true;
        if (destinationPageName == 'XXXX') { //placeholder

        }
        else if (destinationPageName == 'LandPlantList' &&   //fieldOnePlantListLinkLandCode
            fieldOnePlantListLinkLandCodeColumnIsVisible) {
            cy.log('click row button fieldOnePlantListLinkLandCode...');
            cy.get(PageSelectors.fieldOnePlantListLinkLandCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'LandPlantList' &&   //conditionalBtnExampleLinkLandCode
            conditionalBtnExampleLinkLandCodeColumnIsVisible) {
            cy.log('click row button conditionalBtnExampleLinkLandCode...');
            cy.get(PageSelectors.conditionalBtnExampleLinkLandCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'Details' &&   //testFileDownloadLinkPacCode
            testFileDownloadLinkPacCodeColumnIsVisible) {
            cy.log('click row button testFileDownloadLinkPacCode...');
            cy.get(PageSelectors.testFileDownloadLinkPacCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'Details' &&   //testConditionalFileDownloadLinkPacCode
            testConditionalFileDownloadLinkPacCodeColumnIsVisible) {
            cy.log('click row button testConditionalFileDownloadLinkPacCode...');
            cy.get(PageSelectors.testConditionalFileDownloadLinkPacCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'PacUserTestAsyncFlowReq' && //testAsyncFlowReqLinkPacCode
            testAsyncFlowReqLinkPacCodeColumnIsVisible) {
            cy.log('click row button testAsyncFlowReqLinkPacCode...');
            cy.get(PageSelectors.testAsyncFlowReqLinkPacCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'Details' &&   //testConditionalAsyncFlowReqLinkPacCode
            testConditionalAsyncFlowReqLinkPacCodeColumnIsVisible) {
            cy.log('click row button testConditionalAsyncFlowReqLinkPacCode...');
            cy.get(PageSelectors.testConditionalAsyncFlowReqLinkPacCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else {
            throw new Error(`Unknown destination page name: ${destinationPageName}`);
        }
    }

}
export default TacFarmDashboardPage;

