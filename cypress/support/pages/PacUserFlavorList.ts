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
            if(PageSettings.updateLinkFlavorCodeHeaderIsVisible){
                cy.get(PageSelectors.updateLinkFlavorCodeHeader)
                .should('exist');

                cy.get(PageSelectors.updateLinkFlavorCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateLinkFlavorCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateLinkFlavorCodeHeader)
                .click()
                .click()
                .get(PageSelectors.updateLinkFlavorCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.updateLinkFlavorCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.updateLinkFlavorCodeHeader)
                        .click()
                        .get(PageSelectors.updateLinkFlavorCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.updateLinkFlavorCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.updateLinkFlavorCodeHeader)
                        .click()
                        .get(PageSelectors.updateLinkFlavorCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.deleteAsyncButtonLinkFlavorCodeHeaderIsVisible){
                cy.get(PageSelectors.deleteAsyncButtonLinkFlavorCodeHeader)
                .should('exist');

                cy.get(PageSelectors.deleteAsyncButtonLinkFlavorCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.deleteAsyncButtonLinkFlavorCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.deleteAsyncButtonLinkFlavorCodeHeader)
                .click()
                .click()
                .get(PageSelectors.deleteAsyncButtonLinkFlavorCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.deleteAsyncButtonLinkFlavorCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.deleteAsyncButtonLinkFlavorCodeHeader)
                        .click()
                        .get(PageSelectors.deleteAsyncButtonLinkFlavorCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.deleteAsyncButtonLinkFlavorCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.deleteAsyncButtonLinkFlavorCodeHeader)
                        .click()
                        .get(PageSelectors.deleteAsyncButtonLinkFlavorCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.detailsLinkFlavorCodeHeaderIsVisible){
                cy.get(PageSelectors.detailsLinkFlavorCodeHeader)
                .should('exist');

                cy.get(PageSelectors.detailsLinkFlavorCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.detailsLinkFlavorCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.detailsLinkFlavorCodeHeader)
                .click()
                .click()
                .get(PageSelectors.detailsLinkFlavorCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.detailsLinkFlavorCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.detailsLinkFlavorCodeHeader)
                        .click()
                        .get(PageSelectors.detailsLinkFlavorCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.detailsLinkFlavorCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.detailsLinkFlavorCodeHeader)
                        .click()
                        .get(PageSelectors.detailsLinkFlavorCodeHeaderSortDownIndicator)
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

        const updateLinkFlavorCodeColumnIsVisible = false;
        const deleteAsyncButtonLinkFlavorCodeColumnIsVisible = true;
        const detailsLinkFlavorCodeColumnIsVisible = true;

        if (destinationPageName == 'XXXX') { //placeholder

        }

        //row buttons
        else if (destinationPageName == 'FlavorDetails' && //updateLinkFlavorCode
            updateLinkFlavorCodeColumnIsVisible) {
            cy.log('click row button updateLinkFlavorCode...');
            cy.get(PageSelectors.updateLinkFlavorCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'FlavorDelete' && //deleteAsyncButtonLinkFlavorCode
            deleteAsyncButtonLinkFlavorCodeColumnIsVisible) {
            cy.log('click row button deleteAsyncButtonLinkFlavorCode...');
            cy.get(PageSelectors.deleteAsyncButtonLinkFlavorCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'FlavorDetails' &&   //detailsLinkFlavorCode
            detailsLinkFlavorCodeColumnIsVisible) {
            cy.log('click row button detailsLinkFlavorCode...');
            cy.get(PageSelectors.detailsLinkFlavorCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else {
            throw new Error(`Unknown destination page name: ${destinationPageName}`);
        }
    }

}
export default PacUserFlavorListPage;

