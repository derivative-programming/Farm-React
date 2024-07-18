/* eslint-disable no-dupe-else-if */

import { PacUserDateGreaterThanFilterListPageSelectors  as PageSelectors } from '../selectors/PacUserDateGreaterThanFilterList';
import { PacUserDateGreaterThanFilterListPageSettings  as PageSettings } from './settings/PacUserDateGreaterThanFilterList';
import { PacUserDateGreaterThanFilterListPageTexts as PageTexts } from '../texts/PacUserDateGreaterThanFilterList';
import { pageUrlPrefixes as PageUrlPrefixes } from '../urls/pageUrlPrefixes';
import   RoutingAssistant   from '../routingAssistant'

export class PacUserDateGreaterThanFilterListPage {

    visit() {
		cy.log('PacUserDateGreaterThanFilterListPage.visit() start');

        if(!this.isLoginRequired()){
            //go to it directly
            cy.visit(PageUrlPrefixes.pacUserDateGreaterThanFilterList + '/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login required');
        const routingAssistant = new RoutingAssistant();
        // eslint-disable-next-line prefer-const
        let currentPage = ""

        routingAssistant.goToPage(currentPage,'PacUserDateGreaterThanFilterList');

        cy.url().then(url => {
            if(!url.includes( PageUrlPrefixes.pacUserDateGreaterThanFilterList + '/'))
            {
                //try just in case. Api may override empty url context code
                cy.visit(PageUrlPrefixes.pacUserDateGreaterThanFilterList + '/00000000-0000-0000-0000-000000000000');
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
        cy.url().should('include', PageUrlPrefixes.pacUserDateGreaterThanFilterList);
    }

    verifyPageElements() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.dateGreaterThanFilterDayCountHeaderIsVisible){
                cy.get(PageSelectors.dateGreaterThanFilterDayCountHeader)
                .should('be.visible')
                .should('include.text', PageTexts.dateGreaterThanFilterDayCountHeaderText);

                cy.get(PageSelectors.dateGreaterThanFilterDayCountHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.dateGreaterThanFilterDayCountHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.dateGreaterThanFilterDisplayOrderHeaderIsVisible){
                cy.get(PageSelectors.dateGreaterThanFilterDisplayOrderHeader)
                .should('be.visible')
                .should('include.text', PageTexts.dateGreaterThanFilterDisplayOrderHeaderText);

                cy.get(PageSelectors.dateGreaterThanFilterDisplayOrderHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.dateGreaterThanFilterDisplayOrderHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.dateGreaterThanFilterIsActiveHeaderIsVisible){
                cy.get(PageSelectors.dateGreaterThanFilterIsActiveHeader)
                .should('be.visible')
                .should('include.text', PageTexts.dateGreaterThanFilterIsActiveHeaderText);

                cy.get(PageSelectors.dateGreaterThanFilterIsActiveHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.dateGreaterThanFilterIsActiveHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.dateGreaterThanFilterLookupEnumNameHeaderIsVisible){
                cy.get(PageSelectors.dateGreaterThanFilterLookupEnumNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.dateGreaterThanFilterLookupEnumNameHeaderText);

                cy.get(PageSelectors.dateGreaterThanFilterLookupEnumNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.dateGreaterThanFilterLookupEnumNameHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.dateGreaterThanFilterNameHeaderIsVisible){
                cy.get(PageSelectors.dateGreaterThanFilterNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.dateGreaterThanFilterNameHeaderText);

                cy.get(PageSelectors.dateGreaterThanFilterNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.dateGreaterThanFilterNameHeaderSortUpIndicator)
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
        //cy.log('Verifying row button deleteAsyncButtonLinkDateGreaterThanFilterCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkDateGreaterThanFilterCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkDateGreaterThanFilterCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkDateGreaterThanFilterCode...');
        //cy.get(PageSelectors.detailsLinkDateGreaterThanFilterCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkDateGreaterThanFilterCodeRowButtonText);
    }

    verifySort() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.dateGreaterThanFilterDayCountHeaderIsVisible){
                cy.get(PageSelectors.dateGreaterThanFilterDayCountHeader)
                .should('be.visible')
                .should('include.text', PageTexts.dateGreaterThanFilterDayCountHeaderText);

                cy.get(PageSelectors.dateGreaterThanFilterDayCountHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.dateGreaterThanFilterDayCountHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.dateGreaterThanFilterDayCountHeader)
                .click()
                .click()
                .get(PageSelectors.dateGreaterThanFilterDayCountHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.dateGreaterThanFilterDayCountHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.dateGreaterThanFilterDayCountHeader)
                        .click()
                        .get(PageSelectors.dateGreaterThanFilterDayCountHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.dateGreaterThanFilterDayCountHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.dateGreaterThanFilterDayCountHeader)
                        .click()
                        .get(PageSelectors.dateGreaterThanFilterDayCountHeaderSortDownIndicator)
                        .should('exist');
                    }
                });

            }
            if(PageSettings.dateGreaterThanFilterDisplayOrderHeaderIsVisible){
                cy.get(PageSelectors.dateGreaterThanFilterDisplayOrderHeader)
                .should('be.visible')
                .should('include.text', PageTexts.dateGreaterThanFilterDisplayOrderHeaderText);

                cy.get(PageSelectors.dateGreaterThanFilterDisplayOrderHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.dateGreaterThanFilterDisplayOrderHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.dateGreaterThanFilterDisplayOrderHeader)
                .click()
                .click()
                .get(PageSelectors.dateGreaterThanFilterDisplayOrderHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.dateGreaterThanFilterDisplayOrderHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.dateGreaterThanFilterDisplayOrderHeader)
                        .click()
                        .get(PageSelectors.dateGreaterThanFilterDisplayOrderHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.dateGreaterThanFilterDisplayOrderHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.dateGreaterThanFilterDisplayOrderHeader)
                        .click()
                        .get(PageSelectors.dateGreaterThanFilterDisplayOrderHeaderSortDownIndicator)
                        .should('exist');
                    }
                });

            }
            if(PageSettings.dateGreaterThanFilterIsActiveHeaderIsVisible){
                cy.get(PageSelectors.dateGreaterThanFilterIsActiveHeader)
                .should('be.visible')
                .should('include.text', PageTexts.dateGreaterThanFilterIsActiveHeaderText);

                cy.get(PageSelectors.dateGreaterThanFilterIsActiveHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.dateGreaterThanFilterIsActiveHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.dateGreaterThanFilterIsActiveHeader)
                .click()
                .click()
                .get(PageSelectors.dateGreaterThanFilterIsActiveHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.dateGreaterThanFilterIsActiveHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.dateGreaterThanFilterIsActiveHeader)
                        .click()
                        .get(PageSelectors.dateGreaterThanFilterIsActiveHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.dateGreaterThanFilterIsActiveHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.dateGreaterThanFilterIsActiveHeader)
                        .click()
                        .get(PageSelectors.dateGreaterThanFilterIsActiveHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.dateGreaterThanFilterLookupEnumNameHeaderIsVisible){
                cy.get(PageSelectors.dateGreaterThanFilterLookupEnumNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.dateGreaterThanFilterLookupEnumNameHeaderText);

                cy.get(PageSelectors.dateGreaterThanFilterLookupEnumNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.dateGreaterThanFilterLookupEnumNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.dateGreaterThanFilterLookupEnumNameHeader)
                .click()
                .click()
                .get(PageSelectors.dateGreaterThanFilterLookupEnumNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.dateGreaterThanFilterLookupEnumNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.dateGreaterThanFilterLookupEnumNameHeader)
                        .click()
                        .get(PageSelectors.dateGreaterThanFilterLookupEnumNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.dateGreaterThanFilterLookupEnumNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.dateGreaterThanFilterLookupEnumNameHeader)
                        .click()
                        .get(PageSelectors.dateGreaterThanFilterLookupEnumNameHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.dateGreaterThanFilterNameHeaderIsVisible){
                cy.get(PageSelectors.dateGreaterThanFilterNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.dateGreaterThanFilterNameHeaderText);

                cy.get(PageSelectors.dateGreaterThanFilterNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.dateGreaterThanFilterNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.dateGreaterThanFilterNameHeader)
                .click()
                .click()
                .get(PageSelectors.dateGreaterThanFilterNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.dateGreaterThanFilterNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.dateGreaterThanFilterNameHeader)
                        .click()
                        .get(PageSelectors.dateGreaterThanFilterNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.dateGreaterThanFilterNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.dateGreaterThanFilterNameHeader)
                        .click()
                        .get(PageSelectors.dateGreaterThanFilterNameHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
        }

        //report buttons

        //row button text - not ignored
        //cy.log('Verifying row button deleteAsyncButtonLinkDateGreaterThanFilterCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkDateGreaterThanFilterCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkDateGreaterThanFilterCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkDateGreaterThanFilterCode...');
        //cy.get(PageSelectors.detailsLinkDateGreaterThanFilterCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkDateGreaterThanFilterCodeRowButtonText);
    }

    clickButtonWithDestination(destinationPageName) {
		cy.log('PacUserDateGreaterThanFilterListPage.clickButtonWithDestination() destinationPageName: ' + destinationPageName);

        if (destinationPageName == 'XXXX') { //placeholder

        }

        else {
            throw new Error(`Unknown destination page name: ${destinationPageName}`);
        }
    }

}
export default PacUserDateGreaterThanFilterListPage;

