/* eslint-disable no-dupe-else-if */

import { PacUserLandListPageSelectors  as PageSelectors } from '../selectors/PacUserLandList';
import { PacUserLandListPageSettings  as PageSettings } from './settings/PacUserLandList';
import { PacUserLandListPageTexts as PageTexts } from '../texts/PacUserLandList';
import { pageUrlPrefixes as PageUrlPrefixes } from '../urls/pageUrlPrefixes';
import   RoutingAssistant   from '../routingAssistant'

export class PacUserLandListPage {

    visit() {
		cy.log('PacUserLandListPage.visit() start');

        if(!this.isLoginRequired()){
            //go to it directly
            cy.visit(PageUrlPrefixes.pacUserLandList + '/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login required');
        const routingAssistant = new RoutingAssistant();
        let currentPage = ""

        routingAssistant.goToPage(currentPage,'PacUserLandList');

        cy.url().then(url => {
            if(!url.includes( PageUrlPrefixes.pacUserLandList + '/'))
            {
                //try just in case. Api may override empty url context code
                cy.visit(PageUrlPrefixes.pacUserLandList + '/00000000-0000-0000-0000-000000000000');
            }
        });

    }

    isLoginRequired():boolean {
        const isAuthorizationRequired = false;
        if(isAuthorizationRequired){
            return true;
        }
        //look for public pages
        return false;
    }

    verifyUrl() {
        cy.log('Verifying url...');
        cy.url().should('include', PageUrlPrefixes.pacUserLandList);
    }

    verifyPageElements() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.landDisplayOrderHeaderIsVisible){
                cy.get(PageSelectors.landDisplayOrderHeader)
                .should('be.visible')
                .should('include.text', PageTexts.landDisplayOrderHeaderText);

                cy.get(PageSelectors.landDisplayOrderHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landDisplayOrderHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.landIsActiveHeaderIsVisible){
                cy.get(PageSelectors.landIsActiveHeader)
                .should('be.visible')
                .should('include.text', PageTexts.landIsActiveHeaderText);

                cy.get(PageSelectors.landIsActiveHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landIsActiveHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.landLookupEnumNameHeaderIsVisible){
                cy.get(PageSelectors.landLookupEnumNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.landLookupEnumNameHeaderText);

                cy.get(PageSelectors.landLookupEnumNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landLookupEnumNameHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.landNameHeaderIsVisible){
                cy.get(PageSelectors.landNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.landNameHeaderText);

                cy.get(PageSelectors.landNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landNameHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.pacNameHeaderIsVisible){
                cy.get(PageSelectors.pacNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.pacNameHeaderText);

                cy.get(PageSelectors.pacNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.pacNameHeaderSortUpIndicator)
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
        //cy.log('Verifying row button deleteAsyncButtonLinkLandCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkLandCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkLandCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkLandCode...');
        //cy.get(PageSelectors.detailsLinkLandCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkLandCodeRowButtonText);
    }

    verifySort() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.landDisplayOrderHeaderIsVisible){
                cy.get(PageSelectors.landDisplayOrderHeader)
                .should('be.visible')
                .should('include.text', PageTexts.landDisplayOrderHeaderText);

                cy.get(PageSelectors.landDisplayOrderHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landDisplayOrderHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landDisplayOrderHeader)
                .click()
                .click()
                .get(PageSelectors.landDisplayOrderHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.landDisplayOrderHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.landDisplayOrderHeader)
                        .click()
                        .get(PageSelectors.landDisplayOrderHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.landDisplayOrderHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.landDisplayOrderHeader)
                        .click()
                        .get(PageSelectors.landDisplayOrderHeaderSortDownIndicator)
                        .should('exist');
                    }
                });

            }
            if(PageSettings.landIsActiveHeaderIsVisible){
                cy.get(PageSelectors.landIsActiveHeader)
                .should('be.visible')
                .should('include.text', PageTexts.landIsActiveHeaderText);

                cy.get(PageSelectors.landIsActiveHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landIsActiveHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landIsActiveHeader)
                .click()
                .click()
                .get(PageSelectors.landIsActiveHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.landIsActiveHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.landIsActiveHeader)
                        .click()
                        .get(PageSelectors.landIsActiveHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.landIsActiveHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.landIsActiveHeader)
                        .click()
                        .get(PageSelectors.landIsActiveHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.landLookupEnumNameHeaderIsVisible){
                cy.get(PageSelectors.landLookupEnumNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.landLookupEnumNameHeaderText);

                cy.get(PageSelectors.landLookupEnumNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landLookupEnumNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landLookupEnumNameHeader)
                .click()
                .click()
                .get(PageSelectors.landLookupEnumNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.landLookupEnumNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.landLookupEnumNameHeader)
                        .click()
                        .get(PageSelectors.landLookupEnumNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.landLookupEnumNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.landLookupEnumNameHeader)
                        .click()
                        .get(PageSelectors.landLookupEnumNameHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.landNameHeaderIsVisible){
                cy.get(PageSelectors.landNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.landNameHeaderText);

                cy.get(PageSelectors.landNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landNameHeader)
                .click()
                .click()
                .get(PageSelectors.landNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.landNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.landNameHeader)
                        .click()
                        .get(PageSelectors.landNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.landNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.landNameHeader)
                        .click()
                        .get(PageSelectors.landNameHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.pacNameHeaderIsVisible){
                cy.get(PageSelectors.pacNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.pacNameHeaderText);

                cy.get(PageSelectors.pacNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.pacNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.pacNameHeader)
                .click()
                .click()
                .get(PageSelectors.pacNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.pacNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.pacNameHeader)
                        .click()
                        .get(PageSelectors.pacNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.pacNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.pacNameHeader)
                        .click()
                        .get(PageSelectors.pacNameHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
        }

        //report buttons

        //row button text - not ignored
        //cy.log('Verifying row button deleteAsyncButtonLinkLandCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkLandCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkLandCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkLandCode...');
        //cy.get(PageSelectors.detailsLinkLandCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkLandCodeRowButtonText);
    }

    clickButtonWithDestination(destinationPageName) {
		cy.log('PacUserLandListPage.clickButtonWithDestination() destinationPageName: ' + destinationPageName);

        if (destinationPageName == 'XXXX') { //placeholder

        }

        else {
            throw new Error(`Unknown destination page name: ${destinationPageName}`);
        }
    }

}
export default PacUserLandListPage;

