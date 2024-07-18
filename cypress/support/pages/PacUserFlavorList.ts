/* eslint-disable no-dupe-else-if */

import { PacUserFlavorListPageSelectors  as PageSelectors } from '../selectors/PacUserFlavorList';
import { PacUserFlavorListPageSettings  as PageSettings } from './settings/PacUserFlavorList';
import { PacUserFlavorListPageTexts as PageTexts } from '../texts/PacUserFlavorList';
import { pageUrlPrefixes as PageUrlPrefixes } from '../urls/pageUrlPrefixes';
import   RoutingAssistant   from '../routingAssistant'

export class PacUserFlavorListPage {

    visit() {
		cy.log('PacUserFlavorListPage.visit() start');

        if(!this.isLoginRequired()){
            //go to it directly
            cy.visit(PageUrlPrefixes.pacUserFlavorList + '/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login required');
        const routingAssistant = new RoutingAssistant();
        // eslint-disable-next-line prefer-const
        let currentPage = ""

        routingAssistant.goToPage(currentPage,'PacUserFlavorList');

        cy.url().then(url => {
            if(!url.includes( PageUrlPrefixes.pacUserFlavorList + '/'))
            {
                //try just in case. Api may override empty url context code
                cy.visit(PageUrlPrefixes.pacUserFlavorList + '/00000000-0000-0000-0000-000000000000');
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
        cy.url().should('include', PageUrlPrefixes.pacUserFlavorList);
    }

    verifyPageElements() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.flavorDisplayOrderHeaderIsVisible){
                cy.get(PageSelectors.flavorDisplayOrderHeader)
                .should('be.visible')
                .should('include.text', PageTexts.flavorDisplayOrderHeaderText);

                cy.get(PageSelectors.flavorDisplayOrderHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorDisplayOrderHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.flavorIsActiveHeaderIsVisible){
                cy.get(PageSelectors.flavorIsActiveHeader)
                .should('be.visible')
                .should('include.text', PageTexts.flavorIsActiveHeaderText);

                cy.get(PageSelectors.flavorIsActiveHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorIsActiveHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.flavorLookupEnumNameHeaderIsVisible){
                cy.get(PageSelectors.flavorLookupEnumNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.flavorLookupEnumNameHeaderText);

                cy.get(PageSelectors.flavorLookupEnumNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorLookupEnumNameHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.flavorNameHeaderIsVisible){
                cy.get(PageSelectors.flavorNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.flavorNameHeaderText);

                cy.get(PageSelectors.flavorNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorNameHeaderSortUpIndicator)
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
        //cy.log('Verifying row button deleteAsyncButtonLinkFlavorCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkFlavorCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkFlavorCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkFlavorCode...');
        //cy.get(PageSelectors.detailsLinkFlavorCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkFlavorCodeRowButtonText);
    }

    verifySort() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.flavorDisplayOrderHeaderIsVisible){
                cy.get(PageSelectors.flavorDisplayOrderHeader)
                .should('be.visible')
                .should('include.text', PageTexts.flavorDisplayOrderHeaderText);

                cy.get(PageSelectors.flavorDisplayOrderHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorDisplayOrderHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorDisplayOrderHeader)
                .click()
                .click()
                .get(PageSelectors.flavorDisplayOrderHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.flavorDisplayOrderHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.flavorDisplayOrderHeader)
                        .click()
                        .get(PageSelectors.flavorDisplayOrderHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.flavorDisplayOrderHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.flavorDisplayOrderHeader)
                        .click()
                        .get(PageSelectors.flavorDisplayOrderHeaderSortDownIndicator)
                        .should('exist');
                    }
                });

            }
            if(PageSettings.flavorIsActiveHeaderIsVisible){
                cy.get(PageSelectors.flavorIsActiveHeader)
                .should('be.visible')
                .should('include.text', PageTexts.flavorIsActiveHeaderText);

                cy.get(PageSelectors.flavorIsActiveHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorIsActiveHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorIsActiveHeader)
                .click()
                .click()
                .get(PageSelectors.flavorIsActiveHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.flavorIsActiveHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.flavorIsActiveHeader)
                        .click()
                        .get(PageSelectors.flavorIsActiveHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.flavorIsActiveHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.flavorIsActiveHeader)
                        .click()
                        .get(PageSelectors.flavorIsActiveHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.flavorLookupEnumNameHeaderIsVisible){
                cy.get(PageSelectors.flavorLookupEnumNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.flavorLookupEnumNameHeaderText);

                cy.get(PageSelectors.flavorLookupEnumNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorLookupEnumNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorLookupEnumNameHeader)
                .click()
                .click()
                .get(PageSelectors.flavorLookupEnumNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.flavorLookupEnumNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.flavorLookupEnumNameHeader)
                        .click()
                        .get(PageSelectors.flavorLookupEnumNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.flavorLookupEnumNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.flavorLookupEnumNameHeader)
                        .click()
                        .get(PageSelectors.flavorLookupEnumNameHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.flavorNameHeaderIsVisible){
                cy.get(PageSelectors.flavorNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.flavorNameHeaderText);

                cy.get(PageSelectors.flavorNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorNameHeader)
                .click()
                .click()
                .get(PageSelectors.flavorNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.flavorNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.flavorNameHeader)
                        .click()
                        .get(PageSelectors.flavorNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.flavorNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.flavorNameHeader)
                        .click()
                        .get(PageSelectors.flavorNameHeaderSortDownIndicator)
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
        //cy.log('Verifying row button deleteAsyncButtonLinkFlavorCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkFlavorCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkFlavorCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkFlavorCode...');
        //cy.get(PageSelectors.detailsLinkFlavorCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkFlavorCodeRowButtonText);
    }

    clickButtonWithDestination(destinationPageName) {
		cy.log('PacUserFlavorListPage.clickButtonWithDestination() destinationPageName: ' + destinationPageName);

        if (destinationPageName == 'XXXX') { //placeholder

        }

        else {
            throw new Error(`Unknown destination page name: ${destinationPageName}`);
        }
    }

}
export default PacUserFlavorListPage;

