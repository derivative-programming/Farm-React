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
            if(PageSettings.dateGreaterThanFilterCodeHeaderIsVisible){
                cy.get(PageSelectors.dateGreaterThanFilterCodeHeader)
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
            if(PageSettings.updateLinkDateGreaterThanFilterCodeHeaderIsVisible){
                cy.get(PageSelectors.updateLinkDateGreaterThanFilterCodeHeader)
                .should('exist');

                cy.get(PageSelectors.updateLinkDateGreaterThanFilterCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateLinkDateGreaterThanFilterCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateLinkDateGreaterThanFilterCodeHeader)
                .click()
                .click()
                .get(PageSelectors.updateLinkDateGreaterThanFilterCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.updateLinkDateGreaterThanFilterCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.updateLinkDateGreaterThanFilterCodeHeader)
                        .click()
                        .get(PageSelectors.updateLinkDateGreaterThanFilterCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.updateLinkDateGreaterThanFilterCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.updateLinkDateGreaterThanFilterCodeHeader)
                        .click()
                        .get(PageSelectors.updateLinkDateGreaterThanFilterCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.deleteAsyncButtonLinkDateGreaterThanFilterCodeHeaderIsVisible){
                cy.get(PageSelectors.deleteAsyncButtonLinkDateGreaterThanFilterCodeHeader)
                .should('exist');

                cy.get(PageSelectors.deleteAsyncButtonLinkDateGreaterThanFilterCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.deleteAsyncButtonLinkDateGreaterThanFilterCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.deleteAsyncButtonLinkDateGreaterThanFilterCodeHeader)
                .click()
                .click()
                .get(PageSelectors.deleteAsyncButtonLinkDateGreaterThanFilterCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.deleteAsyncButtonLinkDateGreaterThanFilterCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.deleteAsyncButtonLinkDateGreaterThanFilterCodeHeader)
                        .click()
                        .get(PageSelectors.deleteAsyncButtonLinkDateGreaterThanFilterCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.deleteAsyncButtonLinkDateGreaterThanFilterCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.deleteAsyncButtonLinkDateGreaterThanFilterCodeHeader)
                        .click()
                        .get(PageSelectors.deleteAsyncButtonLinkDateGreaterThanFilterCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.detailsLinkDateGreaterThanFilterCodeHeaderIsVisible){
                cy.get(PageSelectors.detailsLinkDateGreaterThanFilterCodeHeader)
                .should('exist');

                cy.get(PageSelectors.detailsLinkDateGreaterThanFilterCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.detailsLinkDateGreaterThanFilterCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.detailsLinkDateGreaterThanFilterCodeHeader)
                .click()
                .click()
                .get(PageSelectors.detailsLinkDateGreaterThanFilterCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.detailsLinkDateGreaterThanFilterCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.detailsLinkDateGreaterThanFilterCodeHeader)
                        .click()
                        .get(PageSelectors.detailsLinkDateGreaterThanFilterCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.detailsLinkDateGreaterThanFilterCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.detailsLinkDateGreaterThanFilterCodeHeader)
                        .click()
                        .get(PageSelectors.detailsLinkDateGreaterThanFilterCodeHeaderSortDownIndicator)
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

        const updateLinkDateGreaterThanFilterCodeColumnIsVisible = false;
        const deleteAsyncButtonLinkDateGreaterThanFilterCodeColumnIsVisible = true;
        const detailsLinkDateGreaterThanFilterCodeColumnIsVisible = true;

        if (destinationPageName == 'XXXX') { //placeholder

        }

        //row buttons
        else if (destinationPageName == 'DateGreaterThanFilterDetails' && //updateLinkDateGreaterThanFilterCode
            updateLinkDateGreaterThanFilterCodeColumnIsVisible) {
            cy.log('click row button updateLinkDateGreaterThanFilterCode...');
            cy.get(PageSelectors.updateLinkDateGreaterThanFilterCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'DateGreaterThanFilterDelete' && //deleteAsyncButtonLinkDateGreaterThanFilterCode
            deleteAsyncButtonLinkDateGreaterThanFilterCodeColumnIsVisible) {
            cy.log('click row button deleteAsyncButtonLinkDateGreaterThanFilterCode...');
            cy.get(PageSelectors.deleteAsyncButtonLinkDateGreaterThanFilterCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'DateGreaterThanFilterDetails' &&   //detailsLinkDateGreaterThanFilterCode
            detailsLinkDateGreaterThanFilterCodeColumnIsVisible) {
            cy.log('click row button detailsLinkDateGreaterThanFilterCode...');
            cy.get(PageSelectors.detailsLinkDateGreaterThanFilterCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else {
            throw new Error(`Unknown destination page name: ${destinationPageName}`);
        }
    }

}
export default PacUserDateGreaterThanFilterListPage;

