/* eslint-disable no-dupe-else-if */

import { PacUserTacListPageSelectors  as PageSelectors } from '../selectors/PacUserTacList';
import { PacUserTacListPageSettings  as PageSettings } from './settings/PacUserTacList';
import { PacUserTacListPageTexts as PageTexts } from '../texts/PacUserTacList';
import { pageUrlPrefixes as PageUrlPrefixes } from '../urls/pageUrlPrefixes';
import   RoutingAssistant   from '../routingAssistant'

export class PacUserTacListPage {

    visit() {
		cy.log('PacUserTacListPage.visit() start');

        if(!this.isLoginRequired()){
            //go to it directly
            cy.visit(PageUrlPrefixes.pacUserTacList + '/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login required');
        const routingAssistant = new RoutingAssistant();
        let currentPage = ""

        routingAssistant.goToPage(currentPage,'PacUserTacList');

        cy.url().then(url => {
            if(!url.includes( PageUrlPrefixes.pacUserTacList + '/'))
            {
                //try just in case. Api may override empty url context code
                cy.visit(PageUrlPrefixes.pacUserTacList + '/00000000-0000-0000-0000-000000000000');
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
        cy.url().should('include', PageUrlPrefixes.pacUserTacList);
    }

    verifyPageElements() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.tacDisplayOrderHeaderIsVisible){
                cy.get(PageSelectors.tacDisplayOrderHeader)
                .should('be.visible')
                .should('include.text', PageTexts.tacDisplayOrderHeaderText);

                cy.get(PageSelectors.tacDisplayOrderHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacDisplayOrderHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.tacIsActiveHeaderIsVisible){
                cy.get(PageSelectors.tacIsActiveHeader)
                .should('be.visible')
                .should('include.text', PageTexts.tacIsActiveHeaderText);

                cy.get(PageSelectors.tacIsActiveHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacIsActiveHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.tacLookupEnumNameHeaderIsVisible){
                cy.get(PageSelectors.tacLookupEnumNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.tacLookupEnumNameHeaderText);

                cy.get(PageSelectors.tacLookupEnumNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacLookupEnumNameHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.tacNameHeaderIsVisible){
                cy.get(PageSelectors.tacNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.tacNameHeaderText);

                cy.get(PageSelectors.tacNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacNameHeaderSortUpIndicator)
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
        //cy.log('Verifying row button deleteAsyncButtonLinkTacCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkTacCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkTacCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkTacCode...');
        //cy.get(PageSelectors.detailsLinkTacCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkTacCodeRowButtonText);
    }

    verifySort() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.tacDisplayOrderHeaderIsVisible){
                cy.get(PageSelectors.tacDisplayOrderHeader)
                .should('be.visible')
                .should('include.text', PageTexts.tacDisplayOrderHeaderText);

                cy.get(PageSelectors.tacDisplayOrderHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacDisplayOrderHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacDisplayOrderHeader)
                .click()
                .click()
                .get(PageSelectors.tacDisplayOrderHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.tacDisplayOrderHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.tacDisplayOrderHeader)
                        .click()
                        .get(PageSelectors.tacDisplayOrderHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.tacDisplayOrderHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.tacDisplayOrderHeader)
                        .click()
                        .get(PageSelectors.tacDisplayOrderHeaderSortDownIndicator)
                        .should('exist');
                    }
                });

            }
            if(PageSettings.tacIsActiveHeaderIsVisible){
                cy.get(PageSelectors.tacIsActiveHeader)
                .should('be.visible')
                .should('include.text', PageTexts.tacIsActiveHeaderText);

                cy.get(PageSelectors.tacIsActiveHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacIsActiveHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacIsActiveHeader)
                .click()
                .click()
                .get(PageSelectors.tacIsActiveHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.tacIsActiveHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.tacIsActiveHeader)
                        .click()
                        .get(PageSelectors.tacIsActiveHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.tacIsActiveHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.tacIsActiveHeader)
                        .click()
                        .get(PageSelectors.tacIsActiveHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.tacLookupEnumNameHeaderIsVisible){
                cy.get(PageSelectors.tacLookupEnumNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.tacLookupEnumNameHeaderText);

                cy.get(PageSelectors.tacLookupEnumNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacLookupEnumNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacLookupEnumNameHeader)
                .click()
                .click()
                .get(PageSelectors.tacLookupEnumNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.tacLookupEnumNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.tacLookupEnumNameHeader)
                        .click()
                        .get(PageSelectors.tacLookupEnumNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.tacLookupEnumNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.tacLookupEnumNameHeader)
                        .click()
                        .get(PageSelectors.tacLookupEnumNameHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.tacNameHeaderIsVisible){
                cy.get(PageSelectors.tacNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.tacNameHeaderText);

                cy.get(PageSelectors.tacNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacNameHeader)
                .click()
                .click()
                .get(PageSelectors.tacNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.tacNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.tacNameHeader)
                        .click()
                        .get(PageSelectors.tacNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.tacNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.tacNameHeader)
                        .click()
                        .get(PageSelectors.tacNameHeaderSortDownIndicator)
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
        //cy.log('Verifying row button deleteAsyncButtonLinkTacCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkTacCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkTacCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkTacCode...');
        //cy.get(PageSelectors.detailsLinkTacCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkTacCodeRowButtonText);
    }

    clickButtonWithDestination(destinationPageName) {
		cy.log('PacUserTacListPage.clickButtonWithDestination() destinationPageName: ' + destinationPageName);

        if (destinationPageName == 'XXXX') { //placeholder

        }

        else {
            throw new Error(`Unknown destination page name: ${destinationPageName}`);
        }
    }

}
export default PacUserTacListPage;

