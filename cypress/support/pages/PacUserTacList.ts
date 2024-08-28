/* eslint-disable no-dupe-else-if */

import { PacUserTacListPageSelectors  as PageSelectors } from '../selectors/PacUserTacList';
import { PacUserTacListPageSettings  as PageSettings } from './settings/PacUserTacList';
import { PacUserTacListPageTexts as PageTexts } from '../texts/PacUserTacList';
import { pageUrlPrefixes as PageUrlPrefixes } from '../urls/pageUrlPrefixes';
import   RoutingAssistant   from '../routingAssistant'

export class PacUserTacListPage {

    visit() {
		cy.log('PacUserTacListPage.visit() start');

        if(!this.isLoginRequired()){
            //go to it directly
            cy.visit(PageUrlPrefixes.pacUserTacList + '/00000000-0000-0000-0000-000000000000');
            return;
        }
        cy.log('Login required');
        const routingAssistant = new RoutingAssistant();
        // eslint-disable-next-line prefer-const
        let currentPage = ""

        routingAssistant.goToPage(currentPage,'PacUserTacList');

        cy.url().then(url => {
            if(!url.includes( PageUrlPrefixes.pacUserTacList + '/'))
            {
                //try just in case. Api may override empty url context code
                cy.visit(PageUrlPrefixes.pacUserTacList + '/00000000-0000-0000-0000-000000000000');
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
        cy.url().should('include', PageUrlPrefixes.pacUserTacList);
    }

    verifyPageElements() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.tacCodeHeaderIsVisible){
                cy.get(PageSelectors.tacCodeHeader)
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
        //cy.log('Verifying row button deleteAsyncButtonLinkTacCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkTacCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkTacCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkTacCode...');
        //cy.get(PageSelectors.detailsLinkTacCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkTacCodeRowButtonText);
    }

    verifySort() {

        //column headers
        if(PageSettings.calculatedIsVisualizationGrid){
            cy.log('Verifying column headers...');
            if(PageSettings.tacDisplayOrderHeaderIsVisible){
                cy.get(PageSelectors.tacDisplayOrderHeader)
                .should('be.visible')
                .should('include.text', PageTexts.tacDisplayOrderHeaderText);

                cy.get(PageSelectors.tacDisplayOrderHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacDisplayOrderHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacDisplayOrderHeader)
                .click()
                .click()
                .get(PageSelectors.tacDisplayOrderHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.tacDisplayOrderHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.tacDisplayOrderHeader)
                        .click()
                        .get(PageSelectors.tacDisplayOrderHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.tacDisplayOrderHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.tacDisplayOrderHeader)
                        .click()
                        .get(PageSelectors.tacDisplayOrderHeaderSortDownIndicator)
                        .should('exist');
                    }
                });

            }
            if(PageSettings.tacIsActiveHeaderIsVisible){
                cy.get(PageSelectors.tacIsActiveHeader)
                .should('be.visible')
                .should('include.text', PageTexts.tacIsActiveHeaderText);

                cy.get(PageSelectors.tacIsActiveHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacIsActiveHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacIsActiveHeader)
                .click()
                .click()
                .get(PageSelectors.tacIsActiveHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.tacIsActiveHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.tacIsActiveHeader)
                        .click()
                        .get(PageSelectors.tacIsActiveHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.tacIsActiveHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.tacIsActiveHeader)
                        .click()
                        .get(PageSelectors.tacIsActiveHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.tacLookupEnumNameHeaderIsVisible){
                cy.get(PageSelectors.tacLookupEnumNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.tacLookupEnumNameHeaderText);

                cy.get(PageSelectors.tacLookupEnumNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacLookupEnumNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacLookupEnumNameHeader)
                .click()
                .click()
                .get(PageSelectors.tacLookupEnumNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.tacLookupEnumNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.tacLookupEnumNameHeader)
                        .click()
                        .get(PageSelectors.tacLookupEnumNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.tacLookupEnumNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.tacLookupEnumNameHeader)
                        .click()
                        .get(PageSelectors.tacLookupEnumNameHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.tacNameHeaderIsVisible){
                cy.get(PageSelectors.tacNameHeader)
                .should('be.visible')
                .should('include.text', PageTexts.tacNameHeaderText);

                cy.get(PageSelectors.tacNameHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacNameHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.tacNameHeader)
                .click()
                .click()
                .get(PageSelectors.tacNameHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.tacNameHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.tacNameHeader)
                        .click()
                        .get(PageSelectors.tacNameHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.tacNameHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.tacNameHeader)
                        .click()
                        .get(PageSelectors.tacNameHeaderSortDownIndicator)
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
            if(PageSettings.updateLinkTacCodeHeaderIsVisible){
                cy.get(PageSelectors.updateLinkTacCodeHeader)
                .should('exist');

                cy.get(PageSelectors.updateLinkTacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateLinkTacCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.updateLinkTacCodeHeader)
                .click()
                .click()
                .get(PageSelectors.updateLinkTacCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.updateLinkTacCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.updateLinkTacCodeHeader)
                        .click()
                        .get(PageSelectors.updateLinkTacCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.updateLinkTacCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.updateLinkTacCodeHeader)
                        .click()
                        .get(PageSelectors.updateLinkTacCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.deleteAsyncButtonLinkTacCodeHeaderIsVisible){
                cy.get(PageSelectors.deleteAsyncButtonLinkTacCodeHeader)
                .should('exist');

                cy.get(PageSelectors.deleteAsyncButtonLinkTacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.deleteAsyncButtonLinkTacCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.deleteAsyncButtonLinkTacCodeHeader)
                .click()
                .click()
                .get(PageSelectors.deleteAsyncButtonLinkTacCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.deleteAsyncButtonLinkTacCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.deleteAsyncButtonLinkTacCodeHeader)
                        .click()
                        .get(PageSelectors.deleteAsyncButtonLinkTacCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.deleteAsyncButtonLinkTacCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.deleteAsyncButtonLinkTacCodeHeader)
                        .click()
                        .get(PageSelectors.deleteAsyncButtonLinkTacCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
            if(PageSettings.detailsLinkTacCodeHeaderIsVisible){
                cy.get(PageSelectors.detailsLinkTacCodeHeader)
                .should('exist');

                cy.get(PageSelectors.detailsLinkTacCodeHeaderSortDownIndicator)
                .should('not.exist');
                cy.get(PageSelectors.detailsLinkTacCodeHeaderSortUpIndicator)
                .should('not.exist');
                cy.get(PageSelectors.detailsLinkTacCodeHeader)
                .click()
                .click()
                .get(PageSelectors.detailsLinkTacCodeHeaderSortDownIndicator).then(($el) => {
                    if ($el.length) {
                        cy.get(PageSelectors.detailsLinkTacCodeHeaderSortDownIndicator)
                        .should('exist')
                        .get(PageSelectors.detailsLinkTacCodeHeader)
                        .click()
                        .get(PageSelectors.detailsLinkTacCodeHeaderSortUpIndicator)
                        .should('exist');
                    } else {
                        cy.get(PageSelectors.detailsLinkTacCodeHeaderSortUpIndicator)
                        .should('exist')
                        .get(PageSelectors.detailsLinkTacCodeHeader)
                        .click()
                        .get(PageSelectors.detailsLinkTacCodeHeaderSortDownIndicator)
                        .should('exist');
                    }
                });
            }
        }

        //report buttons

        //row button text - not ignored
        //cy.log('Verifying row button deleteAsyncButtonLinkTacCode...');
        //cy.get(PageSelectors.deleteAsyncButtonLinkTacCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.deleteAsyncButtonLinkTacCodeRowButtonText);
        //cy.log('Verifying row button detailsLinkTacCode...');
        //cy.get(PageSelectors.detailsLinkTacCodeRowButton)
        //    .should('be.visible')
        //    .should('include.text', PageTexts.detailsLinkTacCodeRowButtonText);
    }

    clickButtonWithDestination(destinationPageName) {
		cy.log('PacUserTacListPage.clickButtonWithDestination() destinationPageName: ' + destinationPageName);

        const updateLinkTacCodeColumnIsVisible = false;
        const deleteAsyncButtonLinkTacCodeColumnIsVisible = true;
        const detailsLinkTacCodeColumnIsVisible = true;

        if (destinationPageName == 'XXXX') { //placeholder

        }

        //row buttons
        else if (destinationPageName == 'TacDetails' && //updateLinkTacCode
            updateLinkTacCodeColumnIsVisible) {
            cy.log('click row button updateLinkTacCode...');
            cy.get(PageSelectors.updateLinkTacCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'TacDelete' && //deleteAsyncButtonLinkTacCode
            deleteAsyncButtonLinkTacCodeColumnIsVisible) {
            cy.log('click row button deleteAsyncButtonLinkTacCode...');
            cy.get(PageSelectors.deleteAsyncButtonLinkTacCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else if (destinationPageName == 'TacDetails' &&   //detailsLinkTacCode
            detailsLinkTacCodeColumnIsVisible) {
            cy.log('click row button detailsLinkTacCode...');
            cy.get(PageSelectors.detailsLinkTacCodeRowButton)
            .click();
            cy.wait(2000);
        }
        else {
            throw new Error(`Unknown destination page name: ${destinationPageName}`);
        }
    }

}
export default PacUserTacListPage;

