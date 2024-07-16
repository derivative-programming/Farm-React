
import { PacUserTriStateFilterListPageSelectors  as PageSelectors } from '../selectors/PacUserTriStateFilterList';
import { PacUserTriStateFilterListPageSettings  as PageSettings } from './settings/PacUserTriStateFilterList';
import { PacUserTriStateFilterListPageTexts as PageTexts } from '../texts/PacUserTriStateFilterList';
import { pageUrlPrefixes as PageUrlPrefixes } from '../urls/pageUrlPrefixes';
import   RoutingAssistant   from '../routingAssistant'

export class PacUserTriStateFilterListPage {

    visit() {
		cy.log('PacUserTriStateFilterListPage.visit() start');

        if(!this.isLoginRequired()){
            //go to it directly
            cy.visit(PageUrlPrefixes.pacUserTriStateFilterList + '/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login required');
        const routingAssistant = new RoutingAssistant();
        let currentPage = ""

        routingAssistant.goToPage(currentPage,'PacUserTriStateFilterList');

        cy.url().then(url => {
            if(!url.includes( PageUrlPrefixes.pacUserTriStateFilterList + '/'))
            {
                //try just in case. Api may override empty url context code
                cy.visit(PageUrlPrefixes.pacUserTriStateFilterList + '/00000000-0000-0000-0000-000000000000');
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
        cy.url().should('include', PageUrlPrefixes.pacUserTriStateFilterList);
    }

    verifyPageElements() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.triStateFilterDisplayOrderHeaderIsVisible){
                cy.get(PageSelectors.triStateFilterDisplayOrderHeader)
                .should('be.visible')
                .should('include.text', PageTexts.triStateFilterDisplayOrderHeaderText);

                cy.get(PageSelectors.triStateFilterDisplayOrderHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.triStateFilterDisplayOrderHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.triStateFilterIsActiveHeaderIsVisible){
                cy.get(PageSelectors.triStateFilterIsActiveHeader)
                .should('be.visible')
                .should('include.text', PageTexts.triStateFilterIsActiveHeaderText);

                cy.get(PageSelectors.triStateFilterIsActiveHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.triStateFilterIsActiveHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.triStateFilterLookupEnumNameHeaderIsVisible){
                cy.get(PageSelectors.triStateFilterLookupEnumNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.triStateFilterLookupEnumNameHeaderText);

                cy.get(PageSelectors.triStateFilterLookupEnumNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.triStateFilterLookupEnumNameHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.triStateFilterNameHeaderIsVisible){
                cy.get(PageSelectors.triStateFilterNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.triStateFilterNameHeaderText);

                cy.get(PageSelectors.triStateFilterNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.triStateFilterNameHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.triStateFilterStateIntValueHeaderIsVisible){
                cy.get(PageSelectors.triStateFilterStateIntValueHeader)
                .should('be.visible')
                .should('include.text', PageTexts.triStateFilterStateIntValueHeaderText);

                cy.get(PageSelectors.triStateFilterStateIntValueHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.triStateFilterStateIntValueHeaderSortUpIndicator)
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
        //cy.log('Verifying row button deleteAsyncButtonLinkTriStateFilterCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkTriStateFilterCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkTriStateFilterCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkTriStateFilterCode...');
        //cy.get(PageSelectors.detailsLinkTriStateFilterCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkTriStateFilterCodeRowButtonText);
    }

    verifySort() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.triStateFilterDisplayOrderHeaderIsVisible){
                cy.get(PageSelectors.triStateFilterDisplayOrderHeader)
                .should('be.visible')
                .should('include.text', PageTexts.triStateFilterDisplayOrderHeaderText);

                cy.get(PageSelectors.triStateFilterDisplayOrderHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.triStateFilterDisplayOrderHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.triStateFilterDisplayOrderHeader)
                .click()
                .click()
                .get(PageSelectors.triStateFilterDisplayOrderHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.triStateFilterDisplayOrderHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.triStateFilterDisplayOrderHeader)
                        .click()
                        .get(PageSelectors.triStateFilterDisplayOrderHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.triStateFilterDisplayOrderHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.triStateFilterDisplayOrderHeader)
                        .click()
                        .get(PageSelectors.triStateFilterDisplayOrderHeaderSortDownIndicator)
                        .should('exist');
                    }
                });

            }
            if(PageSettings.triStateFilterIsActiveHeaderIsVisible){
                cy.get(PageSelectors.triStateFilterIsActiveHeader)
                .should('be.visible')
                .should('include.text', PageTexts.triStateFilterIsActiveHeaderText);

                cy.get(PageSelectors.triStateFilterIsActiveHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.triStateFilterIsActiveHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.triStateFilterIsActiveHeader)
                .click()
                .click()
                .get(PageSelectors.triStateFilterIsActiveHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.triStateFilterIsActiveHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.triStateFilterIsActiveHeader)
                        .click()
                        .get(PageSelectors.triStateFilterIsActiveHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.triStateFilterIsActiveHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.triStateFilterIsActiveHeader)
                        .click()
                        .get(PageSelectors.triStateFilterIsActiveHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.triStateFilterLookupEnumNameHeaderIsVisible){
                cy.get(PageSelectors.triStateFilterLookupEnumNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.triStateFilterLookupEnumNameHeaderText);

                cy.get(PageSelectors.triStateFilterLookupEnumNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.triStateFilterLookupEnumNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.triStateFilterLookupEnumNameHeader)
                .click()
                .click()
                .get(PageSelectors.triStateFilterLookupEnumNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.triStateFilterLookupEnumNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.triStateFilterLookupEnumNameHeader)
                        .click()
                        .get(PageSelectors.triStateFilterLookupEnumNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.triStateFilterLookupEnumNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.triStateFilterLookupEnumNameHeader)
                        .click()
                        .get(PageSelectors.triStateFilterLookupEnumNameHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.triStateFilterNameHeaderIsVisible){
                cy.get(PageSelectors.triStateFilterNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.triStateFilterNameHeaderText);

                cy.get(PageSelectors.triStateFilterNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.triStateFilterNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.triStateFilterNameHeader)
                .click()
                .click()
                .get(PageSelectors.triStateFilterNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.triStateFilterNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.triStateFilterNameHeader)
                        .click()
                        .get(PageSelectors.triStateFilterNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.triStateFilterNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.triStateFilterNameHeader)
                        .click()
                        .get(PageSelectors.triStateFilterNameHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.triStateFilterStateIntValueHeaderIsVisible){
                cy.get(PageSelectors.triStateFilterStateIntValueHeader)
                .should('be.visible')
                .should('include.text', PageTexts.triStateFilterStateIntValueHeaderText);

                cy.get(PageSelectors.triStateFilterStateIntValueHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.triStateFilterStateIntValueHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.triStateFilterStateIntValueHeader)
                .click()
                .click()
                .get(PageSelectors.triStateFilterStateIntValueHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.triStateFilterStateIntValueHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.triStateFilterStateIntValueHeader)
                        .click()
                        .get(PageSelectors.triStateFilterStateIntValueHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.triStateFilterStateIntValueHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.triStateFilterStateIntValueHeader)
                        .click()
                        .get(PageSelectors.triStateFilterStateIntValueHeaderSortDownIndicator)
                        .should('exist');
                    }
                });

            }
        }

        //report buttons

        //row button text - not ignored
        //cy.log('Verifying row button deleteAsyncButtonLinkTriStateFilterCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkTriStateFilterCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkTriStateFilterCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkTriStateFilterCode...');
        //cy.get(PageSelectors.detailsLinkTriStateFilterCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkTriStateFilterCodeRowButtonText);
    }

    clickButtonWithDestination(destinationPageName) {
		cy.log('PacUserTriStateFilterListPage.clickButtonWithDestination() destinationPageName: ' + destinationPageName);

        if (destinationPageName == 'XXXX') { //placeholder

        }

        else {
            //throw error
        }
    }

}
export default PacUserTriStateFilterListPage;

