/* eslint-disable no-dupe-else-if */

import { PlantUserDetailsPageSelectors  as PageSelectors } from '../selectors/PlantUserDetails';
import { PlantUserDetailsPageSettings  as PageSettings } from './settings/PlantUserDetails';
import { PlantUserDetailsPageTexts as PageTexts } from '../texts/PlantUserDetails';
import { pageUrlPrefixes as PageUrlPrefixes } from '../urls/pageUrlPrefixes';
import   RoutingAssistant   from '../routingAssistant'

export class PlantUserDetailsPage {

    visit() {
		cy.log('PlantUserDetailsPage.visit() start');

        if(!this.isLoginRequired()){
            //go to it directly
            cy.visit(PageUrlPrefixes.plantUserDetails + '/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login required');
        const routingAssistant = new RoutingAssistant();
        // eslint-disable-next-line prefer-const
        let currentPage = ""
        currentPage = routingAssistant.goToPage(currentPage, 'TacFarmDashboard'); //tacFarmDashboardBreadcrumb
        currentPage = routingAssistant.goToPage(currentPage, 'LandPlantList'); //landPlantListBreadcrumb
        routingAssistant.goToPage(currentPage,'PlantUserDetails');

        cy.url().then(url => {
            if(!url.includes( PageUrlPrefixes.plantUserDetails + '/'))
            {
                //try just in case. Api may override empty url context code
                cy.visit(PageUrlPrefixes.plantUserDetails + '/00000000-0000-0000-0000-000000000000');
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
        cy.url().should('include', PageUrlPrefixes.plantUserDetails);
    }

    verifyPageElements() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.flavorNameHeaderIsVisible){
                cy.get(PageSelectors.flavorNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.flavorNameHeaderText);

                cy.get(PageSelectors.flavorNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.flavorNameHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.isDeleteAllowedHeaderIsVisible){
                cy.get(PageSelectors.isDeleteAllowedHeader)
                .should('be.visible')
                .should('include.text', PageTexts.isDeleteAllowedHeaderText);

                cy.get(PageSelectors.isDeleteAllowedHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.isDeleteAllowedHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.isEditAllowedHeaderIsVisible){
                cy.get(PageSelectors.isEditAllowedHeader)
                .should('be.visible')
                .should('include.text', PageTexts.isEditAllowedHeaderText);

                cy.get(PageSelectors.isEditAllowedHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.isEditAllowedHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.otherFlavorHeaderIsVisible){
                cy.get(PageSelectors.otherFlavorHeader)
                .should('be.visible')
                .should('include.text', PageTexts.otherFlavorHeaderText);

                cy.get(PageSelectors.otherFlavorHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.otherFlavorHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.someBigIntValHeaderIsVisible){
                cy.get(PageSelectors.someBigIntValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someBigIntValHeaderText);

                cy.get(PageSelectors.someBigIntValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someBigIntValHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.someBitValHeaderIsVisible){
                cy.get(PageSelectors.someBitValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someBitValHeaderText);

                cy.get(PageSelectors.someBitValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someBitValHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.someDateValHeaderIsVisible){
                cy.get(PageSelectors.someDateValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someDateValHeaderText);

                cy.get(PageSelectors.someDateValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someDateValHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.someDecimalValHeaderIsVisible){
                cy.get(PageSelectors.someDecimalValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someDecimalValHeaderText);

                cy.get(PageSelectors.someDecimalValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someDecimalValHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.someEmailAddressHeaderIsVisible){
                cy.get(PageSelectors.someEmailAddressHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someEmailAddressHeaderText);

                cy.get(PageSelectors.someEmailAddressHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someEmailAddressHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.someFloatValHeaderIsVisible){
                cy.get(PageSelectors.someFloatValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someFloatValHeaderText);

                cy.get(PageSelectors.someFloatValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someFloatValHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.someIntValHeaderIsVisible){
                cy.get(PageSelectors.someIntValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someIntValHeaderText);

                cy.get(PageSelectors.someIntValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someIntValHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.someMoneyValHeaderIsVisible){
                cy.get(PageSelectors.someMoneyValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someMoneyValHeaderText);

                cy.get(PageSelectors.someMoneyValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someMoneyValHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.someNVarCharValHeaderIsVisible){
                cy.get(PageSelectors.someNVarCharValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someNVarCharValHeaderText);

                cy.get(PageSelectors.someNVarCharValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someNVarCharValHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.somePhoneNumberHeaderIsVisible){
                cy.get(PageSelectors.somePhoneNumberHeader)
                .should('be.visible')
                .should('include.text', PageTexts.somePhoneNumberHeaderText);

                cy.get(PageSelectors.somePhoneNumberHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.somePhoneNumberHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.someTextValHeaderIsVisible){
                cy.get(PageSelectors.someTextValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someTextValHeaderText);

                cy.get(PageSelectors.someTextValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someTextValHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.someUTCDateTimeValHeaderIsVisible){
                cy.get(PageSelectors.someUTCDateTimeValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someUTCDateTimeValHeaderText);

                cy.get(PageSelectors.someUTCDateTimeValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someUTCDateTimeValHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.someVarCharValHeaderIsVisible){
                cy.get(PageSelectors.someVarCharValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someVarCharValHeaderText);

                cy.get(PageSelectors.someVarCharValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someVarCharValHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.nVarCharAsUrlHeaderIsVisible){
                cy.get(PageSelectors.nVarCharAsUrlHeader)
                .should('be.visible')
                .should('include.text', PageTexts.nVarCharAsUrlHeaderText);

                cy.get(PageSelectors.nVarCharAsUrlHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.nVarCharAsUrlHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.updateButtonTextLinkPlantCodeHeaderIsVisible){
                cy.get(PageSelectors.updateButtonTextLinkPlantCodeHeader)
                .should('exist');

                cy.get(PageSelectors.updateButtonTextLinkPlantCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateButtonTextLinkPlantCodeHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.randomPropertyUpdatesLinkPlantCodeHeaderIsVisible){
                cy.get(PageSelectors.randomPropertyUpdatesLinkPlantCodeHeader)
                .should('exist');

                cy.get(PageSelectors.randomPropertyUpdatesLinkPlantCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.randomPropertyUpdatesLinkPlantCodeHeaderSortUpIndicator)
                .should('not.exist');
            }
            if(PageSettings.backToDashboardLinkTacCodeHeaderIsVisible){
                cy.get(PageSelectors.backToDashboardLinkTacCodeHeader)
                .should('exist');

                cy.get(PageSelectors.backToDashboardLinkTacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.backToDashboardLinkTacCodeHeaderSortUpIndicator)
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
        //breadcrumbs text
        cy.log('Verifying breadcrumb tacFarmDashboardBreadcrumb...');
            cy.get(PageSelectors.tacFarmDashboardBreadcrumbText)
            .should('be.visible')
            .should('include.text', PageTexts.tacFarmDashboardBreadcrumbText);
        //breadcrumbs text
        cy.log('Verifying breadcrumb landPlantListBreadcrumb...');
            cy.get(PageSelectors.landPlantListBreadcrumbText)
            .should('be.visible')
            .should('include.text', PageTexts.landPlantListBreadcrumbText);
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
            if(PageSettings.isDeleteAllowedHeaderIsVisible){
                cy.get(PageSelectors.isDeleteAllowedHeader)
                .should('be.visible')
                .should('include.text', PageTexts.isDeleteAllowedHeaderText);

                cy.get(PageSelectors.isDeleteAllowedHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.isDeleteAllowedHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.isDeleteAllowedHeader)
                .click()
                .click()
                .get(PageSelectors.isDeleteAllowedHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.isDeleteAllowedHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.isDeleteAllowedHeader)
                        .click()
                        .get(PageSelectors.isDeleteAllowedHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.isDeleteAllowedHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.isDeleteAllowedHeader)
                        .click()
                        .get(PageSelectors.isDeleteAllowedHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.isEditAllowedHeaderIsVisible){
                cy.get(PageSelectors.isEditAllowedHeader)
                .should('be.visible')
                .should('include.text', PageTexts.isEditAllowedHeaderText);

                cy.get(PageSelectors.isEditAllowedHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.isEditAllowedHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.isEditAllowedHeader)
                .click()
                .click()
                .get(PageSelectors.isEditAllowedHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.isEditAllowedHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.isEditAllowedHeader)
                        .click()
                        .get(PageSelectors.isEditAllowedHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.isEditAllowedHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.isEditAllowedHeader)
                        .click()
                        .get(PageSelectors.isEditAllowedHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.otherFlavorHeaderIsVisible){
                cy.get(PageSelectors.otherFlavorHeader)
                .should('be.visible')
                .should('include.text', PageTexts.otherFlavorHeaderText);

                cy.get(PageSelectors.otherFlavorHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.otherFlavorHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.otherFlavorHeader)
                .click()
                .click()
                .get(PageSelectors.otherFlavorHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.otherFlavorHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.otherFlavorHeader)
                        .click()
                        .get(PageSelectors.otherFlavorHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.otherFlavorHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.otherFlavorHeader)
                        .click()
                        .get(PageSelectors.otherFlavorHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someBigIntValHeaderIsVisible){
                cy.get(PageSelectors.someBigIntValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someBigIntValHeaderText);

                cy.get(PageSelectors.someBigIntValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someBigIntValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someBigIntValHeader)
                .click()
                .click()
                .get(PageSelectors.someBigIntValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someBigIntValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someBigIntValHeader)
                        .click()
                        .get(PageSelectors.someBigIntValHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.someBigIntValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someBigIntValHeader)
                        .click()
                        .get(PageSelectors.someBigIntValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someBitValHeaderIsVisible){
                cy.get(PageSelectors.someBitValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someBitValHeaderText);

                cy.get(PageSelectors.someBitValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someBitValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someBitValHeader)
                .click()
                .click()
                .get(PageSelectors.someBitValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someBitValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someBitValHeader)
                        .click()
                        .get(PageSelectors.someBitValHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.someBitValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someBitValHeader)
                        .click()
                        .get(PageSelectors.someBitValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someDateValHeaderIsVisible){
                cy.get(PageSelectors.someDateValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someDateValHeaderText);

                cy.get(PageSelectors.someDateValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someDateValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someDateValHeader)
                .click()
                .click()
                .get(PageSelectors.someDateValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someDateValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someDateValHeader)
                        .click()
                        .get(PageSelectors.someDateValHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.someDateValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someDateValHeader)
                        .click()
                        .get(PageSelectors.someDateValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someDecimalValHeaderIsVisible){
                cy.get(PageSelectors.someDecimalValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someDecimalValHeaderText);

                cy.get(PageSelectors.someDecimalValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someDecimalValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someDecimalValHeader)
                .click()
                .click()
                .get(PageSelectors.someDecimalValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someDecimalValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someDecimalValHeader)
                        .click()
                        .get(PageSelectors.someDecimalValHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.someDecimalValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someDecimalValHeader)
                        .click()
                        .get(PageSelectors.someDecimalValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someEmailAddressHeaderIsVisible){
                cy.get(PageSelectors.someEmailAddressHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someEmailAddressHeaderText);

                cy.get(PageSelectors.someEmailAddressHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someEmailAddressHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someEmailAddressHeader)
                .click()
                .click()
                .get(PageSelectors.someEmailAddressHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someEmailAddressHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someEmailAddressHeader)
                        .click()
                        .get(PageSelectors.someEmailAddressHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.someEmailAddressHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someEmailAddressHeader)
                        .click()
                        .get(PageSelectors.someEmailAddressHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someFloatValHeaderIsVisible){
                cy.get(PageSelectors.someFloatValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someFloatValHeaderText);

                cy.get(PageSelectors.someFloatValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someFloatValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someFloatValHeader)
                .click()
                .click()
                .get(PageSelectors.someFloatValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someFloatValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someFloatValHeader)
                        .click()
                        .get(PageSelectors.someFloatValHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.someFloatValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someFloatValHeader)
                        .click()
                        .get(PageSelectors.someFloatValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someIntValHeaderIsVisible){
                cy.get(PageSelectors.someIntValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someIntValHeaderText);

                cy.get(PageSelectors.someIntValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someIntValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someIntValHeader)
                .click()
                .click()
                .get(PageSelectors.someIntValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someIntValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someIntValHeader)
                        .click()
                        .get(PageSelectors.someIntValHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.someIntValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someIntValHeader)
                        .click()
                        .get(PageSelectors.someIntValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });

            }
            if(PageSettings.someMoneyValHeaderIsVisible){
                cy.get(PageSelectors.someMoneyValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someMoneyValHeaderText);

                cy.get(PageSelectors.someMoneyValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someMoneyValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someMoneyValHeader)
                .click()
                .click()
                .get(PageSelectors.someMoneyValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someMoneyValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someMoneyValHeader)
                        .click()
                        .get(PageSelectors.someMoneyValHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.someMoneyValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someMoneyValHeader)
                        .click()
                        .get(PageSelectors.someMoneyValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someNVarCharValHeaderIsVisible){
                cy.get(PageSelectors.someNVarCharValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someNVarCharValHeaderText);

                cy.get(PageSelectors.someNVarCharValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someNVarCharValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someNVarCharValHeader)
                .click()
                .click()
                .get(PageSelectors.someNVarCharValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someNVarCharValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someNVarCharValHeader)
                        .click()
                        .get(PageSelectors.someNVarCharValHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.someNVarCharValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someNVarCharValHeader)
                        .click()
                        .get(PageSelectors.someNVarCharValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.somePhoneNumberHeaderIsVisible){
                cy.get(PageSelectors.somePhoneNumberHeader)
                .should('be.visible')
                .should('include.text', PageTexts.somePhoneNumberHeaderText);

                cy.get(PageSelectors.somePhoneNumberHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.somePhoneNumberHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.somePhoneNumberHeader)
                .click()
                .click()
                .get(PageSelectors.somePhoneNumberHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.somePhoneNumberHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.somePhoneNumberHeader)
                        .click()
                        .get(PageSelectors.somePhoneNumberHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.somePhoneNumberHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.somePhoneNumberHeader)
                        .click()
                        .get(PageSelectors.somePhoneNumberHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someTextValHeaderIsVisible){
                cy.get(PageSelectors.someTextValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someTextValHeaderText);

                cy.get(PageSelectors.someTextValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someTextValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someTextValHeader)
                .click()
                .click()
                .get(PageSelectors.someTextValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someTextValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someTextValHeader)
                        .click()
                        .get(PageSelectors.someTextValHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.someTextValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someTextValHeader)
                        .click()
                        .get(PageSelectors.someTextValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someUTCDateTimeValHeaderIsVisible){
                cy.get(PageSelectors.someUTCDateTimeValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someUTCDateTimeValHeaderText);

                cy.get(PageSelectors.someUTCDateTimeValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someUTCDateTimeValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someUTCDateTimeValHeader)
                .click()
                .click()
                .get(PageSelectors.someUTCDateTimeValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someUTCDateTimeValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someUTCDateTimeValHeader)
                        .click()
                        .get(PageSelectors.someUTCDateTimeValHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.someUTCDateTimeValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someUTCDateTimeValHeader)
                        .click()
                        .get(PageSelectors.someUTCDateTimeValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.someVarCharValHeaderIsVisible){
                cy.get(PageSelectors.someVarCharValHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someVarCharValHeaderText);

                cy.get(PageSelectors.someVarCharValHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someVarCharValHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someVarCharValHeader)
                .click()
                .click()
                .get(PageSelectors.someVarCharValHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someVarCharValHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someVarCharValHeader)
                        .click()
                        .get(PageSelectors.someVarCharValHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.someVarCharValHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someVarCharValHeader)
                        .click()
                        .get(PageSelectors.someVarCharValHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.nVarCharAsUrlHeaderIsVisible){
                cy.get(PageSelectors.nVarCharAsUrlHeader)
                .should('be.visible')
                .should('include.text', PageTexts.nVarCharAsUrlHeaderText);

                cy.get(PageSelectors.nVarCharAsUrlHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.nVarCharAsUrlHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.nVarCharAsUrlHeader)
                .click()
                .click()
                .get(PageSelectors.nVarCharAsUrlHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.nVarCharAsUrlHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.nVarCharAsUrlHeader)
                        .click()
                        .get(PageSelectors.nVarCharAsUrlHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.nVarCharAsUrlHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.nVarCharAsUrlHeader)
                        .click()
                        .get(PageSelectors.nVarCharAsUrlHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.updateButtonTextLinkPlantCodeHeaderIsVisible){
                cy.get(PageSelectors.updateButtonTextLinkPlantCodeHeader)
                .should('exist');

                cy.get(PageSelectors.updateButtonTextLinkPlantCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateButtonTextLinkPlantCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateButtonTextLinkPlantCodeHeader)
                .click()
                .click()
                .get(PageSelectors.updateButtonTextLinkPlantCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.updateButtonTextLinkPlantCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.updateButtonTextLinkPlantCodeHeader)
                        .click()
                        .get(PageSelectors.updateButtonTextLinkPlantCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.updateButtonTextLinkPlantCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.updateButtonTextLinkPlantCodeHeader)
                        .click()
                        .get(PageSelectors.updateButtonTextLinkPlantCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.randomPropertyUpdatesLinkPlantCodeHeaderIsVisible){
                cy.get(PageSelectors.randomPropertyUpdatesLinkPlantCodeHeader)
                .should('exist');

                cy.get(PageSelectors.randomPropertyUpdatesLinkPlantCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.randomPropertyUpdatesLinkPlantCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.randomPropertyUpdatesLinkPlantCodeHeader)
                .click()
                .click()
                .get(PageSelectors.randomPropertyUpdatesLinkPlantCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.randomPropertyUpdatesLinkPlantCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.randomPropertyUpdatesLinkPlantCodeHeader)
                        .click()
                        .get(PageSelectors.randomPropertyUpdatesLinkPlantCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.randomPropertyUpdatesLinkPlantCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.randomPropertyUpdatesLinkPlantCodeHeader)
                        .click()
                        .get(PageSelectors.randomPropertyUpdatesLinkPlantCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.backToDashboardLinkTacCodeHeaderIsVisible){
                cy.get(PageSelectors.backToDashboardLinkTacCodeHeader)
                .should('exist');

                cy.get(PageSelectors.backToDashboardLinkTacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.backToDashboardLinkTacCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.backToDashboardLinkTacCodeHeader)
                .click()
                .click()
                .get(PageSelectors.backToDashboardLinkTacCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.backToDashboardLinkTacCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.backToDashboardLinkTacCodeHeader)
                        .click()
                        .get(PageSelectors.backToDashboardLinkTacCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.backToDashboardLinkTacCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.backToDashboardLinkTacCodeHeader)
                        .click()
                        .get(PageSelectors.backToDashboardLinkTacCodeHeaderSortDownIndicator)
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
		cy.log('PlantUserDetailsPage.clickButtonWithDestination() destinationPageName: ' + destinationPageName);
        const updateButtonTextLinkPlantCodeColumnIsVisible = false;
        const randomPropertyUpdatesLinkPlantCodeColumnIsVisible = true;
        const backToDashboardLinkTacCodeColumnIsVisible = true;
        if (destinationPageName == 'XXXX') { //placeholder

        }
        else if (destinationPageName == 'LandPlantList') {  //back-button
            cy.log('click add button...');
            cy.get(PageSelectors.backButton)
                .click();
            cy.wait(2000);
        }
        //row buttons
        else if (destinationPageName == 'PlantUserDetails' && //updateButtonTextLinkPlantCode
            updateButtonTextLinkPlantCodeColumnIsVisible) {
            cy.log('click row button updateButtonTextLinkPlantCode...');
            cy.get(PageSelectors.updateButtonTextLinkPlantCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'PlantUserPropertyRandomUpdate' && //randomPropertyUpdatesLinkPlantCode
            randomPropertyUpdatesLinkPlantCodeColumnIsVisible) {
            cy.log('click row button randomPropertyUpdatesLinkPlantCode...');
            cy.get(PageSelectors.randomPropertyUpdatesLinkPlantCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'TacFarmDashboard' &&   //backToDashboardLinkTacCode
            backToDashboardLinkTacCodeColumnIsVisible) {
            cy.log('click row button backToDashboardLinkTacCode...');
            cy.get(PageSelectors.backToDashboardLinkTacCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else {
            throw new Error(`Unknown destination page name: ${destinationPageName}`);
        }
    }

}
export default PlantUserDetailsPage;

