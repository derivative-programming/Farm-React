/* eslint-disable no-dupe-else-if */

import { PacUserRoleListPageSelectors  as PageSelectors } from '../selectors/PacUserRoleList';
import { PacUserRoleListPageSettings  as PageSettings } from './settings/PacUserRoleList';
import { PacUserRoleListPageTexts as PageTexts } from '../texts/PacUserRoleList';
import { pageUrlPrefixes as PageUrlPrefixes } from '../urls/pageUrlPrefixes';
import   RoutingAssistant   from '../routingAssistant'

export class PacUserRoleListPage {

    visit() {
		cy.log('PacUserRoleListPage.visit() start');

        if(!this.isLoginRequired()){
            //go to it directly
            cy.visit(PageUrlPrefixes.pacUserRoleList + '/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login required');
        const routingAssistant = new RoutingAssistant();
        let currentPage = ""

        routingAssistant.goToPage(currentPage,'PacUserRoleList');

        cy.url().then(url => {
            if(!url.includes( PageUrlPrefixes.pacUserRoleList + '/'))
            {
                //try just in case. Api may override empty url context code
                cy.visit(PageUrlPrefixes.pacUserRoleList + '/00000000-0000-0000-0000-000000000000');
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
        cy.url().should('include', PageUrlPrefixes.pacUserRoleList);
    }

    verifyPageElements() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.roleDisplayOrderHeaderIsVisible){
                cy.get(PageSelectors.roleDisplayOrderHeader)
                .should('be.visible')
                .should('include.text', PageTexts.roleDisplayOrderHeaderText);

                cy.get(PageSelectors.roleDisplayOrderHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleDisplayOrderHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.roleIsActiveHeaderIsVisible){
                cy.get(PageSelectors.roleIsActiveHeader)
                .should('be.visible')
                .should('include.text', PageTexts.roleIsActiveHeaderText);

                cy.get(PageSelectors.roleIsActiveHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleIsActiveHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.roleLookupEnumNameHeaderIsVisible){
                cy.get(PageSelectors.roleLookupEnumNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.roleLookupEnumNameHeaderText);

                cy.get(PageSelectors.roleLookupEnumNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleLookupEnumNameHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.roleNameHeaderIsVisible){
                cy.get(PageSelectors.roleNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.roleNameHeaderText);

                cy.get(PageSelectors.roleNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleNameHeaderSortUpIndicator)
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
        //cy.log('Verifying row button deleteAsyncButtonLinkRoleCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkRoleCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkRoleCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkRoleCode...');
        //cy.get(PageSelectors.detailsLinkRoleCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkRoleCodeRowButtonText);
    }

    verifySort() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.roleDisplayOrderHeaderIsVisible){
                cy.get(PageSelectors.roleDisplayOrderHeader)
                .should('be.visible')
                .should('include.text', PageTexts.roleDisplayOrderHeaderText);

                cy.get(PageSelectors.roleDisplayOrderHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleDisplayOrderHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleDisplayOrderHeader)
                .click()
                .click()
                .get(PageSelectors.roleDisplayOrderHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.roleDisplayOrderHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.roleDisplayOrderHeader)
                        .click()
                        .get(PageSelectors.roleDisplayOrderHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.roleDisplayOrderHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.roleDisplayOrderHeader)
                        .click()
                        .get(PageSelectors.roleDisplayOrderHeaderSortDownIndicator)
                        .should('exist');
                    }
                });

            }
            if(PageSettings.roleIsActiveHeaderIsVisible){
                cy.get(PageSelectors.roleIsActiveHeader)
                .should('be.visible')
                .should('include.text', PageTexts.roleIsActiveHeaderText);

                cy.get(PageSelectors.roleIsActiveHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleIsActiveHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleIsActiveHeader)
                .click()
                .click()
                .get(PageSelectors.roleIsActiveHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.roleIsActiveHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.roleIsActiveHeader)
                        .click()
                        .get(PageSelectors.roleIsActiveHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.roleIsActiveHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.roleIsActiveHeader)
                        .click()
                        .get(PageSelectors.roleIsActiveHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.roleLookupEnumNameHeaderIsVisible){
                cy.get(PageSelectors.roleLookupEnumNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.roleLookupEnumNameHeaderText);

                cy.get(PageSelectors.roleLookupEnumNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleLookupEnumNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleLookupEnumNameHeader)
                .click()
                .click()
                .get(PageSelectors.roleLookupEnumNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.roleLookupEnumNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.roleLookupEnumNameHeader)
                        .click()
                        .get(PageSelectors.roleLookupEnumNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.roleLookupEnumNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.roleLookupEnumNameHeader)
                        .click()
                        .get(PageSelectors.roleLookupEnumNameHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.roleNameHeaderIsVisible){
                cy.get(PageSelectors.roleNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.roleNameHeaderText);

                cy.get(PageSelectors.roleNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.roleNameHeader)
                .click()
                .click()
                .get(PageSelectors.roleNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.roleNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.roleNameHeader)
                        .click()
                        .get(PageSelectors.roleNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.roleNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.roleNameHeader)
                        .click()
                        .get(PageSelectors.roleNameHeaderSortDownIndicator)
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
        //cy.log('Verifying row button deleteAsyncButtonLinkRoleCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkRoleCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkRoleCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkRoleCode...');
        //cy.get(PageSelectors.detailsLinkRoleCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkRoleCodeRowButtonText);
    }

    clickButtonWithDestination(destinationPageName) {
		cy.log('PacUserRoleListPage.clickButtonWithDestination() destinationPageName: ' + destinationPageName);

        if (destinationPageName == 'XXXX') { //placeholder

        }

        else {
            throw new Error(`Unknown destination page name: ${destinationPageName}`);
        }
    }

}
export default PacUserRoleListPage;

