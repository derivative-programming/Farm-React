/* eslint-disable no-dupe-else-if */

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
        // eslint-disable-next-line prefer-const
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
            if(PageSettings.triStateFilterCodeHeaderIsVisible){
                cy.get(PageSelectors.triStateFilterCodeHeader)
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
            if(PageSettings.updateLinkTriStateFilterCodeHeaderIsVisible){
                cy.get(PageSelectors.updateLinkTriStateFilterCodeHeader)
                .should('exist');

                cy.get(PageSelectors.updateLinkTriStateFilterCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateLinkTriStateFilterCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateLinkTriStateFilterCodeHeader)
                .click()
                .click()
                .get(PageSelectors.updateLinkTriStateFilterCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.updateLinkTriStateFilterCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.updateLinkTriStateFilterCodeHeader)
                        .click()
                        .get(PageSelectors.updateLinkTriStateFilterCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.updateLinkTriStateFilterCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.updateLinkTriStateFilterCodeHeader)
                        .click()
                        .get(PageSelectors.updateLinkTriStateFilterCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.deleteAsyncButtonLinkTriStateFilterCodeHeaderIsVisible){
                cy.get(PageSelectors.deleteAsyncButtonLinkTriStateFilterCodeHeader)
                .should('exist');

                cy.get(PageSelectors.deleteAsyncButtonLinkTriStateFilterCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.deleteAsyncButtonLinkTriStateFilterCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.deleteAsyncButtonLinkTriStateFilterCodeHeader)
                .click()
                .click()
                .get(PageSelectors.deleteAsyncButtonLinkTriStateFilterCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.deleteAsyncButtonLinkTriStateFilterCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.deleteAsyncButtonLinkTriStateFilterCodeHeader)
                        .click()
                        .get(PageSelectors.deleteAsyncButtonLinkTriStateFilterCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.deleteAsyncButtonLinkTriStateFilterCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.deleteAsyncButtonLinkTriStateFilterCodeHeader)
                        .click()
                        .get(PageSelectors.deleteAsyncButtonLinkTriStateFilterCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.detailsLinkTriStateFilterCodeHeaderIsVisible){
                cy.get(PageSelectors.detailsLinkTriStateFilterCodeHeader)
                .should('exist');

                cy.get(PageSelectors.detailsLinkTriStateFilterCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.detailsLinkTriStateFilterCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.detailsLinkTriStateFilterCodeHeader)
                .click()
                .click()
                .get(PageSelectors.detailsLinkTriStateFilterCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.detailsLinkTriStateFilterCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.detailsLinkTriStateFilterCodeHeader)
                        .click()
                        .get(PageSelectors.detailsLinkTriStateFilterCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.detailsLinkTriStateFilterCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.detailsLinkTriStateFilterCodeHeader)
                        .click()
                        .get(PageSelectors.detailsLinkTriStateFilterCodeHeaderSortDownIndicator)
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

        const updateLinkTriStateFilterCodeColumnIsVisible = false;
        const deleteAsyncButtonLinkTriStateFilterCodeColumnIsVisible = true;
        const detailsLinkTriStateFilterCodeColumnIsVisible = true;

        if (destinationPageName == 'XXXX') { //placeholder

        }

        //row buttons
        else if (destinationPageName == 'TriStateFilterDetails' && //updateLinkTriStateFilterCode
            updateLinkTriStateFilterCodeColumnIsVisible) {
            cy.log('click row button updateLinkTriStateFilterCode...');
            cy.get(PageSelectors.updateLinkTriStateFilterCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'TriStateFilterDelete' && //deleteAsyncButtonLinkTriStateFilterCode
            deleteAsyncButtonLinkTriStateFilterCodeColumnIsVisible) {
            cy.log('click row button deleteAsyncButtonLinkTriStateFilterCode...');
            cy.get(PageSelectors.deleteAsyncButtonLinkTriStateFilterCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'TriStateFilterDetails' &&   //detailsLinkTriStateFilterCode
            detailsLinkTriStateFilterCodeColumnIsVisible) {
            cy.log('click row button detailsLinkTriStateFilterCode...');
            cy.get(PageSelectors.detailsLinkTriStateFilterCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else {
            throw new Error(`Unknown destination page name: ${destinationPageName}`);
        }
    }

}
export default PacUserTriStateFilterListPage;

