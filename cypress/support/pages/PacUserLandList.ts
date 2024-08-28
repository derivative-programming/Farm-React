/* eslint-disable no-dupe-else-if */

import { PacUserLandListPageSelectors  as PageSelectors } from '../selectors/PacUserLandList';
import { PacUserLandListPageSettings  as PageSettings } from './settings/PacUserLandList';
import { PacUserLandListPageTexts as PageTexts } from '../texts/PacUserLandList';
import { pageUrlPrefixes as PageUrlPrefixes } from '../urls/pageUrlPrefixes';
import   RoutingAssistant   from '../routingAssistant'

export class PacUserLandListPage {

    visit() {
		cy.log('PacUserLandListPage.visit() start');

        if(!this.isLoginRequired()){
            //go to it directly
            cy.visit(PageUrlPrefixes.pacUserLandList + '/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login required');
        const routingAssistant = new RoutingAssistant();
        // eslint-disable-next-line prefer-const
        let currentPage = ""

        routingAssistant.goToPage(currentPage,'PacUserLandList');

        cy.url().then(url => {
            if(!url.includes( PageUrlPrefixes.pacUserLandList + '/'))
            {
                //try just in case. Api may override empty url context code
                cy.visit(PageUrlPrefixes.pacUserLandList + '/00000000-0000-0000-0000-000000000000');
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
        cy.url().should('include', PageUrlPrefixes.pacUserLandList);
    }

    verifyPageElements() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.landCodeHeaderIsVisible){
                cy.get(PageSelectors.landCodeHeader)
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
        //cy.log('Verifying row button deleteAsyncButtonLinkLandCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkLandCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkLandCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkLandCode...');
        //cy.get(PageSelectors.detailsLinkLandCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkLandCodeRowButtonText);
    }

    verifySort() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.landDisplayOrderHeaderIsVisible){
                cy.get(PageSelectors.landDisplayOrderHeader)
                .should('be.visible')
                .should('include.text', PageTexts.landDisplayOrderHeaderText);

                cy.get(PageSelectors.landDisplayOrderHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landDisplayOrderHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landDisplayOrderHeader)
                .click()
                .click()
                .get(PageSelectors.landDisplayOrderHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.landDisplayOrderHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.landDisplayOrderHeader)
                        .click()
                        .get(PageSelectors.landDisplayOrderHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.landDisplayOrderHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.landDisplayOrderHeader)
                        .click()
                        .get(PageSelectors.landDisplayOrderHeaderSortDownIndicator)
                        .should('exist');
                    }
                });

            }
            if(PageSettings.landIsActiveHeaderIsVisible){
                cy.get(PageSelectors.landIsActiveHeader)
                .should('be.visible')
                .should('include.text', PageTexts.landIsActiveHeaderText);

                cy.get(PageSelectors.landIsActiveHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landIsActiveHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landIsActiveHeader)
                .click()
                .click()
                .get(PageSelectors.landIsActiveHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.landIsActiveHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.landIsActiveHeader)
                        .click()
                        .get(PageSelectors.landIsActiveHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.landIsActiveHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.landIsActiveHeader)
                        .click()
                        .get(PageSelectors.landIsActiveHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.landLookupEnumNameHeaderIsVisible){
                cy.get(PageSelectors.landLookupEnumNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.landLookupEnumNameHeaderText);

                cy.get(PageSelectors.landLookupEnumNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landLookupEnumNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landLookupEnumNameHeader)
                .click()
                .click()
                .get(PageSelectors.landLookupEnumNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.landLookupEnumNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.landLookupEnumNameHeader)
                        .click()
                        .get(PageSelectors.landLookupEnumNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.landLookupEnumNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.landLookupEnumNameHeader)
                        .click()
                        .get(PageSelectors.landLookupEnumNameHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.landNameHeaderIsVisible){
                cy.get(PageSelectors.landNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.landNameHeaderText);

                cy.get(PageSelectors.landNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.landNameHeader)
                .click()
                .click()
                .get(PageSelectors.landNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.landNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.landNameHeader)
                        .click()
                        .get(PageSelectors.landNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.landNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.landNameHeader)
                        .click()
                        .get(PageSelectors.landNameHeaderSortDownIndicator)
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
            if(PageSettings.updateLinkLandCodeHeaderIsVisible){
                cy.get(PageSelectors.updateLinkLandCodeHeader)
                .should('exist');

                cy.get(PageSelectors.updateLinkLandCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateLinkLandCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateLinkLandCodeHeader)
                .click()
                .click()
                .get(PageSelectors.updateLinkLandCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.updateLinkLandCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.updateLinkLandCodeHeader)
                        .click()
                        .get(PageSelectors.updateLinkLandCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.updateLinkLandCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.updateLinkLandCodeHeader)
                        .click()
                        .get(PageSelectors.updateLinkLandCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.deleteAsyncButtonLinkLandCodeHeaderIsVisible){
                cy.get(PageSelectors.deleteAsyncButtonLinkLandCodeHeader)
                .should('exist');

                cy.get(PageSelectors.deleteAsyncButtonLinkLandCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.deleteAsyncButtonLinkLandCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.deleteAsyncButtonLinkLandCodeHeader)
                .click()
                .click()
                .get(PageSelectors.deleteAsyncButtonLinkLandCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.deleteAsyncButtonLinkLandCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.deleteAsyncButtonLinkLandCodeHeader)
                        .click()
                        .get(PageSelectors.deleteAsyncButtonLinkLandCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.deleteAsyncButtonLinkLandCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.deleteAsyncButtonLinkLandCodeHeader)
                        .click()
                        .get(PageSelectors.deleteAsyncButtonLinkLandCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.detailsLinkLandCodeHeaderIsVisible){
                cy.get(PageSelectors.detailsLinkLandCodeHeader)
                .should('exist');

                cy.get(PageSelectors.detailsLinkLandCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.detailsLinkLandCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.detailsLinkLandCodeHeader)
                .click()
                .click()
                .get(PageSelectors.detailsLinkLandCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.detailsLinkLandCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.detailsLinkLandCodeHeader)
                        .click()
                        .get(PageSelectors.detailsLinkLandCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.detailsLinkLandCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.detailsLinkLandCodeHeader)
                        .click()
                        .get(PageSelectors.detailsLinkLandCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
        }

        //report buttons

        //row button text - not ignored
        //cy.log('Verifying row button deleteAsyncButtonLinkLandCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkLandCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkLandCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkLandCode...');
        //cy.get(PageSelectors.detailsLinkLandCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkLandCodeRowButtonText);
    }

    clickButtonWithDestination(destinationPageName) {
		cy.log('PacUserLandListPage.clickButtonWithDestination() destinationPageName: ' + destinationPageName);

        const updateLinkLandCodeColumnIsVisible = false;
        const deleteAsyncButtonLinkLandCodeColumnIsVisible = true;
        const detailsLinkLandCodeColumnIsVisible = true;

        if (destinationPageName == 'XXXX') { //placeholder

        }

        //row buttons
        else if (destinationPageName == 'LandDetails' && //updateLinkLandCode
            updateLinkLandCodeColumnIsVisible) {
            cy.log('click row button updateLinkLandCode...');
            cy.get(PageSelectors.updateLinkLandCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'LandDelete' && //deleteAsyncButtonLinkLandCode
            deleteAsyncButtonLinkLandCodeColumnIsVisible) {
            cy.log('click row button deleteAsyncButtonLinkLandCode...');
            cy.get(PageSelectors.deleteAsyncButtonLinkLandCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'LandDetails' &&   //detailsLinkLandCode
            detailsLinkLandCodeColumnIsVisible) {
            cy.log('click row button detailsLinkLandCode...');
            cy.get(PageSelectors.detailsLinkLandCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else {
            throw new Error(`Unknown destination page name: ${destinationPageName}`);
        }
    }

}
export default PacUserLandListPage;

