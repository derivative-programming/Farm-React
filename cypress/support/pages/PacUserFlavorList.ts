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
            if(PageSettings.flavorCodeHeaderIsVisible){
                cy.get(PageSelectors.flavorCodeHeader)
                .should('not.exist');
            }

            if(PageSettings.someMoneyValIsVisible){
                cy.log('Verifying someMoneyValLabel control label...');
                cy.get(PageSelectors.someMoneyValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someMoneyValFilterLabel);

                cy.log('Verifying someMoneyValLabel control...');
                cy.get(PageSelectors.someMoneyValFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeMoneyVal(111);

                cy.get(PageSelectors.someMoneyValFilterField)
                    .should('have.value', '111');
            }

            if(PageSettings.someNVarCharValIsVisible){
                cy.log('Verifying someNVarCharValLabel control label...');
                cy.get(PageSelectors.someNVarCharValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someNVarCharValFilterLabel);

                cy.log('Verifying someNVarCharValLabel control...');
                cy.get(PageSelectors.someNVarCharValFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeNVarCharVal("someNVarCharValTestVal");

                cy.get(PageSelectors.someNVarCharValFilterField)
                    .should('have.value', 'someNVarCharValTestVal');
            }

            if(PageSettings.someVarCharValIsVisible){
                cy.log('Verifying someVarCharValLabel control label...');
                cy.get(PageSelectors.someVarCharValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someVarCharValFilterLabel);

                cy.log('Verifying someVarCharValLabel control...');
                cy.get(PageSelectors.someVarCharValFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeVarCharVal("someVarCharValTestVal");

                cy.get(PageSelectors.someVarCharValFilterField)
                    .should('have.value', 'someVarCharValTestVal');
            }

            if(PageSettings.someTextValIsVisible){
                cy.log('Verifying someTextValLabel control label...');
                cy.get(PageSelectors.someTextValFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someTextValFilterLabel);

                cy.log('Verifying someTextValLabel control...');
                cy.get(PageSelectors.someTextValFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeTextVal("someTextValTestVal");

                cy.get(PageSelectors.someTextValFilterField)
                    .should('have.value', 'someTextValTestVal');
            }

            if(PageSettings.somePhoneNumberIsVisible){
                cy.log('Verifying somePhoneNumberLabel control label...');
                cy.get(PageSelectors.somePhoneNumberFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.somePhoneNumberFilterLabel);

                cy.log('Verifying somePhoneNumberLabel control...');
                cy.get(PageSelectors.somePhoneNumberFilterField)
                    .should('be.visible');

                this.setFilterFieldSomePhoneNumber("111-111-1111");

                cy.get(PageSelectors.somePhoneNumberFilterField)
                    .should('have.value', '111-111-1111');
            }

            if(PageSettings.someEmailAddressIsVisible){
                cy.log('Verifying someEmailAddressLabel control label...');
                cy.get(PageSelectors.someEmailAddressFilterLabel)
                    .should('be.visible')
                    .should('include.text', PageTexts.someEmailAddressFilterLabel);

                cy.log('Verifying someEmailAddressLabel control...');
                cy.get(PageSelectors.someEmailAddressFilterField)
                    .should('be.visible');

                this.setFilterFieldSomeEmailAddress("test@test.com");

                cy.get(PageSelectors.someEmailAddressFilterField)
                    .should('have.value', 'test@test.com');
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

    verifySort() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.flavorCodeHeaderIsVisible){
                cy.get(PageSelectors.flavorCodeHeader)
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
            if(PageSettings.HeaderIsVisible){
                cy.get(PageSelectors.Header)
                .should('be.visible')
                .should('include.text', PageTexts.HeaderText);

                cy.get(PageSelectors.HeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.HeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.Header)
                .click()
                .click()
                .get(PageSelectors.HeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.HeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.Header)
                        .click()
                        .get(PageSelectors.HeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.HeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.Header)
                        .click()
                        .get(PageSelectors.HeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }

            if(PageSettings.someIntConditionalOnDeletableHeaderIsVisible){
                cy.get(PageSelectors.someIntConditionalOnDeletableHeader)
                .should('be.visible')
                .should('include.text', PageTexts.someIntConditionalOnDeletableHeaderText);

                cy.get(PageSelectors.someIntConditionalOnDeletableHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someIntConditionalOnDeletableHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.someIntConditionalOnDeletableHeader)
                .click()
                .click()
                .get(PageSelectors.someIntConditionalOnDeletableHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.someIntConditionalOnDeletableHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.someIntConditionalOnDeletableHeader)
                        .click()
                        .get(PageSelectors.someIntConditionalOnDeletableHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.someIntConditionalOnDeletableHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.someIntConditionalOnDeletableHeader)
                        .click()
                        .get(PageSelectors.someIntConditionalOnDeletableHeaderSortDownIndicator)
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

